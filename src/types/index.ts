import { type AppIcons } from '@/components/icons'

export interface NavItemProps {
  title: string
  href?: string
  disabled?: boolean
  external?: boolean
  icon?: AppIcons
  label?: string
  description?: string
}

export interface NavItemWithChildren extends NavItemProps {
  items: NavItemWithChildren[]
}

export interface NavItemWithOptionalChildren extends NavItemProps {
  items?: NavItemWithChildren[]
}

export type MainNavItem = NavItemWithOptionalChildren

export type SidebarNavItem = NavItemWithChildren

export type UserRole = 'user' | 'admin' | 'superadmin'

export type Option = {
  label: string
  value: string
}
