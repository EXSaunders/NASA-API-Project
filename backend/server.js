// NASA API Stuff Server

import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const OURTESTVAR = process.env.Test_Var || 'No Test Var';
const PORT = process.env.PORT || 3000;
const app = express();

console.log (OURTESTVAR);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

