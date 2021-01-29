/*
 * @Author: wdy
 * @Date: 2021-01-07 16:28:36
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:12:27
 */

import type {TypeMenu} from './index'
export const getActiveMenu = (menus: TypeMenu[], key: string): TypeMenu => {
  let activeMenu: TypeMenu = {}
  menus.forEach(menu => {
    if (menu.id === key) {
      activeMenu = menu
    } else if (menu.children?.length) {
      menu.children.forEach(sub => {
        if (sub.id === key) {
          activeMenu = sub
        }
      })
    }
  })
  return activeMenu
}
