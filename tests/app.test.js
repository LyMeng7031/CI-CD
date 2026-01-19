const request = require("supertest");
const express = require("express");

const app = express();
app.get("/", (req, res) => {
  res.send("Hello CI!");
});

test("GET / should return Hello CI!", async () => {
  const res = await request(app).get("/");
  expect(res.text).toBe("Hello CI!");
});
