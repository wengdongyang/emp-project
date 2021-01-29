/*
 * @Author: wdy
 * @Date: 2021-01-13 10:55:26
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:10:35
 */

import IcomoonReact from 'icomoon-react'
import React, {FunctionComponent} from 'react'
// types
// config
import iconSet from './assets/json/selection.json'
// api
// util
// store
// component
type TypeIcon =
  // 登录
  | 'login-AERIAL_OS' // 架空
  | 'login-SUBSTATION_OS' // 变电
  | 'login-TRANSMISSION_OS' // 输电
  // root-菜单
  | 'menu-home' // 首页
  | 'menu-inspectionsMenu' // 智能巡检
  | 'menu-internetOfEverything' // 万物互联
  | 'menu-monitoring' // 智能监护
  | 'menu-review' // 联动复核
  | 'menu-dataAnalysis' // 数据分析
  | 'menu-history' // 历史记录
  | 'menu-systemSetting' // 系统设置
  // root-通知
  | 'notice-ALARM' // 告警通知
  | 'notice-TASK' // 任务通知
  | 'notice-BIT_CHANGE' // 变位通知
  | string

interface Props {
  color?: string
  size?: string | number
  icon: TypeIcon
  // iconSet: Object;
  className?: string
  style?: React.CSSProperties
  [x: string]: any
}
const AsIcon: FunctionComponent<Props> = props => {
  const {icon, ...other} = props
  return <IcomoonReact iconSet={iconSet} icon={icon} {...other} />
}

export default AsIcon
