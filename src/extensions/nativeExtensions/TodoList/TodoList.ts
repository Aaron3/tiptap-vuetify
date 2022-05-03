import { TodoList as TodoListOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '../../../configs/theme'
import VuetifyIcon from '../icons/VuetifyIcon'
import I18nText from '../../../i18n/I18nText'
import AbstractExtension from '../../AbstractExtension'
import ExtensionActionInterface from '../../actions/ExtensionActionInterface'
import ExtensionActionRenderBtnClass from '../../actions/renders/btn/ExtensionActionRenderBtnClass'

export default class TodoList extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, TodoListOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtnClass({
          tooltip: new I18nText('extensions.TodoList.buttons.todoList.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('check_box'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-tasks'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-list-checks'),
            // mdiFormatListChecks
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M3,5H9V11H3V5M5,7V9H7V7H5M11,7H21V9H11V7M11,15H21V17H11V15M5,20L1.5,16.5L2.91,15.09L5,17.17L9.59,12.59L11,14L5,20Z')
          },
          nativeExtensionName: 'todo_list'
        })
      }
    ]
  }
}
