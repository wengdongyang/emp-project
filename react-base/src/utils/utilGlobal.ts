/*
 * @Author: wdy
 * @Date: 2019-10-18 15:54:04
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:06:01
 */
import {isEmpty} from 'lodash'
// types
import type {TypeOption, TypeTreeData, TypeFunGetSelectOptionByValue, TypeFunGetSelectLabelByValue, TypeFunGetTreeDataByKey, TypeFunGetTreeDataTitleByKey} from './index'
// config
// api
// util
// store
// component

/**
 * 类似于select的组件，传入配置文件，value，获取对应的option
 * @param {*} options
 * @param {*} value
 * @param {*} config
 */
const getSelectOptionByValue: TypeFunGetSelectOptionByValue = (options: TypeOption[], value: any, config?: {valueKey: string}): TypeOption => {
  const {valueKey} = config || {valueKey: 'value'}
  return options.find(el => el[valueKey] === value) || {}
}
/**
 * 类似于select的组件，传入配置文件，value，获取对应的label
 * @param options
 * @param value
 * @param config
 * @returns
 */
const getSelectLabelByValue: TypeFunGetSelectLabelByValue = (options: TypeOption[], value: any, config?: {labelKey: string; valueKey: string}): any => {
  const {labelKey} = config || {labelKey: 'label', valueKey: 'value'}
  const selectOption = getSelectOptionByValue(options, value, config)
  return selectOption[labelKey] || ''
}
/**
 * 获取指定的树形数据
 * @param treeDatas
 * @param value
 * @param config
 * @returns
 */
const getTreeDataByKey: TypeFunGetTreeDataByKey = (treeDatas: TypeTreeData[], value: any, config?: {keyKey: string; childrenKey: string}): TypeTreeData => {
  const {keyKey, childrenKey} = config || {keyKey: 'key', childrenKey: 'children'}
  let selectNode: {[key: string]: any} = {}
  for (let index = 0; index < treeDatas.length; index++) {
    const activeTreeData = treeDatas[index]
    if (activeTreeData[keyKey] === value) {
      selectNode = activeTreeData
    }
    if (selectNode && !isEmpty(selectNode)) {
      break
    } else {
      const childrenTreeDatas = activeTreeData[childrenKey]
      if (childrenTreeDatas?.length) {
        selectNode = getTreeDataByKey(childrenTreeDatas, value, config)
      }
    }
    if (selectNode && !isEmpty(selectNode)) {
      break
    }
  }
  return selectNode
}
/**
 * 获取树形数据的title
 * @param treeDatas
 * @param value
 * @param config
 * @returns
 */
const getTreeDataTitleByKey: TypeFunGetTreeDataTitleByKey = (treeDatas: TypeTreeData[], value: any, config?: {titleKey: string; keyKey: string; childrenKey: string}): any => {
  const {titleKey} = config || {titleKey: 'title', keyKey: 'key', childrenKey: 'children'}
  const selectNode: {[key: string]: any} = getTreeDataByKey(treeDatas, value, config)
  return selectNode[titleKey] || ''
}

export {getSelectOptionByValue, getSelectLabelByValue, getTreeDataByKey, getTreeDataTitleByKey}
