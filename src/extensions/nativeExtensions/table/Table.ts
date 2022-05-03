import { Table as TableOriginal } from 'tiptap-extensions'
import { VuetifyIconsGroups } from '../../../configs/theme'
import VuetifyIcon from '../icons/VuetifyIcon'
import AbstractExtension from '../../AbstractExtension'
import ExtensionActionInterface from '../../actions/ExtensionActionInterface'
import Vue from 'vue'
import ExtensionActionRenderBtnClass from '../../actions/renders/btn/ExtensionActionRenderBtnClass'
import TableWindow from './TableWindow.vue'

export default class Table extends AbstractExtension {
  constructor (options: Record<string, unknown>) {
    super(options, TableOriginal)
  }

  get availableActions (): ExtensionActionInterface[] {
    const nativeExtensionName = 'table'

    return [
      {
        render: new ExtensionActionRenderBtnClass({
          tooltip: 'Table',
          icons: {
            [VuetifyIconsGroups.md]: new VuetifyIcon('table'),
            [VuetifyIconsGroups.fa]: new VuetifyIcon('fas fa-table'),
            [VuetifyIconsGroups.mdi]: new VuetifyIcon('mdi-table'),
            [VuetifyIconsGroups.mdiSvg]: new VuetifyIcon('M8.5,13.5L11,16.5L14.5,12L19,18H5M21,19V5C21,3.89 20.1,3 19,3H5A2,2 0 0,0 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19Z')
          },
          nativeExtensionName,
          async onClick ({ context, editor }) {
            const WindowComponent = Vue.extend(TableWindow)
            const instance = new WindowComponent({
              vuetify: Vue.prototype.tiptapVuetifyPlugin.vuetify,
              propsData: {
                value: true,
                nativeExtensionName,
                context,
                editor
              }
            })

            instance.$mount()
            document.querySelector('body')!.appendChild(instance.$el)
          }
        })
      }
    ]
  }
}
