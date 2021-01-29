/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:21:42
 * @des 预设路由拦截
 */

import React, {FunctionComponent} from 'react'
import {Route} from 'react-router-dom'
import type {RouteProps} from 'react-router-dom'

type Props = RouteProps
const PrivateRoute: FunctionComponent<Props> = ({children, component, ...other}) => {
  return <Route {...other} render={({history, location, match}) => children} />
}

export default PrivateRoute
