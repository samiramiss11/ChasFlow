const app = require('./app'); // Note: '.js' extension can be omitted if Node.js resolves it automatically

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
