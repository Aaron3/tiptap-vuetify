import IconInterface from './IconInterface'

export default class TextIcon implements IconInterface {
  constructor (public text: string) {}

  toString () {
    return this.text
  }
}
