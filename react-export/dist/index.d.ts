declare module '@emp/react-export/App' {
  import 'antd/dist/antd.less';
  const App: () => JSX.Element;
  export default App;

}
declare module '@emp/react-export/bootstrap' {
  export {};

}
declare module '@emp/react-export/components/Hello' {
  export interface HelloProps {
      compiler: string;
      framework: string;
  }
  const Hello: (props: HelloProps) => JSX.Element;
  export default Hello;

}
declare module '@emp/react-export/helper' {
  export const log: (d: any) => void;

}
declare module '@emp/react-export' {

}
declare module '@emp/react-export/layouts/login/configs' {
  import { TypeMenu, TypeOs } from '@emp/react-export/layouts/login';
  const defaultOses: TypeOs[];
  /**
   * 菜单定义
   */
  const menuConfigs: TypeMenu[];
  export { defaultOses, menuConfigs };

}
declare module '@emp/react-export/layouts/login' {
  import React from 'react';
  import type { TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo } from '@emp/react-export/types';
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
declare module '@emp/react-export/layouts/root/components/viewRouter/ViewRouter' {
  import { FunctionComponent } from 'react';
  const ViewRouter: FunctionComponent;
  export default ViewRouter;

}
declare module '@emp/react-export/layouts/root' {
  import React from 'react';
  import type { TypeBaseProps, TypeStore, TypeMenu, TypeUserInfo } from '@emp/react-export/types';
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
declare module '@emp/react-export/types/baseProps' {
  import type { RouterProps } from 'react-router';
  import type { TypeMenu } from '@emp/react-export/types/menu';
  import type { TypeUserInfo } from '@emp/react-export/types/userInfo';
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
declare module '@emp/react-export/types' {
  import type { TypeMenu } from '@emp/react-export/types/menu';
  import type { TypeStore } from '@emp/react-export/types/store';
  import type { TypeUserInfo } from '@emp/react-export/types/userInfo';
  import type { TypeBaseProps } from '@emp/react-export/types/baseProps';
  export type { TypeStore, TypeBaseProps, TypeMenu, TypeUserInfo };

}
declare module '@emp/react-export/types/menu' {
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
declare module '@emp/react-export/types/store' {
  import type { TypeMenu } from '@emp/react-export/types/menu';
  import type { TypeUserInfo } from '@emp/react-export/types/userInfo';
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
declare module '@emp/react-export/types/userInfo' {
  interface TypeUserInfo {
      id?: string;
      name?: string;
      osId?: string;
      [key: string]: any;
  }
  export type { TypeUserInfo };

}
declare module '@emp/react-export' {
  import main = require('@emp/react-export/index.ts');
  export = main;
}