const path = require('path');
const context = __dirname;

function config() {
    return {
        name: 'client',
        mode: 'development',
        devtool: 'inline-source-map',
        entry: {
            'default': './ts/default.ts',
            'initialize': './ts/initialize.ts'
        },
        target: 'web',
        context,
        output: {
            filename: '[name].js',
            path: path.resolve(__dirname, 'dist'),
        },
        resolve: {
            extensions: ['.ts', '.tsx', '.js', 'jsx']
        },
        module: {
            rules: [
                {
                    test: /\.tsx?$/,
                    loader: 'ts-loader',
                    exclude: /node_modules/,
                    options: {
                        configFile: path.resolve(__dirname, './tsconfig.json'),
                    },
                }
            ]
        }
    };
}
export default config;
