/*
 * @Author: wdy
 * @Date: 2021-01-07 13:44:48
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:14:19
 */
import type {TypeMenu, TypeUserInfo} from '../../types'
interface TypeActionBaseHostURL {
  type: string
  data: string
}
type TypeActionBaseURL = TypeActionBaseHostURL
type TypeActionBaseWebsocketURL = TypeActionBaseHostURL
interface TypeActionMenus {
  type: string
  data: TypeMenu[]
}

interface TypeActionIsToggleMenu {
  type: string
  data: boolean
}
interface TypeActionViewWidth {
  type: string
  data: number
}
interface TypeActionUserInfo {
  type: string
  data: TypeUserInfo
}
interface TypeActionToken {
  type: string
  data: string
}
export type {TypeActionBaseHostURL, TypeActionBaseURL, TypeActionBaseWebsocketURL, TypeActionMenus, TypeActionIsToggleMenu, TypeActionViewWidth, TypeActionUserInfo, TypeActionToken}

type TypeFunSetBaseHostURL = (baseHostURL: string) => TypeActionBaseHostURL
type TypeFunSetBaseURL = (baseURL: string) => TypeActionBaseURL
type TypeFunSetBaseWebsocketURL = (baseWebsocketURL: string) => TypeActionBaseWebsocketURL
type TypeFunSetMenus = (menus: TypeMenu[]) => TypeActionMenus

type TypeFunSetIsToggleMenu = (isToggleMenu: boolean) => TypeActionIsToggleMenu
type TypeFunViewWidth = (viewWidth: number) => TypeActionViewWidth
type TypeFunSetUserInfo = (userInfo: TypeUserInfo) => TypeActionUserInfo
type TypeFunSetToken = (token: string) => TypeActionToken

export type {TypeFunSetBaseHostURL, TypeFunSetBaseURL, TypeFunSetBaseWebsocketURL, TypeFunSetMenus, TypeFunSetIsToggleMenu, TypeFunViewWidth, TypeFunSetUserInfo, TypeFunSetToken}

import {setMenus} from './actionMenu'
import {setUserInfo, setToken} from './actionUserInfo'
import {setIsToggleMenu, setViewWidth} from './actionToggleMenu'
import {setBaseHostURL, setBaseURL, setBaseWebsocketURL} from './actionBaseURL'

export {setMenus, setBaseHostURL, setBaseURL, setBaseWebsocketURL, setUserInfo, setToken, setIsToggleMenu, setViewWidth}
