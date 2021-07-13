import * as express from 'express';

const app = express();
const router = express.Router()

app.get('/', (req, res) => {
    res.send('Well done!');
})
router.get('/', (req, res) => {
    res.send('Medium well!');
})

app.use('/other', router);

app.listen(3000, () => {
    console.log('The application is listening on port 3000!');
})