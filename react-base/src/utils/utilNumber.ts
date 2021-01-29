/*
 * @Author: wdy
 * @Date: 2019-05-27 15:52:17
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:06:06
 */
// types
import type {TypeFunFormatNumber} from './index'
// config
// api
// util
// store
// component
/**
 * 将数字格式化
 * @param {*} num
 */
export const formatNumber: TypeFunFormatNumber = (num: number): string => {
  const newNum = num.toString()
  return newNum[1] ? newNum.toString() : '0' + newNum
}
