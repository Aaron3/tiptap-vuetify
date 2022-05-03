import { ListItem as ListItemOriginal } from 'tiptap-extensions'
import AbstractExtension from '../AbstractExtension'
import ExtensionActionInterface from '..//actions/ExtensionActionInterface'

export default class ListItem extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, ListItemOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
