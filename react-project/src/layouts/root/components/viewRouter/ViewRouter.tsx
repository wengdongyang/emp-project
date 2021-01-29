/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 15:43:30
 */
import React, {FunctionComponent} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

// import Page404 from '@emp/react-base/layouts/page404'
import Home from '@emp/react-base/pages/home'

import Project from '../../../../pages/project'
// import PrivateRoute from '../../components/privateRoute/PrivateRoute';
// import MicroApplication from '../microApplication/MicroApplication'

const ViewRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route path={'/root'} exact render={() => <Redirect to={'/root/innerPage/self/home'} />} />
      <Route path={'/root/innerPage/self/home'} exact component={Home} />
      <Route path={'/root/innerPage/project/project'} exact component={Project} />
    </Switch>
  )
}

export default ViewRouter
