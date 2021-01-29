/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:30:35
 */
import styles from './ProjectComponent.module.less'
import React, {FunctionComponent} from 'react'
// types
import type {Props} from './Project'
// config
// api
// util
// store
// component
const ProjectComponent: FunctionComponent<Props> = props => {
  return <section className={styles['container']}>项目模块</section>
}

export default ProjectComponent
