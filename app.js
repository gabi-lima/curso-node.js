const http = require("http");

const server = http.createServer(function (req, res) {
  const url = req.url;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Minha primeira página! </title></head>");
    res.write("<body> Estamos no caminho certo!</body>");
    res.write("</html>");
    res.end();
  }
  //console.log(req.url, req.method, req.headers);
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> Minha primeira página! </title></head>");
  res.write("<body> Estamos no caminho certo!</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
