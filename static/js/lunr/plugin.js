var normaliseSpelling = function (builder) {

    // Define a pipeline function that converts some characters
    var pipelineFunction = function (token) {
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
  }

  alert('lunr plugin loaded')