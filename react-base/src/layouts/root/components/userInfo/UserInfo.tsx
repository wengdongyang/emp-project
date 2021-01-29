/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:21:45
 */
import styles from './UserInfo.module.less'
import {Menu, Dropdown} from 'antd'
import React, {Fragment, FunctionComponent} from 'react'
// type
import type {Props} from '../../index'
// config
// api
// util
// store
// component

type InnerProps = Props
const UserInfo: FunctionComponent<InnerProps> = props => {
  const {userInfo} = props
  return (
    <Fragment>
      <Dropdown
        trigger={['click']}
        overlay={
          <Menu>
            <Menu.Item>菜单</Menu.Item>
          </Menu>
        }>
        <div className={styles['user-info']}>{userInfo.name}</div>
      </Dropdown>
    </Fragment>
  )
}

export default UserInfo
