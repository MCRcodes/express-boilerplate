import express from 'express';
import chalk from 'chalk';
import cors from 'cors';
import bodyParser from 'body-parser';

const app = express();

app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => res.json({ hello: 'world!' }));

app.listen(3000, () => {
  const { log } = console;

  log('\n');
  log(chalk.bgGreen.black('Server listening on http://localhost:3000'));
});

export default app;
