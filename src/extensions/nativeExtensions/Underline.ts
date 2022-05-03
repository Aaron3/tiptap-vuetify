import { Underline as UnderlineOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '../../configs/theme'
import VuetifyIcon from './icons/VuetifyIcon'
import I18nText from '../../i18n/I18nText'
import AbstractExtension from '../AbstractExtension'
import ExtensionActionInterface from '..//actions/ExtensionActionInterface'
import ExtensionActionRenderBtnClass from '..//actions/renders/btn/ExtensionActionRenderBtnClass'

export default class Underline extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, UnderlineOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtnClass({
          tooltip: new I18nText('extensions.Underline.buttons.underline.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('format_underline'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-underline'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-format-underline'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M5,21H19V19H5V21M12,17A6,6 0 0,0 18,11V3H15.5V11A3.5,3.5 0 0,1 12,14.5A3.5,3.5 0 0,1 8.5,11V3H6V11A6,6 0 0,0 12,17Z')
          },
          nativeExtensionName: 'underline'
        })
      }
    ]
  }
}
