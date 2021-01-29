/*
 * @Author: wdy
 * @Date: 2021-01-07 14:13:31
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 10:49:06
 */
import 'antd/dist/antd.less'

import React from 'react'
import {Provider} from 'react-redux'
import zhCN from 'antd/lib/locale/zh_CN'
import ConfigProvider from 'antd/lib/config-provider'
import {PersistGate} from 'redux-persist/integration/react'
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom'

import {store, persistor} from '@emp/react-base/stores'
import Login from './layouts/login'

import Root from './layouts/root'

const App = () => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <ConfigProvider locale={zhCN}>
        <BrowserRouter>
          <Switch>
            <Route path={`/`} exact render={() => <Redirect to={'/login'} />} />
            <Route path={'/login'} exact component={Login} />
            <Route path={'/root'} component={Root} />
          </Switch>
        </BrowserRouter>
      </ConfigProvider>
    </PersistGate>
  </Provider>
)

export default App
