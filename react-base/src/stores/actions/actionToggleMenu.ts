/*
 * @Author: wdy
 * @Date: 2019-04-01 10:53:32
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:13:55
 * @des 所有的action定义
 */
// types
import type {TypeActionIsToggleMenu, TypeActionViewWidth} from './index'
import type {TypeFunSetIsToggleMenu, TypeFunViewWidth} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component

const clientWidth = document.documentElement.clientWidth
/**
 * 菜单是否展开
 * @param isToggleMenu
 */
const setIsToggleMenu: TypeFunSetIsToggleMenu = (isToggleMenu: boolean): TypeActionIsToggleMenu => ({
  type: types.SET_IS_TOGGLE_MENU,
  data: isToggleMenu,
})
/**
 * 视口宽度
 * @param isToggleMenu
 */
const setViewWidth: TypeFunViewWidth = (viewWidth: number): TypeActionViewWidth => ({
  type: types.SET_VIEW_WIDTH,
  data: viewWidth,
})

export {setIsToggleMenu, setViewWidth}
