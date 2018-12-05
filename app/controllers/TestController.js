module.exports = (osseus) => {
  return {
    test: async (req, res, next) => {
      osseus.logger.info(`/test req.body: ${JSON.stringify(req.body)}`)
      res.send('OK')
    }
  }
}
