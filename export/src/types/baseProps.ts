/*
 * @Author: wdy
 * @Date: 2020-05-21 17:05:42
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:06:32
 */
import type {RouterProps} from 'react-router'
import type {TypeMenu} from './menu'
import type {TypeUserInfo} from './userInfo'

interface TypeBaseProps extends RouterProps {
  baseHostURL: string // host
  baseURL: string // 云端
  baseWebsocketURL: string // websocket

  menus: TypeMenu[]

  userInfo: TypeUserInfo
  token: string

  isToggleMenu: boolean
  viewWidth: number
  viewHeight: number
}
export {TypeBaseProps}
