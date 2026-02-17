import http from "http";
 
const server = http.createServer((req, res) => {

  // endpoint health

  if (req.url === "/health") {

    res.writeHead(200, { "Content-Type": "application/json" });

    res.end(JSON.stringify({ status: "ok" }));

    return;

  }
 
  // 404 JSON pour toute autre route

  res.writeHead(404, { "Content-Type": "application/json" });

  res.end(JSON.stringify({ error: "Not Found" }));

});
 
server.listen(3000, () => {

  console.log("Server listening on http://localhost:3000");

});

 

 
 