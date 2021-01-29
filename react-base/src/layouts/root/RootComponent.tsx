/*
 * @Author: wdy
 * @Date: 2019-03-27 17:32:33
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-29 17:35:50
 * @des 主布局，多屏模式
 */
import styles from './RootComponent.module.less'
import qs from 'qs'
import {isEmpty} from 'lodash'
import Menu from 'antd/lib/menu'
import Layout from 'antd/lib/layout'
import message from 'antd/lib/message'
import Icon, {MenuUnfoldOutlined, MenuFoldOutlined} from '@ant-design/icons'
import React, {Fragment, ReactNode, FunctionComponent, useEffect, useState} from 'react'
// type
import type {TypeMenu, Props} from './index'
// config
import {MENU, INTERNAL_PAGE, FRIEND_INNER_PAGE, FRIEND_INNER_IFREAM, FRIEND_BLANK_PAGE} from './configs'
// api
// util
import {getTreeDataByKey} from '../../utils'
import {getActiveMenu} from './utils'
// store
// component
import AsIcon from '../../components/asIcon/AsIcon'

import UserInfo from './components/userInfo/UserInfo'
import ViewRouter from './components/viewRouter/ViewRouter'

const {Header, Content, Sider} = Layout
const {SubMenu} = Menu

interface InnerProps extends Props {
  viewRouterComponent?: ReactNode
}

const RootComponent: FunctionComponent<InnerProps> = props => {
  const {menus, isToggleMenu} = props
  const {pathname} = props.history.location
  const [activeMenu, setActiveMenu] = useState<TypeMenu>({})

  const onClickMenu = (key: string) => {
    const activeMenu = getActiveMenu(menus, key)
    if (!isEmpty(activeMenu)) {
      switch (activeMenu.type) {
        case INTERNAL_PAGE:
        case FRIEND_INNER_PAGE:
          props.history.push({
            pathname: `/root/innerPage/${activeMenu.owner}/${activeMenu.path}`,
          })
          setActiveMenu(activeMenu)
          break
        case FRIEND_INNER_IFREAM:
          props.history.push({
            pathname: `/root/iframe/${activeMenu.owner}`,
            search: qs.stringify({path: activeMenu.path}),
          })
          setActiveMenu(activeMenu)
          break
        case FRIEND_BLANK_PAGE:
          window.open(activeMenu.path, '_blank')
          break
        case MENU:
        default:
          setActiveMenu(activeMenu)
          break
      }
    } else {
      message.error('菜单问题！')
    }
  }
  /**
   * 点击伸缩
   */
  const onClickTrigger = () => {
    props.setIsToggleMenu(!isToggleMenu)
  }
  useEffect(() => {
    // eslint-disable-next-line
    const [root, owner, path] = pathname.split('/').filter((el) => el);
    const activeMenu = getTreeDataByKey(menus, path, {keyKey: 'path', childrenKey: 'children'})
    setActiveMenu(activeMenu)
  }, [])
  const renderSider = () => (
    <Sider className={styles['sider']} collapsible collapsed={isToggleMenu} trigger={null} onCollapse={collapsed => props.setIsToggleMenu(collapsed)}>
      <header className={styles['logo']}>LOGO</header>
      <section className={styles['menus']}>
        <Menu mode={'inline'} selectedKeys={activeMenu?.id ? [activeMenu.id] : []} onClick={({key}) => onClickMenu(key.toString())}>
          {menus.map(menu => (
            <Fragment key={menu.id}>
              {menu.type !== MENU ? (
                <Menu.Item
                  key={menu.id}
                  icon={
                    <Icon className={styles['menu-icon']}>
                      <AsIcon icon={`menu-${menu.path}`} />
                    </Icon>
                  }>
                  {menu.name}
                </Menu.Item>
              ) : (
                <SubMenu
                  key={menu.id}
                  title={menu.name}
                  icon={
                    <Icon className={styles['menu-icon']}>
                      <AsIcon icon={`menu-${menu.path}`} />
                    </Icon>
                  }>
                  {menu?.children?.map(sub => (
                    <Menu.Item key={sub.id}>{sub.name}</Menu.Item>
                  ))}
                </SubMenu>
              )}
            </Fragment>
          ))}
        </Menu>
      </section>
    </Sider>
  )
  /**
   * header
   * @returns
   */
  const renderHeader = () => (
    <Header className={styles['sub-header']}>
      <Fragment>{isToggleMenu ? <MenuUnfoldOutlined className={styles['trigger-icon']} onClick={onClickTrigger} /> : <MenuFoldOutlined className={styles['trigger-icon']} onClick={onClickTrigger} />}</Fragment>
      <h1 className={styles['title']}>智能巡检系统</h1>
      <UserInfo {...props} />
    </Header>
  )

  return (
    <Fragment>
      <Layout className={styles['layout']}>
        {renderSider()}
        <Layout className={styles['sub-layout']}>
          {renderHeader()}
          <Content className={styles['sub-content']}>{props.viewRouterComponent || <ViewRouter />}</Content>
        </Layout>
      </Layout>
    </Fragment>
  )
}

export default RootComponent
