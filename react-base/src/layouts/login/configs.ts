/*
 * @Author: wdy
 * @Date: 2021-01-07 15:15:22
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 17:34:36
 */
import {TypeMenu, TypeOs} from './index'

import {INTERNAL_PAGE} from '../../configs/index'

const baseMenuConfigs: TypeMenu[] = [{type: INTERNAL_PAGE, name: '首页', owner: 'self', path: 'home'}]

/**
 * 菜单定义
 */
const menuConfigs: TypeMenu[] = baseMenuConfigs.map(menu => {
  const {children = [], ...other} = menu
  const _children = children.map(child => ({...child, id: (Math.random() * 10000000000).toFixed(0)}))
  return {...other, children: _children, id: (Math.random() * 10000000000).toFixed(0)}
})

export {menuConfigs}
