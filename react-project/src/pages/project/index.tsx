/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:30:26
 */
import {connect} from 'react-redux'
import React, {FunctionComponent} from 'react'
// types
import type {Dispatch} from 'redux'
import type {TypeStore} from '../../types'
import type {Props} from './Project'
// types
// config
// api
// util
// store
// component
import ProjectComponent from './ProjectComponent'
const Project: FunctionComponent<Props> = props => <ProjectComponent {...props} />
const mapStateToProps = (state: TypeStore) => ({
  ...state,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({})
export default connect(mapStateToProps, mapDispatchToProps)(Project)
