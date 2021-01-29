declare module '*.css' {
  const classes: {[key: string]: string}
  export default classes
}

declare module '*.scss' {
  const classes: {[key: string]: string}
  export default classes
}

declare module '*.sass' {
  const classes: {[key: string]: string}
  export default classes
}

declare module '*.less' {
  const classes: {[key: string]: string}
  export default classes
}

declare module '*.styl' {
  const classes: {[key: string]: string}
  export default classes
}

declare module 'jshashes'

declare module 'icomoon-react'

declare interface Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any
}

declare module 'redux-persist/integration/react' {
  import {ReactNode, PureComponent} from 'react'
  import {Persistor} from 'redux-persist/es/types'
  interface PersistGateProps {
    persistor: Persistor
    onBeforeLift?(): void | Promise<void>
    children?: ReactNode | ((bootstrapped: boolean) => ReactNode)
    loading?: ReactNode
  }
  interface PersistorGateState {
    bootstrapped: boolean
  }
  class PersistGate extends React.PureComponent<PersistGateProps, PersistorGateState> {}
}
