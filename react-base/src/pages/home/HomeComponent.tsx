/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 15:59:54
 */
import styles from './HomeComponent.module.less'
import React, {FunctionComponent} from 'react'
// types
import type {Props} from './index'
// config
// api
// util
// store
// component
const HomeComponent: FunctionComponent<Props> = props => {
  return <section className={styles['container']}>基础首页</section>
}

export default HomeComponent
