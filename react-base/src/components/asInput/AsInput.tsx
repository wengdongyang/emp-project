/*
 * @Author: wdy
 * @Date: 2021-01-13 10:55:26
 * @Last Modified by: wdy
 * @Last Modified time: 2021-02-01 12:02:50
 */
import React, {FunctionComponent, InputHTMLAttributes} from 'react'
// types
// config
// api
// util
// store
// component

interface Props extends InputHTMLAttributes<HTMLInputElement> {
  defaultValue?: string
}
const AsInput: FunctionComponent<Props> = props => {
  const {defaultValue, ...otherProps} = props
  return <input value={defaultValue} {...otherProps} />
}

export default AsInput
