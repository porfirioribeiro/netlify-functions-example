exports.handler = async (event, context) => {
  return {
    statusCode: 200,
    headers: {
      "Content-Type": "text/html"
    },
    body: `
      <pre>${JSON.stringify(event, undefined, "  ")}</pre>
      <pre>${JSON.stringify(context, undefined, "  ")}</pre>      
      <pre>${JSON.stringify(process.env, undefined, "  ")}</pre>         
    `
  };
};
