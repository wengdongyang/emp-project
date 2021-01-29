declare module '@emp/react-base/App' {
  import 'antd/dist/antd.less';
  import { FunctionComponent } from 'react';
  const App: FunctionComponent;
  export default App;

}
declare module '@emp/react-base/bootstrap' {
  export {};

}
declare module '@emp/react-base/components/asIcon/AsIcon' {
  import React, { FunctionComponent } from 'react';
  type TypeIcon = 'login-AERIAL_OS' | 'login-SUBSTATION_OS' | 'login-TRANSMISSION_OS' | 'menu-home' | 'menu-inspectionsMenu' | 'menu-internetOfEverything' | 'menu-monitoring' | 'menu-review' | 'menu-dataAnalysis' | 'menu-history' | 'menu-systemSetting' | 'notice-ALARM' | 'notice-TASK' | 'notice-BIT_CHANGE' | string;
  interface Props {
      color?: string;
      size?: string | number;
      icon: TypeIcon;
      className?: string;
      style?: React.CSSProperties;
      [x: string]: any;
  }
  const AsIcon: FunctionComponent<Props>;
  export default AsIcon;

}
declare module '@emp/react-base/components' {
  export { default as AsIcon } from '@emp/react-base/components/asIcon/AsIcon';

}
declare module '@emp/react-base/configs' {
  export { pollTime } from '@emp/react-base/configs/pollTime';
  export { MENU, INTERNAL_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE } from '@emp/react-base/configs/menu';
  /**
   * 头部消息类型 && 告警类型
   */
  const ALARM = "ALARM";
  const TASK = "TASK";
  const BIT_CHANGE = "BIT_CHANGE";
  const MANUAL = "MANUAL";
  export { ALARM, TASK, BIT_CHANGE };
  export { MANUAL };

}
declare module '@emp/react-base/configs/menu' {
  const MENU = "MENU";
  const INTERNAL_PAGE = "INTERNAL_PAGE";
  const FRIEND_INNER_IFREAM = "FRIEND_INNER_IFREAM";
  const FRIEND_INNER_PAGE = "FRIEND_INNER_PAGE";
  const FRIEND_BLANK_PAGE = "FRIEND_BLANK_PAGE";
  export { MENU, INTERNAL_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE };

}
declare module '@emp/react-base/configs/pollTime' {
  const pollTime = 60000;
  export { pollTime };

}
declare module '@emp/react-base' {

}
declare module '@emp/react-base/layouts/login/configs' {
  import { TypeMenu } from '@emp/react-base/layouts/login';
  /**
   * 菜单定义
   */
  const menuConfigs: TypeMenu[];
  export { menuConfigs };

}
declare module '@emp/react-base/layouts/login' {
  import React from 'react';
  import type { TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo } from '@emp/react-base/types';
  /**
   * Props
   */
  interface Props extends TypeBaseProps {
      setBaseURL: (baseURL: string) => void;
      setBaseHostURL: (baseHostURL: string) => void;
      setBaseWebsocketURL: (baseWebsocketURL: string) => void;
      setMenus: (menus: TypeMenu[]) => void;
      setUserInfo: (userInfo: TypeUserInfo) => void;
      setToken: (token: string) => void;
      setIsToggleMenu: (isToggleMenu: boolean) => void;
      setViewWidth: (isToggleMenu: boolean) => void;
  }
  /**
   * 系统
   */
  interface TypeOs {
      disabled?: boolean;
      name?: string;
      code?: string;
  }
  /**
   * form 表单
   */
  interface TypeLoginForm {
      username: string;
      password: string;
      [key: string]: any;
  }
  export type { TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo, Props, TypeOs, TypeLoginForm };
  const _default: import("react-redux").ConnectedComponent<React.FunctionComponent<Props>, Pick<Props, "history">>;
  export default _default;

}
declare module '@emp/react-base/layouts/login/LoginComponent' {
  import { FunctionComponent } from 'react';
  import type { Props, TypeMenu } from '@emp/react-base/layouts/login';
  interface InnerProps extends Props {
      menuConfigs?: TypeMenu[];
  }
  const LoginComponent: FunctionComponent<InnerProps>;
  export default LoginComponent;

}
declare module '@emp/react-base/layouts/page404' {
  import { FunctionComponent } from 'react';
  const Page404: FunctionComponent;
  export default Page404;

}
declare module '@emp/react-base/layouts/page404/Page404Component' {
  import { FunctionComponent } from 'react';
  const Page404Component: FunctionComponent;
  export default Page404Component;

}
declare module '@emp/react-base/layouts/root/components/microApplication/MicroApplication' {
  import React from 'react';
  import type { TypeMenu, TypeUserInfo } from '@emp/react-base/types';
  import type { TypeBaseProps } from '@emp/react-base/layouts/root';
  interface Props extends TypeBaseProps {
      setBaseURL: (baseURL: string) => void;
      setBaseHostURL: (baseHostURL: string) => void;
      setBaseWebsocketURL: (baseWebsocketURL: string) => void;
      setMenus: (menus: TypeMenu[]) => void;
      setUserInfo: (userInfo: TypeUserInfo) => void;
      setToken: (token: string) => void;
      setIsToggleMenu: (isToggleMenu: boolean) => void;
      setViewWidth: (isToggleMenu: boolean) => void;
  }
  const _default: import("react-redux").ConnectedComponent<React.FunctionComponent<Props>, Pick<Props, "history">>;
  export default _default;

}
declare module '@emp/react-base/layouts/root/components/privateRoute/PrivateRoute' {
  import { FunctionComponent } from 'react';
  import type { RouteProps } from 'react-router-dom';
  type Props = RouteProps;
  const PrivateRoute: FunctionComponent<Props>;
  export default PrivateRoute;

}
declare module '@emp/react-base/layouts/root/components/userInfo/UserInfo' {
  import { FunctionComponent } from 'react';
  import type { Props } from '@emp/react-base/layouts/root';
  type InnerProps = Props;
  const UserInfo: FunctionComponent<InnerProps>;
  export default UserInfo;

}
declare module '@emp/react-base/layouts/root/components/viewRouter/ViewRouter' {
  import { FunctionComponent } from 'react';
  const ViewRouter: FunctionComponent;
  export default ViewRouter;

}
declare module '@emp/react-base/layouts/root/configs' {
  import type { TypeNoticeTypeConfig, TypeMicroApp } from '@emp/react-base/layouts/root';
  import { ALARM, TASK, BIT_CHANGE } from '@emp/react-base/configs';
  import { pollTime } from '@emp/react-base/configs';
  import { MENU, INTERNAL_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE } from '@emp/react-base/configs';
  const microAppConfigs: TypeMicroApp[];
  const noticeTypeConfigs: TypeNoticeTypeConfig[];
  export { pollTime };
  export { ALARM, TASK, BIT_CHANGE };
  export { MENU, INTERNAL_PAGE, FRIEND_INNER_IFREAM, FRIEND_INNER_PAGE, FRIEND_BLANK_PAGE };
  export { noticeTypeConfigs, microAppConfigs };

}
declare module '@emp/react-base/layouts/root' {
  import React from 'react';
  import type { TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo } from '@emp/react-base/types';
  interface Props extends TypeBaseProps {
      setBaseURL: (baseURL: string) => void;
      setBaseHostURL: (baseHostURL: string) => void;
      setBaseWebsocketURL: (baseWebsocketURL: string) => void;
      setMenus: (menus: TypeMenu[]) => void;
      setUserInfo: (userInfo: TypeUserInfo) => void;
      setToken: (token: string) => void;
      setIsToggleMenu: (isToggleMenu: boolean) => void;
      setViewWidth: (isToggleMenu: boolean) => void;
  }
  /**
   * 消息通知
   */
  interface TypeNoticeTypeConfig {
      label?: string;
      value?: string;
  }
  /**
   * app 定义
   */
  interface TypeMicroApp {
      name: string;
      entry: string;
      container: string;
      activeRule: string;
      props?: TypeBaseProps;
  }
  interface TypeNotice {
      createTime?: string;
      id?: string;
      sourceId?: string;
      sourceType?: string;
      state?: string;
      stationId?: string;
      stationName?: string;
      [key: string]: any;
  }
  interface TypeSensor {
      code?: string;
      component?: string;
      createTime?: string;
      createUserId?: string;
      disabled?: string;
      id?: string;
      installPointCode?: string;
      interval?: string;
      lineId?: string;
      lineName?: string;
      locationId?: string;
      locationName?: string;
      modelNo?: string;
      name?: string;
      parentId?: string;
      period?: number;
      removed?: string;
      serialNo?: string;
      snapshot?: string;
      stationId?: string;
      type?: string;
      updateTime?: string;
      updateUserId?: string;
  }
  interface TypeNoticeDetail {
      code?: string;
      createTime?: string;
      eventName?: string;
      inspectionCode?: string;
      sensor?: TypeSensor;
      sensorCategoryEnum?: string;
      sourceId?: string;
      stationId?: string;
      stationName?: string;
      targetName?: string;
  }
  export type { TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo, Props, TypeNoticeTypeConfig, TypeNotice, TypeNoticeDetail, TypeMicroApp };
  const _default: import("react-redux").ConnectedComponent<React.FunctionComponent<Props>, Pick<Props, "history">>;
  export default _default;

}
declare module '@emp/react-base/layouts/root/RootComponent' {
  import { ReactNode, FunctionComponent } from 'react';
  import type { Props } from '@emp/react-base/layouts/root';
  interface InnerProps extends Props {
      viewRouterComponent?: ReactNode;
  }
  const RootComponent: FunctionComponent<InnerProps>;
  export default RootComponent;

}
declare module '@emp/react-base/layouts/root/utils' {
  import type { TypeMenu } from '@emp/react-base/layouts/root';
  export const getActiveMenu: (menus: TypeMenu[], key: string) => TypeMenu;

}
declare module '@emp/react-base/pages/home/HomeComponent' {
  import { FunctionComponent } from 'react';
  import type { Props } from '@emp/react-base/pages/home';
  const HomeComponent: FunctionComponent<Props>;
  export default HomeComponent;

}
declare module '@emp/react-base/pages/home' {
  import React from 'react';
  import type { TypeBaseProps } from '@emp/react-base/types';
  type Props = TypeBaseProps;
  export type { TypeBaseProps, Props };
  const _default: import("react-redux").ConnectedComponent<React.FunctionComponent<TypeBaseProps>, Pick<TypeBaseProps, "history">>;
  export default _default;

}
declare module '@emp/react-base/stores/actions/actionBaseURL' {
  import type { TypeFunSetBaseHostURL, TypeFunSetBaseURL, TypeFunSetBaseWebsocketURL } from '@emp/react-base/stores/actions';
  const setBaseHostURL: TypeFunSetBaseHostURL;
  /**
   * baseURL
   * @param baseURL
   */
  const setBaseURL: TypeFunSetBaseURL;
  /**
   * websocketURL
   * @param baseWebsocketURL
   */
  const setBaseWebsocketURL: TypeFunSetBaseWebsocketURL;
  export { setBaseHostURL, setBaseURL, setBaseWebsocketURL };

}
declare module '@emp/react-base/stores/actions/actionMenu' {
  import type { TypeFunSetMenus } from '@emp/react-base/stores/actions';
  /**
   * 雾端地址
   * @param baseFogURL
   */
  const setMenus: TypeFunSetMenus;
  export { setMenus };

}
declare module '@emp/react-base/stores/actions/actionToggleMenu' {
  import type { TypeFunSetIsToggleMenu, TypeFunViewWidth } from '@emp/react-base/stores/actions';
  /**
   * 菜单是否展开
   * @param isToggleMenu
   */
  const setIsToggleMenu: TypeFunSetIsToggleMenu;
  /**
   * 视口宽度
   * @param isToggleMenu
   */
  const setViewWidth: TypeFunViewWidth;
  export { setIsToggleMenu, setViewWidth };

}
declare module '@emp/react-base/stores/actions/actionUserInfo' {
  import type { TypeFunSetUserInfo, TypeFunSetToken } from '@emp/react-base/stores/actions';
  /**
   * 用户信息
   * @param userInfo
   */
  const setUserInfo: TypeFunSetUserInfo;
  /**
   * token
   * @param token
   */
  const setToken: TypeFunSetToken;
  export { setUserInfo, setToken };

}
declare module '@emp/react-base/stores/actions' {
  import type { TypeMenu, TypeUserInfo } from '@emp/react-base/types';
  interface TypeActionBaseHostURL {
      type: string;
      data: string;
  }
  type TypeActionBaseURL = TypeActionBaseHostURL;
  type TypeActionBaseWebsocketURL = TypeActionBaseHostURL;
  interface TypeActionMenus {
      type: string;
      data: TypeMenu[];
  }
  interface TypeActionIsToggleMenu {
      type: string;
      data: boolean;
  }
  interface TypeActionViewWidth {
      type: string;
      data: number;
  }
  interface TypeActionUserInfo {
      type: string;
      data: TypeUserInfo;
  }
  interface TypeActionToken {
      type: string;
      data: string;
  }
  export type { TypeActionBaseHostURL, TypeActionBaseURL, TypeActionBaseWebsocketURL, TypeActionMenus, TypeActionIsToggleMenu, TypeActionViewWidth, TypeActionUserInfo, TypeActionToken };
  type TypeFunSetBaseHostURL = (baseHostURL: string) => TypeActionBaseHostURL;
  type TypeFunSetBaseURL = (baseURL: string) => TypeActionBaseURL;
  type TypeFunSetBaseWebsocketURL = (baseWebsocketURL: string) => TypeActionBaseWebsocketURL;
  type TypeFunSetMenus = (menus: TypeMenu[]) => TypeActionMenus;
  type TypeFunSetIsToggleMenu = (isToggleMenu: boolean) => TypeActionIsToggleMenu;
  type TypeFunViewWidth = (viewWidth: number) => TypeActionViewWidth;
  type TypeFunSetUserInfo = (userInfo: TypeUserInfo) => TypeActionUserInfo;
  type TypeFunSetToken = (token: string) => TypeActionToken;
  export type { TypeFunSetBaseHostURL, TypeFunSetBaseURL, TypeFunSetBaseWebsocketURL, TypeFunSetMenus, TypeFunSetIsToggleMenu, TypeFunViewWidth, TypeFunSetUserInfo, TypeFunSetToken };
  import { setMenus } from '@emp/react-base/stores/actions/actionMenu';
  import { setUserInfo, setToken } from '@emp/react-base/stores/actions/actionUserInfo';
  import { setIsToggleMenu, setViewWidth } from '@emp/react-base/stores/actions/actionToggleMenu';
  import { setBaseHostURL, setBaseURL, setBaseWebsocketURL } from '@emp/react-base/stores/actions/actionBaseURL';
  export { setMenus, setBaseHostURL, setBaseURL, setBaseWebsocketURL, setUserInfo, setToken, setIsToggleMenu, setViewWidth };

}
declare module '@emp/react-base/stores' {
  import { Persistor } from 'redux-persist';
  import { Store } from 'redux';
  export const store: Store;
  export const persistor: Persistor;

}
declare module '@emp/react-base/stores/mutationTypes' {
  const SET_BASE_HOST_URL = "SET_BASE_HOST_URL";
  const SET_BASE_URL = "SET_BASE_URL";
  const SET_BASE_WEBSOCKET_URL = "SET_BASE_WEBSOCKET_URL";
  const SET_ACTIVE_WORK_AREA = "SET_ACTIVE_WORK_AREA";
  const SET_ACTIVE_CLASS = "SET_ACTIVE_CLASS";
  const SET_ACTIVE_STATION = "SET_ACTIVE_STATION";
  const SET_MENUS = "SET_MENUS";
  const SET_USER_INFO = "SET_USER_INFO";
  const SET_TOKEN = "SET_TOKEN";
  const SET_IS_TOGGLE_MENU = "SET_IS_TOGGLE_MENU";
  const SET_VIEW_WIDTH = "SET_VIEW_WIDTH";
  const SET_VIEW_HEIGHT = "SET_VIEW_HEIGHT";
  export { SET_BASE_HOST_URL, SET_BASE_URL, SET_BASE_WEBSOCKET_URL, SET_MENUS, SET_ACTIVE_WORK_AREA, SET_ACTIVE_CLASS, SET_ACTIVE_STATION, SET_USER_INFO, SET_TOKEN, SET_IS_TOGGLE_MENU, SET_VIEW_WIDTH, SET_VIEW_HEIGHT };

}
declare module '@emp/react-base/stores/reducers' {
  import { CombinedState } from 'redux';
  import type { TypeMenu, TypeUserInfo } from '@emp/react-base/types';
  interface TypeReducerActionBaseHostURL {
      type: string;
      data: string;
  }
  type TypeReducerActionBaseURL = TypeReducerActionBaseHostURL;
  type TypeReducerActionWebsocketURL = TypeReducerActionBaseHostURL;
  interface TypeReducerActionMenus {
      type: string;
      data: TypeMenu[];
  }
  interface TypeReducerActionIsToggleMenu {
      type: string;
      data: boolean;
  }
  interface TypeReducerActionViewWidth {
      type: string;
      data: number;
  }
  interface TypeReducerActionViewHeight {
      type: string;
      data: number;
  }
  interface TypeReducerActionUserInfo {
      type: string;
      data: TypeUserInfo;
  }
  interface TypeReducerActionToken {
      type: string;
      data: string;
  }
  export type { TypeReducerActionBaseHostURL, TypeReducerActionBaseURL, TypeReducerActionWebsocketURL, TypeReducerActionMenus, TypeReducerActionIsToggleMenu, TypeReducerActionViewWidth, TypeReducerActionViewHeight, TypeReducerActionUserInfo, TypeReducerActionToken };
  type TypeReducerBaseHostURL = (state: string, action: TypeReducerActionBaseHostURL) => string;
  type TypeReducerBaseURL = (state: string, action: TypeReducerActionBaseURL) => string;
  type TypeReducerWebsocketURL = (state: string, action: TypeReducerActionWebsocketURL) => string;
  type TypeReducerMenus = (state: TypeMenu[], action: TypeReducerActionMenus) => TypeMenu[];
  type TypeReducerIsToggleMenu = (state: boolean, action: TypeReducerActionIsToggleMenu) => boolean;
  type TypeReducerViewWidth = (state: number, action: TypeReducerActionViewWidth) => number;
  type TypeReducerViewHeight = (state: number, action: TypeReducerActionViewHeight) => number;
  type TypeReducerUserInfo = (state: TypeUserInfo, action: TypeReducerActionUserInfo) => TypeUserInfo;
  type TypeReducerToken = (state: string, action: TypeReducerActionToken) => string;
  export type { TypeReducerBaseHostURL, TypeReducerBaseURL, TypeReducerWebsocketURL, TypeReducerMenus, TypeReducerIsToggleMenu, TypeReducerViewWidth, TypeReducerViewHeight, TypeReducerUserInfo, TypeReducerToken };
  const _combineReducers: CombinedState<any>;
  export default _combineReducers;

}
declare module '@emp/react-base/stores/reducers/reducerBaseURL' {
  import type { TypeReducerBaseHostURL, TypeReducerBaseURL, TypeReducerWebsocketURL } from '@emp/react-base/stores/reducers';
  const baseHostURL: TypeReducerBaseHostURL;
  const baseURL: TypeReducerBaseURL;
  const baseWebsocketURL: TypeReducerWebsocketURL;
  export { baseHostURL, baseURL, baseWebsocketURL };

}
declare module '@emp/react-base/stores/reducers/reducerMenu' {
  import type { TypeReducerMenus } from '@emp/react-base/stores/reducers';
  const menus: TypeReducerMenus;
  export { menus };

}
declare module '@emp/react-base/stores/reducers/reducerToggleMenu' {
  import type { TypeReducerIsToggleMenu, TypeReducerViewWidth, TypeReducerViewHeight } from '@emp/react-base/stores/reducers';
  /**
   * isToggleMenu
   * @param {*} state
   * @param {*} action
   */
  const isToggleMenu: TypeReducerIsToggleMenu;
  /**
   * viewWidth
   * @param state
   * @param action
   */
  const viewWidth: TypeReducerViewWidth;
  /**
   * viewHeight
   * @param state
   * @param action
   */
  const viewHeight: TypeReducerViewHeight;
  export { isToggleMenu, viewWidth, viewHeight };

}
declare module '@emp/react-base/stores/reducers/reducerUserInfo' {
  import type { TypeReducerUserInfo, TypeReducerToken } from '@emp/react-base/stores/reducers';
  /**
   * 设置userInfo
   * @param state
   * @param action
   */
  const userInfo: TypeReducerUserInfo;
  /**
   * token
   * @param {*} state
   * @param {*} action
   */
  const token: TypeReducerToken;
  export { userInfo, token };

}
declare module '@emp/react-base/types/baseProps' {
  import type { RouterProps } from 'react-router';
  import type { TypeMenu } from '@emp/react-base/types/menu';
  import type { TypeUserInfo } from '@emp/react-base/types/userInfo';
  interface TypeBaseProps extends RouterProps {
      baseHostURL: string;
      baseURL: string;
      baseWebsocketURL: string;
      menus: TypeMenu[];
      userInfo: TypeUserInfo;
      token: string;
      isToggleMenu: boolean;
      viewWidth: number;
      viewHeight: number;
  }
  export { TypeBaseProps };

}
declare module '@emp/react-base/types' {
  import type { TypeMenu } from '@emp/react-base/types/menu';
  import type { TypeStore } from '@emp/react-base/types/store';
  import type { TypeUserInfo } from '@emp/react-base/types/userInfo';
  import type { TypeBaseProps } from '@emp/react-base/types/baseProps';
  export type { TypeStore, TypeBaseProps, TypeMenu, TypeUserInfo };

}
declare module '@emp/react-base/types/menu' {
  interface TypeMenu {
      type?: string;
      owner?: string;
      name?: string;
      path?: string;
      id?: string;
      children?: TypeMenu[];
  }
  export type { TypeMenu };

}
declare module '@emp/react-base/types/store' {
  import type { TypeMenu } from '@emp/react-base/types/menu';
  import type { TypeUserInfo } from '@emp/react-base/types/userInfo';
  interface TypeStore {
      baseHostURL: string;
      baseURL: string;
      baseWebsocketURL: string;
      menus: TypeMenu[];
      userInfo: TypeUserInfo;
      token: string;
      isToggleMenu: boolean;
      viewWidth: number;
      viewHeight: number;
  }
  export type { TypeStore };

}
declare module '@emp/react-base/types/userInfo' {
  interface TypeUserInfo {
      id?: string;
      name?: string;
      osId?: string;
      [key: string]: any;
  }
  export type { TypeUserInfo };

}
declare module '@emp/react-base/utils' {
  import { AxiosRequestConfig } from 'axios';
  interface TypeOption {
      [key: string]: any;
  }
  interface TypeTreeData {
      children?: TypeTreeData[];
      [key: string]: any;
  }
  interface TypeData {
      code?: string;
      data?: any;
      msg?: string;
  }
  type TypeFunGetSelectOptionByValue = (options: TypeOption[], value: any, config?: {
      valueKey: string;
  }) => TypeOption;
  type TypeFunGetSelectLabelByValue = (options: TypeOption[], value: any, config?: {
      labelKey: string;
      valueKey: string;
  }) => any;
  type TypeFunGetTreeDataByKey = (treeDatas: TypeTreeData[], value: any, config?: {
      keyKey: string;
      childrenKey: string;
  }) => TypeTreeData;
  type TypeFunGetTreeDataTitleByKey = (treeDatas: TypeTreeData[], value: any, config?: {
      titleKey: string;
      keyKey: string;
      childrenKey: string;
  }) => any;
  type TypeFunFormatNumber = (arg0: number) => string;
  type TypeFunRequest = (opts: AxiosRequestConfig) => Promise<any>;
  export type { TypeOption, TypeTreeData, TypeData, TypeFunGetSelectOptionByValue, TypeFunGetSelectLabelByValue, TypeFunGetTreeDataByKey, TypeFunGetTreeDataTitleByKey, TypeFunFormatNumber, TypeFunRequest };
  export { getSelectOptionByValue, getSelectLabelByValue, getTreeDataByKey, getTreeDataTitleByKey } from '@emp/react-base/utils/utilGlobal';
  export { formatNumber } from '@emp/react-base/utils/utilNumber';
  export { default as request } from '@emp/react-base/utils/utilRequest';
  export { axios } from '@emp/react-base/utils/utilRequest';

}
declare module '@emp/react-base/utils/utilGlobal' {
  import type { TypeFunGetSelectOptionByValue, TypeFunGetSelectLabelByValue, TypeFunGetTreeDataByKey, TypeFunGetTreeDataTitleByKey } from '@emp/react-base/utils';
  /**
   * 类似于select的组件，传入配置文件，value，获取对应的option
   * @param {*} options
   * @param {*} value
   * @param {*} config
   */
  const getSelectOptionByValue: TypeFunGetSelectOptionByValue;
  /**
   * 类似于select的组件，传入配置文件，value，获取对应的label
   * @param options
   * @param value
   * @param config
   * @returns
   */
  const getSelectLabelByValue: TypeFunGetSelectLabelByValue;
  /**
   * 获取指定的树形数据
   * @param treeDatas
   * @param value
   * @param config
   * @returns
   */
  const getTreeDataByKey: TypeFunGetTreeDataByKey;
  /**
   * 获取树形数据的title
   * @param treeDatas
   * @param value
   * @param config
   * @returns
   */
  const getTreeDataTitleByKey: TypeFunGetTreeDataTitleByKey;
  export { getSelectOptionByValue, getSelectLabelByValue, getTreeDataByKey, getTreeDataTitleByKey };

}
declare module '@emp/react-base/utils/utilNumber' {
  import type { TypeFunFormatNumber } from '@emp/react-base/utils';
  /**
   * 将数字格式化
   * @param {*} num
   */
  export const formatNumber: TypeFunFormatNumber;

}
declare module '@emp/react-base/utils/utilRequest' {
  import axios from 'axios';
  import type { TypeFunRequest } from '@emp/react-base/utils';
  /**
   * ajax通用接口
   * @param {*} opts
   */
  const request: TypeFunRequest;
  export { axios };
  export default request;

}
declare module '@emp/react-base' {
  import main = require('@emp/react-base/index.ts');
  export = main;
}