import express from 'express';
import webpack from 'webpack';
import * as path from 'path';
import config from './webpack.config';
const app = express();
const port = 3000;

const compile = config();

// @ts-ignore
const compiler = webpack(compile);
app.use(
    require('webpack-dev-middleware')(compiler, {
        publicPath: '/dist/',
    })
);

app.use(express.static(path.join(__dirname, 'dist')));
app.use(express.static(path.join(__dirname, 'pages')));
app.get('/', (req, res) => res.send('Hello World!'));

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
