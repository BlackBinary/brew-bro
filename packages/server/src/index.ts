import express from 'express';

const app = express();

const port = 3000;

app.use(express.json());

app.use('/*', (req, res) => {
  console.log('Hi');
  return res
    .status(200)
    .json({

    });
});

app.listen(port, () => {
  console.log(`Running server on port ${port}`);
});
