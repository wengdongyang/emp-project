/*
 * @Author: wdy
 * @Date: 2021-01-13 10:55:26
 * @Last Modified by: wdy
 * @Last Modified time: 2021-02-01 12:02:50
 */
import React, {useState, useEffect, FunctionComponent, ImgHTMLAttributes} from 'react'
// types
// config
// api
// util
// store
// component

interface Props extends ImgHTMLAttributes<HTMLImageElement> {
  defaultSource?: string
}
const AsEmpty: FunctionComponent<Props> = props => {
  const {src, defaultSource, alt, ...otherProps} = props
  const [imgSource, setImgSource] = useState<string>(src || defaultSource || '')
  useEffect(() => {
    setImgSource(src || defaultSource || '')
  }, [src])
  const onError = () => {
    setImgSource(defaultSource || '')
  }
  return <img src={imgSource} alt={alt} onError={onError} {...otherProps} />
}

export default AsEmpty
