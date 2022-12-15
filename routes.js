const fs = require("fs");

function requestHandler(req, res) {
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Minha primeira página! </title></head>");
    res.write(
      "<body><form action='/message' method='POST'><label>Username</label><input type='text' name ='message'><button type='submit'>Enviar</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  //console.log(req.url, req.method, req.headers);
  if (url === "/message" && method === "POST") {
    const body = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      body.push(chunk);
    });
    req.on("end", () => {
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split("=")[1];
      fs.writeFile("message.txt", message, (err) => {});
    });
    res.statusCode = 302;
    res.setHeader = ("Location", "/");
    return res.end();
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> Minha primeira página! </title></head>");
  res.write("<body> Estamos no caminho certo!</body>");
  res.write("</html>");
  res.end();
}

module.exports = requestHandler;
