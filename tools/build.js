/*eslint-disable no-console*/
import webpack from 'webpack';
import webpackConfig from '../webpack.config.prod';
import colors from 'colors';

process.env.NODE_ENV = 'production';

console.log('Genereting minified bundle for production via Webpack. This may take a moment...'.blue);

webpack(webpackConfig).run((err, stats) => {
    if(err){
        console.log(err.blod.red);
        return 1;
    }

    const jsonStats = stats.toJson();

    if(jsonStats.hasErros){
        return jsonStats.errors.map(error => console.log(error.red));
    }

    if(jsonStats.hasWarnings){
        console.log('Webpack generate the following warnings: '.bold.yellow);
        jsonStats.warnings.map(warning => console.log(warning.yellow));
    }

    console.log(`Webpack stats: ${stats}`);
    console.log('Your app has been compiled in production mode and written to /dist'.green);
    return 0;
});