var normaliseSpelling = function (builder) {

  console.log('init? ', window.relearn.isLunrInit)

    // Define a pipeline function that converts some characters
    var pipelineFunction = function (token) {
      console.log('entering function')
      if (token.toString().indexOf('œ' > -1)) {
        return token.toString().replace('œ', 'oe')
      } else {
        return token
      }
    }
  
    // Register the pipeline function so the index can be serialised
    lunr.Pipeline.registerFunction(pipelineFunction, 'normaliseSpelling')
  
    // Add the pipeline function to both the indexing pipeline and the
    // searching pipeline
    builder.pipeline.before(lunr.stemmer, pipelineFunction)
    builder.searchPipeline.before(lunr.stemmer, pipelineFunction)
  }()
