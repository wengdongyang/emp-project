/*
 * @Author: wdy
 * @Date: 2019-04-01 10:53:32
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:14:14
 * @des 所有的action定义
 */
// types
import type {TypeUserInfo} from '../../types'
import type {TypeActionUserInfo, TypeActionToken} from './index'
import type {TypeFunSetUserInfo, TypeFunSetToken} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component

/**
 * 用户信息
 * @param userInfo
 */
const setUserInfo: TypeFunSetUserInfo = (userInfo: TypeUserInfo): TypeActionUserInfo => ({
  type: types.SET_USER_INFO,
  data: userInfo,
})
/**
 * token
 * @param token
 */
const setToken: TypeFunSetToken = (token: string): TypeActionToken => ({
  type: types.SET_TOKEN,
  data: token,
})
export {setUserInfo, setToken}
