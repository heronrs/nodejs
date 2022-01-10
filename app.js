const http = require("http");

const port = process.env.PORT;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end(
    "Test Hello Deploy from Convox!\nI'm: " +
      process.env.APP +
      "\nBuild:" +
      process.env.BUILD +
      "\nRelease: " +
      process.env.RELEASE +
      "\nrunning on: " +
      process.env.RACK +
      "\n MYVAR " +
      process.env.MYVAR
  );
});

server.listen(port, () => {
  console.log(`Server running at ${port}/`);
});
