const app = require("./app");

app.get("*", () => {});

const port = process.env.PORT || 4000;

app.listen(port, () => {
  console.log("Server is up on port " + port);
});
