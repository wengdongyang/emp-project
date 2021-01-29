/*
 * @Author: wdy
 * @Date: 2019-12-03 13:36:20
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:13:36
 */
// types
import type {TypeMenu} from '../../types'
import type {TypeActionMenus} from './index'
import type {TypeFunSetMenus} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component

/**
 * 雾端地址
 * @param baseFogURL
 */
const setMenus: TypeFunSetMenus = (menus: TypeMenu[]): TypeActionMenus => ({
  type: types.SET_MENUS,
  data: menus,
})

export {setMenus}
