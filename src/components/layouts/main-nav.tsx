'use client'
import { Logomark, Logo } from '../icons'
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle
} from '@/components/ui/nav-menu'
import Link from 'next/link'
import * as React from 'react'
import { cn } from '@/lib/utils'
import type { MainNavItem } from '@/types'

interface MainNavProps {
  items?: MainNavItem[]
}

export function MainNav ({ items }: MainNavProps) {
  return (
    <div className='w-full flex justify-between'>
      <Link
        aria-label='Home'
        href='/'
        className='flex items-center gap-x-2'
      >
        <Logomark className='w-auto h-8' />
        <Logo className='w-auto h- hidden md:block' />
      </Link>
      <NavigationMenu className='hidden md:block'>
        <NavigationMenuList>
          {items?.map((item) =>
            item?.items
              ? (
                <NavigationMenuItem key={item.title}>
                  <NavigationMenuTrigger className='h-auto capitalize'>
                    {item.title}
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className='w-[400px] grid gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px]'>
                      {item.items.map((item) => (
                        <NavItem
                          key={item.title}
                          title={item.title}
                          href={item.href}
                        >
                          {item.description}
                        </NavItem>
                      ))}
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>
                )
              : (
                  item.href && (
                    <NavigationMenuItem key={item.title}>
                      <Link href={item.href} legacyBehavior passHref>
                        <NavigationMenuLink
                          className={cn(navigationMenuTriggerStyle(), 'h-auto')}
                        >
                          {item.title}
                        </NavigationMenuLink>
                      </Link>
                    </NavigationMenuItem>
                  )
                )
          )}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  )
}

const NavItem = React.forwardRef<
  React.ElementRef<'a'>,
  React.ComponentPropsWithoutRef<'a'>
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            'block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground',
            className
          )}
          {...props}
        >
          <div className='text-sm font-medium leading-none'>{title}</div>
          <p className='line-clamp-2 text-sm leading-snug text-muted-foreground'>
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  )
})
NavItem.displayName = 'NavItem'
