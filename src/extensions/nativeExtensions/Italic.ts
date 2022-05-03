import { Italic as ItalicOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '../../configs/theme'
import VuetifyIcon from './icons/VuetifyIcon'
import I18nText from '../../i18n/I18nText'
import ExtensionActionInterface from '..//actions/ExtensionActionInterface'
import ExtensionActionRenderBtnClass from '..//actions/renders/btn/ExtensionActionRenderBtnClass'
import AbstractExtension from '../AbstractExtension'

export default class Italic extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, ItalicOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtnClass({
          tooltip: new I18nText('extensions.Italic.buttons.italic.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_italic'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-italic'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-italic'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M10,4V7H12.21L8.79,15H6V18H14V15H11.79L15.21,7H18V4H10Z')
          },
          nativeExtensionName: 'italic'
        })
      }
    ]
  }
}
