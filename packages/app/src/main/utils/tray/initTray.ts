import { Menu, Tray } from 'electron'
import { join } from 'path'

export const initTray = (app: Electron.App) => {
  const tray = new Tray(join(__dirname, '../../resources/icon.png'))
  const contextMenu = Menu.buildFromTemplate([
    { label: 'About', type: 'normal', click: () => {} },
    { type: 'separator' },
    { label: 'Exit', type: 'normal', click: () => app.quit() }
  ])
  tray.setToolTip('YTLinker')
  tray.setContextMenu(contextMenu)
}
