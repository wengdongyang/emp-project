/*
 * @Author: wdy
 * @Date: 2021-01-07 15:15:22
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:12:03
 */
import type {TypeNoticeTypeConfig, TypeMicroApp} from './index'

import {ALARM, TASK, BIT_CHANGE} from '../../configs'
import {pollTime} from '../../configs'
import {MENU, INTERNAL_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE} from '../../configs'

const microAppConfigs: TypeMicroApp[] = [
  {
    name: 'asInspection',
    entry: 'http://localhost:4000/',
    container: '#microApplication',
    activeRule: '/root/asInspection',
  },
  {name: 'asSetting', entry: 'http://localhost:5000/', container: '#microApplication', activeRule: '/root/asSetting'},
  // { name: 'haoyuan', entry: 'http://localhost:6000/', container: '#microApplication', activeRule: '/root/haoyuan' }
]

const noticeTypeConfigs: TypeNoticeTypeConfig[] = [
  {label: '告警通知', value: ALARM},
  {label: '任务通知', value: TASK},
  {label: '变位通知', value: BIT_CHANGE},
]

export {pollTime}
export {ALARM, TASK, BIT_CHANGE}
export {MENU, INTERNAL_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE}
export {noticeTypeConfigs, microAppConfigs}
