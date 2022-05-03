import { VuetifyIconsGroups } from '../../../../configs/theme'
import IconInterface from '../../../nativeExtensions/icons/IconInterface'
import { Editor } from 'tiptap'
import I18nText from '../../../../i18n/I18nText';

export default interface ExtensionActionRenderBtnOptionsInterface {
  tooltip: string | I18nText | ((context: any, options: any) => string | I18nText)
  icons: Partial<{
    [key in keyof typeof VuetifyIconsGroups]: IconInterface
  }>
  onClick: ({ context, editor }: {
    context: any
    editor: Editor
  }) => any
  onClickOptions?: { [key: string]: any }
  isActive: (...arg: any) => boolean
  isActiveOptions?: { [key: string]: any }
  nativeExtensionName?: string
}
