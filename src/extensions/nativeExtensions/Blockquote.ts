import { Blockquote as BlockquoteOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '../../configs/theme'
import VuetifyIcon from './icons/VuetifyIcon'
import I18nText from '../../i18n/I18nText'
import AbstractExtension from '../AbstractExtension'
import ExtensionActionInterface from '..//actions/ExtensionActionInterface'
import ExtensionActionRenderBtnClass from '..//actions/renders/btn/ExtensionActionRenderBtnClass'

export default class Blockquote extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, BlockquoteOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtnClass({
          tooltip: new I18nText('extensions.Blockquote.buttons.blockquote.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_quote'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-quote-right'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-quote-close'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M14,17H17L19,13V7H13V13H16M6,17H9L11,13V7H5V13H8L6,17Z')
          },
          nativeExtensionName: 'blockquote'
        })
      }
    ]
  }
}
