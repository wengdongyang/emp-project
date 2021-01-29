/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:14:44
 * @des 所有的userReducer定义
 */
// types
import type {TypeUserInfo} from '../../types'
import type {TypeReducerActionUserInfo, TypeReducerActionToken, TypeReducerUserInfo, TypeReducerToken} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component

/**
 * 设置userInfo
 * @param state
 * @param action
 */
const userInfo: TypeReducerUserInfo = (state: TypeUserInfo = {}, action: TypeReducerActionUserInfo): TypeUserInfo => {
  switch (action.type) {
    case types.SET_USER_INFO: {
      return action.data
    }
    default:
      return state
  }
}
/**
 * token
 * @param {*} state
 * @param {*} action
 */
const token: TypeReducerToken = (state = '', action: TypeReducerActionToken): string => {
  switch (action.type) {
    case types.SET_TOKEN: {
      return action.data
    }
    default:
      return state
  }
}
export {userInfo, token}
