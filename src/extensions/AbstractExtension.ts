import AbstractExtensionInterface from './AbstractExtensionInterface'
import ExtensionActionInterface from './actions/ExtensionActionInterface';

export default abstract class AbstractExtension implements AbstractExtensionInterface {
  nativeExtensionInstance = null

  /**
   * Доступные для отображения кнопки (например в зависимости от настроек)
   */
  abstract get availableActions (): ExtensionActionInterface[]

  protected constructor (protected options: Record<string, unknown>, protected extensionClass: unknown) {
    if (extensionClass) {
      // @ts-ignore
      // eslint-disable-next-line new-cap
      this.nativeExtensionInstance = new extensionClass(options)
    }
  }
}
