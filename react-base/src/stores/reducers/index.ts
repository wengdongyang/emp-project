/*
 * @Author: wdy
 * @Date: 2021-01-07 13:44:48
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:15:32
 */
import {combineReducers, CombinedState} from 'redux'
// types
import type {TypeMenu, TypeUserInfo} from '../../types'
// config
// api
// util
// store
// component

interface TypeReducerActionBaseHostURL {
  type: string
  data: string
}
type TypeReducerActionBaseURL = TypeReducerActionBaseHostURL

type TypeReducerActionWebsocketURL = TypeReducerActionBaseHostURL

interface TypeReducerActionMenus {
  type: string
  data: TypeMenu[]
}

interface TypeReducerActionIsToggleMenu {
  type: string
  data: boolean
}
interface TypeReducerActionViewWidth {
  type: string
  data: number
}
interface TypeReducerActionViewHeight {
  type: string
  data: number
}
interface TypeReducerActionUserInfo {
  type: string
  data: TypeUserInfo
}
interface TypeReducerActionToken {
  type: string
  data: string
}
export type {TypeReducerActionBaseHostURL, TypeReducerActionBaseURL, TypeReducerActionWebsocketURL, TypeReducerActionMenus, TypeReducerActionIsToggleMenu, TypeReducerActionViewWidth, TypeReducerActionViewHeight, TypeReducerActionUserInfo, TypeReducerActionToken}

type TypeReducerBaseHostURL = (state: string, action: TypeReducerActionBaseHostURL) => string
type TypeReducerBaseURL = (state: string, action: TypeReducerActionBaseURL) => string
type TypeReducerWebsocketURL = (state: string, action: TypeReducerActionWebsocketURL) => string
type TypeReducerMenus = (state: TypeMenu[], action: TypeReducerActionMenus) => TypeMenu[]

type TypeReducerIsToggleMenu = (state: boolean, action: TypeReducerActionIsToggleMenu) => boolean
type TypeReducerViewWidth = (state: number, action: TypeReducerActionViewWidth) => number
type TypeReducerViewHeight = (state: number, action: TypeReducerActionViewHeight) => number
type TypeReducerUserInfo = (state: TypeUserInfo, action: TypeReducerActionUserInfo) => TypeUserInfo
type TypeReducerToken = (state: string, action: TypeReducerActionToken) => string

export type {TypeReducerBaseHostURL, TypeReducerBaseURL, TypeReducerWebsocketURL, TypeReducerMenus, TypeReducerIsToggleMenu, TypeReducerViewWidth, TypeReducerViewHeight, TypeReducerUserInfo, TypeReducerToken}

import {menus} from './reducerMenu'
import {userInfo, token} from './reducerUserInfo'
import {baseHostURL, baseURL, baseWebsocketURL} from './reducerBaseURL'
import {isToggleMenu, viewWidth, viewHeight} from './reducerToggleMenu'

interface TypeCombineReducersObject {
  baseURL: TypeReducerBaseURL
  baseHostURL: TypeReducerBaseHostURL
  baseWebsocketURL: TypeReducerBaseHostURL
  menus: TypeReducerMenus

  isToggleMenu: TypeReducerIsToggleMenu
  viewWidth: TypeReducerViewWidth
  viewHeight: TypeReducerViewHeight
  userInfo: TypeReducerUserInfo
  token: TypeReducerToken
  [key: string]: any
}
const combineReducersObject: TypeCombineReducersObject = {
  menus,
  baseURL,
  baseHostURL,
  baseWebsocketURL,
  token,
  userInfo,

  isToggleMenu,
  viewWidth,
  viewHeight,
}

const _combineReducers: CombinedState<any> = combineReducers(combineReducersObject)

export default _combineReducers
