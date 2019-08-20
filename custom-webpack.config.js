require('reflect-metadata');
const taskFactory = require('@ebottacin/ngx-translate-extract-kml').newTask;

module.exports = {
  plugins: [
    {
      apply: (compiler) => {
        compiler.hooks.afterEmit.tap('AfterEmitPlugin', (compilation) => {
          //need to be imported once per application: @see  https://github.com/inversify/InversifyJS/issues/262#issuecomment-227593844
          const reflectMetadata = require('reflect-metadata');
          const ngExtractKml = require('@ebottacin/ngx-translate-extract-kml');
          const taskFactory = ngExtractKml.newTask;
          const setupIoC = ngExtractKml.setupIoC;

          setupIoC();

          const input = ['./src'];
          const output= ['./assets/kml/ita'];
          const extractTask = taskFactory(input,output);
          extractTask.execute();
        });
      }
    }
  ]
};
