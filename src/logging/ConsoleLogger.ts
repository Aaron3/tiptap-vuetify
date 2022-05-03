import { PACKAGE_NAME } from '../const'

class ConsoleLogger {
  warn (msg: string) {
    console.warn(`${PACKAGE_NAME}: ${msg}`)
  }

  error (msg: string) {
    console.error(`${PACKAGE_NAME}: ${msg}`)
  }
}

export default new ConsoleLogger()
