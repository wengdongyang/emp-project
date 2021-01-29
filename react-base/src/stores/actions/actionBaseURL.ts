/*
 * @Author: wdy
 * @Date: 2019-12-03 13:36:20
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:13:28
 */
// types
import type {TypeActionBaseHostURL, TypeActionBaseURL, TypeActionBaseWebsocketURL} from './index'
import type {TypeFunSetBaseHostURL, TypeFunSetBaseURL, TypeFunSetBaseWebsocketURL} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component

const setBaseHostURL: TypeFunSetBaseHostURL = (baseURL: string): TypeActionBaseHostURL => ({
  type: types.SET_BASE_URL,
  data: baseURL,
})
/**
 * baseURL
 * @param baseURL
 */
const setBaseURL: TypeFunSetBaseURL = (baseURL: string): TypeActionBaseURL => ({
  type: types.SET_BASE_URL,
  data: baseURL,
})

/**
 * websocketURL
 * @param baseWebsocketURL
 */
const setBaseWebsocketURL: TypeFunSetBaseWebsocketURL = (baseWebsocketURL: string): TypeActionBaseWebsocketURL => ({
  type: types.SET_BASE_WEBSOCKET_URL,
  data: baseWebsocketURL,
})

export {setBaseHostURL, setBaseURL, setBaseWebsocketURL}
