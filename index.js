const Osseus = require('@colucom/osseus')
const cwd = process.cwd()

const main = async () => {
  try {
    const osseus = await Osseus.init()
    osseus.logger.info('SIMPLE OSSEUS APP IS RUNNING :)')
  } catch (err) {
    console.error('BOOTSTRAP ERROR!', err.stack || err)
    process.exit(1)
  }
}

main()
