const http = require("http");
const server = http.createServer(function (req, res) {
  const url = req.url;
  const method = req.method;

  if (url === "/") {
    res.write("<html>");
    res.write("<head><title> Exercício em Node.js</title></head>");
    res.write("<body><h1>Seja bem vindo!</h1></body>");
    res.write(
      "<body><form action='/create-user' method='POST'><input type='text' name='create-user'><button type='submit'>Enviar</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }
  if (url === "/users") {
    res.write("<html>");
    res.write("<body><ul><li>User1</li></ul></body>;");
    res.write("</html>");
    return res.end;
  }
  if (url === "/create-user" && method === "POST") {
    console.log("Enterted in create user");
    const user = [];
    req.on("data", (chunk) => {
      console.log(chunk);
      user.push(chunk);
    });
    return req.on("end", () => {
      const parsedBody = Buffer.concat(user).toString();
      //const createUser = parsedBody.split("=")[1];
      console.log(parsedBody);
      res.statusCode = 302;
      res.setHeader = ("Location", "/");
      return res.end();
    });
  }
  res.setHeader("Content-type", "text/html");
  res.write("<html>");
  res.write("<head><title> Minha primeira página! </title></head>");
  res.write("<body> Estamos no caminho certo!</body>");
  res.write("</html>");
  res.end();
});

server.listen(3000);
