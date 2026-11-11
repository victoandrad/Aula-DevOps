import express from 'express';

const app = express();
const router = express.Router();

router.get('/hello', (req, res) => {
    res.send('Hello, World!');
});

router.get('/me', (req, res) => {
    res.send('Victor de Andrade Miranda')
})

app.use('/api', router);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server started at http://localhost:${PORT}`);
});