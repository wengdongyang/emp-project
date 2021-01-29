/*
 * @Author: wdy
 * @Date: 2020-05-08 11:27:50
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:12:36
 */
import {connect} from 'react-redux'
import React, {FunctionComponent} from 'react'
// types
import type {Dispatch} from 'redux'
import type {TypeStore} from '../../types'
// types
// config
// api
// util
// store
// component
import HomeComponent from './HomeComponent'
import type {TypeBaseProps} from '../../types'

type Props = TypeBaseProps

const Home: FunctionComponent<Props> = props => <HomeComponent {...props} />
const mapStateToProps = (state: TypeStore) => ({
  ...state,
})
const mapDispatchToProps = (dispatch: Dispatch) => ({})

export type {TypeBaseProps, Props}
export default connect(mapStateToProps, mapDispatchToProps)(Home)
