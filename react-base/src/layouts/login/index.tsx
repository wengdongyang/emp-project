/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:11:35
 */
import {connect} from 'react-redux'
import React, {FunctionComponent} from 'react'
// types
import type {Dispatch} from 'redux'
import type {TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo} from '../../types'
// config
import {menuConfigs} from './configs'
// api
// util
// store
import {setMenus, setBaseHostURL, setBaseURL, setBaseWebsocketURL, setUserInfo, setToken, setIsToggleMenu, setViewWidth} from '../../stores/actions'
// component
import LoginComponent from './LoginComponent'

/**
 * Props
 */
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
 * 系统
 */
interface TypeOs {
  disabled?: boolean
  name?: string
  code?: string
}
/**
 * form 表单
 */
interface TypeLoginForm {
  username: string
  password: string
  [key: string]: any
}

const clientWidth = document.documentElement.clientWidth
const Login: FunctionComponent<Props> = props => <LoginComponent {...props} menuConfigs={menuConfigs} />

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

export type {TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo, Props, TypeOs, TypeLoginForm}
export default connect(mapStateToProps, mapDispatchToProps)(Login)
