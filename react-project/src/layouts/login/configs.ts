/*
 * @Author: wdy
 * @Date: 2021-01-07 15:15:22
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:11:30
 */
import {TypeMenu, TypeOs} from './index'

import {MENU, INTERNAL_PAGE} from '@emp/react-base/configs'

const defaultOses: TypeOs[] = [
  {name: '架空', code: 'AERIAL_OS', disabled: true},
  {name: '变电', code: 'SUBSTATION_OS'},
  {name: '输电', code: 'TRANSMISSION_OS', disabled: true},
]

const baseMenuConfigs: TypeMenu[] = [
  {type: INTERNAL_PAGE, name: '首页', owner: 'self', path: 'home'},
  {
    type: MENU,
    name: '项目模块',
    path: 'inspectionsMenu',
    children: [{type: INTERNAL_PAGE, name: '项目模块', owner: 'project', path: 'project'}],
  },
]

/**
 * 菜单定义
 */
const menuConfigs: TypeMenu[] = baseMenuConfigs.map(menu => {
  const {children = [], ...other} = menu
  const _children = children.map(child => ({...child, id: (Math.random() * 10000000000).toFixed(0)}))
  return {...other, children: _children, id: (Math.random() * 10000000000).toFixed(0)}
})

export {defaultOses, menuConfigs}
