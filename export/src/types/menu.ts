/*
 * @Author: wdy
 * @Date: 2021-01-07 15:50:10
 * @Last Modified by: wdy
 * @Last Modified time: 2021-01-28 14:06:34
 */
interface TypeMenu {
  type?: string // 菜单类型
  owner?: string // 所有者
  name?: string // 名称
  path?: string // 路径
  id?: string // id
  children?: TypeMenu[]
}
export type {TypeMenu}
