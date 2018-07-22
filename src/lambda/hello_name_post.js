import querystring from "querystring";

const { URL = "http://localhost:8080" } = process.env;

exports.handler = async (event, context) => {
  // Only allow POST
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: "Method Not Allowed" };
  }

  console.log(URL, event.headers.referer);

  if (!event.headers.referer || !event.headers.referer.startsWith(URL + "/")) {
    return { statusCode: 400, body: "Bad request" };
  }

  // When the method is POST, the name will no longer be in the event’s
  // queryStringParameters – it’ll be in the event body encoded as a query string
  // const params = querystring.parse(event.body);
  // const name = params.name || "World";

  return {
    statusCode: 302,
    headers: {
      Location: event.headers.referer + "?done"
    },
    body: ""
  };

  // return {
  //   statusCode: 200,
  //   body: `Hello, ${name}`
  // };
};
