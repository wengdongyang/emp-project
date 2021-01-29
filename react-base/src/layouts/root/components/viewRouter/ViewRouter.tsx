/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:21:50
 */
import React, {FunctionComponent} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Page404 from '../../../page404'
import Home from '../../../../pages/home'
// import PrivateRoute from '../../components/privateRoute/PrivateRoute';
// import MicroApplication from '../microApplication/MicroApplication'

const ViewRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route path={'/root'} exact render={() => <Redirect to={'/root/innerPage/self/home'} />} />
      <Route path={'/root/innerPage/self/home'} exact component={Home} />
      <Route path={'/root/page404'} exact component={Page404} />
    </Switch>
  )
}

export default ViewRouter
