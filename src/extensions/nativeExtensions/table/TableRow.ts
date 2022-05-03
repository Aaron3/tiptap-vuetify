import { TableRow as TableRowOriginal } from 'tiptap-extensions'
import ExtensionActionInterface from '../../actions/ExtensionActionInterface'
import AbstractExtension from '../../AbstractExtension'

export default class TableRow extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, TableRowOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
