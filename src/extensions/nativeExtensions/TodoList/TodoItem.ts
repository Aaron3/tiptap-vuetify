// import { TodoItem as TodoItemOriginal } from 'tiptap-extensions'
import AbstractExtension from '../../AbstractExtension'
import ExtensionActionInterface from '../../actions/ExtensionActionInterface'
import TodoItemNode from './TodoItemNode'

export default class TodoItem extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, TodoItemNode)
  }

  get availableActions (): ExtensionActionInterface[] {
    return []
  }
}
