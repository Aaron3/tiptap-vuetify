import { HardBreak as HardBreakOriginal } from 'tiptap-extensions'
import AbstractExtension from '../AbstractExtension'
import ExtensionActionInterface from '..//actions/ExtensionActionInterface'

export default class HardBreak extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, HardBreakOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
