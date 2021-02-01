/*
 * @Author: wdy
 * @Date: 2020-05-22 16:41:45
 * @Last Modified by: wdy
 * @Last Modified time: 2021-02-01 17:28:52
 */
import {VueInReact} from 'vuera'
import React, {Fragment, FunctionComponent} from 'react'
import {Switch, Route, Redirect} from 'react-router-dom'

import Home from '@emp/react-base/pages/home'
import Project from '@emp/react-project/pages/project'

import VuePage from '@emp/vue2-project/pages/vuePage/VuePage.vue'

const VueComponent = VueInReact(VuePage)
// const VueComponent = VueInReact(Vue2Project)
const ViewRouter: FunctionComponent = () => {
  return (
    <Switch>
      <Route path={'/root'} exact render={() => <Redirect to={'/root/innerPage/self/home'} />} />
      <Route path={'/root/innerPage/self/home'} exact component={Home} />
      <Route path={'/root/innerPage/project/project'} exact component={Project} />
      <Route path={'/root/innerPage/project/vue2project'} exact>
        <Fragment>
          <VueComponent />
        </Fragment>
      </Route>
    </Switch>
  )
}

export default ViewRouter
