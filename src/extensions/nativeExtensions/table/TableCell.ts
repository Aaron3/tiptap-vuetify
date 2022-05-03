import { TableCell as TableCellOriginal } from 'tiptap-extensions'
import ExtensionActionInterface from '../../actions/ExtensionActionInterface'
import AbstractExtension from '../../AbstractExtension'

export default class TableCell extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, TableCellOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
