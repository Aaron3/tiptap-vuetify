import { HorizontalRule as HorizontalRuleOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '../../configs/theme'
import VuetifyIcon from './icons/VuetifyIcon'
import TextIcon from './icons/TextIcon'
import I18nText from '../../i18n/I18nText'
import AbstractExtension from '../AbstractExtension'
import ExtensionActionInterface from '..//actions/ExtensionActionInterface'
import ExtensionActionRenderBtnClass from '..//actions/renders/btn/ExtensionActionRenderBtnClass'

export default class HorizontalRule extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, HorizontalRuleOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    return [
      {
        render: new ExtensionActionRenderBtnClass({
          tooltip: new I18nText('extensions.HorizontalRule.buttons.horizontalRule.tooltip'),
          icons: {
            [VuetifyIconsGroups.md]: new TextIcon('—'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-minus'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-minus'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M19,13H5V11H19V13Z')
          },
          nativeExtensionName: 'horizontal_rule'
        })
      }
    ]
  }
}
