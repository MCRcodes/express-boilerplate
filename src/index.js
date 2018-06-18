import express from 'express';
import chalk from 'chalk';

const app = express();

app.get('/', (req, res) => res.json({ hello: 'world!' }));

app.listen(3000, () => {
  const { log } = console;

  log('\n');
  log(chalk.bgGreen.black('Server listening on http://localhost:3000'));
});

export default app;
