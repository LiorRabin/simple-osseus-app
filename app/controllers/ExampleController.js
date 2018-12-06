module.exports = (osseus) => {
  return {
    /**
     * @api {post} /Example
     * @apiName ExamplePOST
     * @apiGroup Example
     * @apiVersion 1.0.0
     *
     * @apiDescription POST request example - prints to log the request body
     *
     * @apiSuccessExample Success Example
     *     HTTP/1.1 200 OK
     *     "OK"
     */
    examplePOST: async (req, res, next) => {
      osseus.logger.info(`examplePOST req.body: ${JSON.stringify(req.body)}`)
      res.send('OK')
    }
  }
}
