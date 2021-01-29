/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 15:44:50
 */
import {connect} from 'react-redux'
import React, {FunctionComponent} from 'react'
// types
import type {Dispatch} from 'redux'
import type {TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo} from '../../types'
// config
// api
// util
// store
import {setMenus, setBaseHostURL, setBaseURL, setBaseWebsocketURL, setUserInfo, setToken, setIsToggleMenu, setViewWidth} from '@emp/react-base/stores/actions'
// component
import RootComponent from '@emp/react-base/layouts/root/RootComponent'
import ViewRouter from './components/viewRouter/ViewRouter'

interface Props extends TypeBaseProps {
  setBaseURL: (baseURL: string) => void
  setBaseHostURL: (baseHostURL: string) => void
  setBaseWebsocketURL: (baseWebsocketURL: string) => void

  setMenus: (menus: TypeMenu[]) => void

  setUserInfo: (userInfo: TypeUserInfo) => void
  setToken: (token: string) => void

  setIsToggleMenu: (isToggleMenu: boolean) => void
  setViewWidth: (isToggleMenu: boolean) => void
}

/**
 * 消息通知
 */
interface TypeNoticeTypeConfig {
  label?: string
  value?: string
}
/**
 * app 定义
 */
interface TypeMicroApp {
  name: string
  entry: string
  container: string
  activeRule: string
  props?: TypeBaseProps
}

interface TypeNotice {
  createTime?: string
  id?: string
  sourceId?: string
  sourceType?: string
  state?: string
  stationId?: string
  stationName?: string
  [key: string]: any
}

interface TypeSensor {
  code?: string
  component?: string
  createTime?: string
  createUserId?: string
  disabled?: string
  id?: string
  installPointCode?: string
  interval?: string
  lineId?: string
  lineName?: string
  locationId?: string
  locationName?: string
  modelNo?: string
  name?: string
  parentId?: string
  period?: number
  removed?: string
  serialNo?: string
  snapshot?: string
  stationId?: string
  type?: string
  updateTime?: string
  updateUserId?: string
}

interface TypeNoticeDetail {
  code?: string
  createTime?: string
  eventName?: string
  inspectionCode?: string
  sensor?: TypeSensor
  sensorCategoryEnum?: string
  sourceId?: string
  stationId?: string
  stationName?: string
  targetName?: string
}

const clientWidth = document.documentElement.clientWidth
const Root: FunctionComponent<Props> = props => <RootComponent {...props} viewRouterComponent={<ViewRouter />} />
const mapStateToProps = (state: TypeStore) => ({...state})
const mapDispatchToProps = (dispatch: Dispatch) => ({
  setBaseURL: (baseURL: string) => dispatch(setBaseURL(baseURL)),
  setBaseHostURL: (baseHostURL: string) => dispatch(setBaseHostURL(baseHostURL)),
  setBaseWebsocketURL: (baseWebsocketURL: string) => dispatch(setBaseWebsocketURL(baseWebsocketURL)),
  setMenus: (menus: TypeMenu[]) => dispatch(setMenus(menus)),
  setUserInfo: (userInfo: TypeUserInfo) => dispatch(setUserInfo(userInfo)),
  setToken: (token: string) => dispatch(setToken(token)),
  setIsToggleMenu: (isToggleMenu: boolean) => dispatch(setIsToggleMenu(isToggleMenu)),
  setViewWidth: (isToggleMenu: boolean) => dispatch(setViewWidth(isToggleMenu ? clientWidth - 80 - 20 : clientWidth - 200 - 20)),
})
export type {TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo, Props, TypeNoticeTypeConfig, TypeNotice, TypeNoticeDetail, TypeMicroApp}
export default connect(mapStateToProps, mapDispatchToProps)(Root)
