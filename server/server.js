import express from 'express';
import path from 'path';
import giftsRouter from "./routes/gift.js";


const __filename = new URL(import.meta.url).pathname;
const __dirname = path.dirname(__filename);

const app = express();


const staticPath = path.join(__dirname, 'client', 'public'); 

app.use('/scripts', express.static(path.join(staticPath, 'scripts')));

app.use('/gifts', giftsRouter);


app.get('/', (req, res) => {
  res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>');
});



const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`);
});






