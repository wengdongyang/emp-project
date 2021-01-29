/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:14:42
 * @des 所有的Reducer定义
 */
// types
import type {TypeReducerActionIsToggleMenu, TypeReducerActionViewWidth, TypeReducerActionViewHeight, TypeReducerIsToggleMenu, TypeReducerViewWidth, TypeReducerViewHeight} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component
const clientWidth = document.documentElement.clientWidth
const clientHeight = document.documentElement.clientHeight
/**
 * isToggleMenu
 * @param {*} state
 * @param {*} action
 */
const isToggleMenu: TypeReducerIsToggleMenu = (state = false, action: TypeReducerActionIsToggleMenu): boolean => {
  switch (action.type) {
    case types.SET_IS_TOGGLE_MENU: {
      return action.data
    }
    default:
      return state
  }
}
/**
 * viewWidth
 * @param state
 * @param action
 */
const viewWidth: TypeReducerViewWidth = (state: number = clientWidth - 200 - 20, action: TypeReducerActionViewWidth): number => {
  switch (action.type) {
    case types.SET_VIEW_WIDTH: {
      return action.data
    }
    default:
      return state
  }
}
/**
 * viewHeight
 * @param state
 * @param action
 */
const viewHeight: TypeReducerViewHeight = (state: number = clientHeight - 64 - 22, action: TypeReducerActionViewHeight): number => {
  switch (action.type) {
    case types.SET_VIEW_HEIGHT: {
      return action.data
    }
    default:
      return state
  }
}
export {isToggleMenu, viewWidth, viewHeight}
