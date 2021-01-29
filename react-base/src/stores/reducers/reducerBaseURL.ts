/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:14:36
 * @des 所有的Reducer定义
 */
// types
import type {TypeReducerActionBaseHostURL, TypeReducerActionBaseURL, TypeReducerActionWebsocketURL, TypeReducerBaseHostURL, TypeReducerBaseURL, TypeReducerWebsocketURL} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component
const protocol = window.location.protocol
const host = `192.168.2.60:10090`
// const host = `192.168.2.60:10600`
const BASE_URL = `${protocol}//${host}` // baseUrl
const BASE_WEBSOCKET_URL = `ws://${host}`

const baseHostURL: TypeReducerBaseHostURL = (state: string = host, action: TypeReducerActionBaseHostURL): string => {
  switch (action.type) {
    case types.SET_BASE_HOST_URL: {
      return action.data
    }
    default:
      return state
  }
}

const baseURL: TypeReducerBaseURL = (state: string = BASE_URL, action: TypeReducerActionBaseURL): string => {
  switch (action.type) {
    case types.SET_BASE_URL: {
      return action.data
    }
    default:
      return state
  }
}

const baseWebsocketURL: TypeReducerWebsocketURL = (state: string = BASE_WEBSOCKET_URL, action: TypeReducerActionWebsocketURL): string => {
  switch (action.type) {
    case types.SET_BASE_WEBSOCKET_URL: {
      return action.data
    }
    default:
      return state
  }
}

export {baseHostURL, baseURL, baseWebsocketURL}
