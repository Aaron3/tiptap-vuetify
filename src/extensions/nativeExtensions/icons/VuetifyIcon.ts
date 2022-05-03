import IconInterface from './IconInterface'

export default class VuetifyIcon implements IconInterface {
  constructor (public name: string) {
  }

  toString (): string {
    return this.name
  }
}
