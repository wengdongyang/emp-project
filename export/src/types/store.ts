/*
 * @Author: wdy
 * @Date: 2020-12-07 10:56:29
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:06:37
 */
import type {TypeMenu} from './menu'
import type {TypeUserInfo} from './userInfo'

interface TypeStore {
  baseHostURL: string // host
  baseURL: string // 云端
  baseWebsocketURL: string // websocket

  menus: TypeMenu[] // 菜单

  userInfo: TypeUserInfo
  token: string

  isToggleMenu: boolean
  viewWidth: number
  viewHeight: number
}
export type {TypeStore}
