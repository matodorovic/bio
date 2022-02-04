import express from "express";
import { engine } from "express-handlebars";
import { marked } from "marked";
import fetch from "node-fetch";
import getRatings from "./src/script/getRatings.js";
import { loadReviews } from "./src/script/apiLoader.js";
import { getScreenings, getScreeningsMovie } from "./src/script/loadScreening.js";
import api from "./src/script/apiLoader.js";
import reviews from "./src/script/loadReviews.js";

const app = express();

app.set("view engine", "handlebars");
app.set("views", "./views");
app.engine(
  "handlebars",
  engine({
    defaultLayout: "index",
    helpers: {
      markdown: (md) => marked(md),
    },
  })
);

app.get("/", async (req, res) => {
  res.status(200);
  res.send(res.render("main"));

});

app.get("/api/screeningtime", async (req, res) => {
  const screening = await getScreenings(api);

  res.json(screening);
});

app.get("/api/movies/:movieId/reviews/:reviewPageId", async (req, res) => {
  let data = await loadReviews(req.params.movieId, req.params.reviewPageId);
  let lastPage = data.meta.pagination.pageCount;
  let review = data.data.map(r => new reviews(r));
  let reviewLength = review.length;

  res.json({
    data: review,
    metaLastPage: lastPage,
    metaLength: reviewLength
  })
});

// route for screeningtimes on movie page
app.get("/api/movies/:movieId/screeningtime", async (req, res) => {
  const screening = await getScreeningsMovie(api, req.params.movieId);

  res.json(screening)
});

app.get("/movies", async (req, res) => {
  const movies = await api.loadMovies();
  res.render("movies", { movies });
});

app.get("/movies/:movieId", async (req, res) => {
  const movie = await api.loadMovie(req.params.movieId);
  if (movie) {
    res.render("movie", { movie });
  } else {
    res.status(404).render("404");
  }
});

app.get("/api/movies/:movieId/ratings", async (req, res) => {
  let data = await getRatings(req.params.movieId, api);
  let metaMsg = data.metaMsg;
  let rating = data.data;

  res.json({
    rating,
    metaMsg,
  });
});

app.use(express.json());

app.post("/api/movies/:movieId/reviews", async (req, res) => {
  const response = await fetch(
    "https://lernia-kino-cms.herokuapp.com/api/reviews",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        data: {
          author: req.body.name,
          comment: req.body.comment,
          rating: req.body.rating,
          movie: req.params.movieId,
        },
      }),
    }
  ).then((res) => {   
    return res.json();
  });
  res.status(201).end();
});

app.get("/about", async (req, res) => {
  res.render("about");
});

app.use("/404", async (req, res) => {
  res.render("404");
  res.status(404);
});

app.use("/", express.static("./public"));

app.listen(5080);



export default app;

