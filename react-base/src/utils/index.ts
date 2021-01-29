/*
 * @Author: wdy
 * @Date: 2021-01-27 14:33:59
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:05:58
 */
import {AxiosRequestConfig} from 'axios'
// types
// config
// api
// util
// store
// component
interface TypeOption {
  [key: string]: any
}
interface TypeTreeData {
  children?: TypeTreeData[]
  [key: string]: any
}
interface TypeData {
  code?: string
  data?: any
  msg?: string
}

type TypeFunGetSelectOptionByValue = (options: TypeOption[], value: any, config?: {valueKey: string}) => TypeOption

type TypeFunGetSelectLabelByValue = (options: TypeOption[], value: any, config?: {labelKey: string; valueKey: string}) => any

type TypeFunGetTreeDataByKey = (treeDatas: TypeTreeData[], value: any, config?: {keyKey: string; childrenKey: string}) => TypeTreeData

type TypeFunGetTreeDataTitleByKey = (treeDatas: TypeTreeData[], value: any, config?: {titleKey: string; keyKey: string; childrenKey: string}) => any

type TypeFunFormatNumber = (arg0: number) => string

type TypeFunRequest = (opts: AxiosRequestConfig) => Promise<any>

export type {TypeOption, TypeTreeData, TypeData, TypeFunGetSelectOptionByValue, TypeFunGetSelectLabelByValue, TypeFunGetTreeDataByKey, TypeFunGetTreeDataTitleByKey, TypeFunFormatNumber, TypeFunRequest}

export {getSelectOptionByValue, getSelectLabelByValue, getTreeDataByKey, getTreeDataTitleByKey} from './utilGlobal'
export {formatNumber} from './utilNumber'
export {default as request} from './utilRequest'
export {axios} from './utilRequest'
