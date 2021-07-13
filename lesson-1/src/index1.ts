import * as express from 'express';
import * as http from "http";

const app = express();

app.get('/', (req, res) => {
    res.send('Hello world!');
});

const httpServer = http.createServer(app);

httpServer.listen(3000);
httpServer.on('listening', () => {
    console.log('The application is listening on port 3000!');
});