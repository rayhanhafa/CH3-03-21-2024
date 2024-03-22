require('dotenv/config') //panggil env
const app = require("./app");

const PORT = process.env.PORT; //panggil env yang tidak igin terlihat

app.listen(PORT, () => {
  console.log(`APP running on port : ${PORT}`);
});