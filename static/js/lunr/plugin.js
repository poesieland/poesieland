var normaliseSpelling = function (builder) {

  console.log('init? ', window.relearn.isLunrInit)

    // Define a pipeline function that update search terms
    // TODO add metadata for searchPatterns() function to behave like single term search
    var pipelineFunction = function (token) {
      console.log('token:');
      console.log(token);
      if (token.toString().indexOf('œ' > -1)) {
        return concat(token.toString(), ' ', token.toString().replace('œ', 'oe'))
      } else if (token.toString().indexOf('oe' > -1)) {
        return concat(token.toString(), ' ', token.toString().replace('oe', 'œ'))
      } else {
        return token
      }
    }
  
    // Register the pipeline function so the index can be serialised
    lunr.Pipeline.registerFunction(pipelineFunction, 'normaliseSpelling')
  
    // Add the pipeline function to both the indexing pipeline and the
    // searching pipeline
    console.log('builder.pipeline:');
    console.log(builder.pipeline);
    // builder.pipeline.before(lunr.stemmer, pipelineFunction)
    builder.pipeline.before(lunr.trimmer, pipelineFunction)
    console.log('builder.searchPipeline.pipeline:');
    console.log(builder.searchPipeline.pipeline);
    //builder.searchPipeline.before(lunr.stemmer, pipelineFunction)
    //builder.searchPipeline.before(lunr.trimmer, pipelineFunction)
  }

  var idx = lunr(function () {
    this.use(normaliseSpelling)
  })
