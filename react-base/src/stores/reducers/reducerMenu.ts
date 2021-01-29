/*
 * @Author: wdy
 * @Date: 2019-04-01 11:01:00
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:14:38
 * @des 所有的Reducer定义
 */
// types
import type {TypeMenu} from '../../types'
import type {TypeReducerActionMenus, TypeReducerMenus} from './index'
// config
import * as types from '../mutationTypes'
// api
// util
// store
// component
const menus: TypeReducerMenus = (state: TypeMenu[] = [], action: TypeReducerActionMenus): TypeMenu[] => {
  switch (action.type) {
    case types.SET_MENUS: {
      return action.data
    }
    default:
      return state
  }
}

export {menus}
