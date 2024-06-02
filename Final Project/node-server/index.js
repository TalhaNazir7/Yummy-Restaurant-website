import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import router from './routes/router.js'; 
const server = express();

const connectionURL = "mongodb://127.0.0.1:27017";
const port = process.env.PORT || 5000;

main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(connectionURL, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log(`Server running on port : ${port}`))
    .catch((error) => console.log(error.message));
}

server.listen(5000, () => {
  console.log('server listening on port');
});

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json({ extended: true }));

// Use the router for all routes starting with '/'
server.use('/', router);