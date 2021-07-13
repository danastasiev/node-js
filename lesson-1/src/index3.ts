import * as express from 'express';

const app = express();

app.get('/', (req, res) => {
    const resBody = {
        status: 'Well done!'
    };
    res.send(resBody);
})

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})