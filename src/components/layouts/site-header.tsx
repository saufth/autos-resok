import { Combobox } from '../combobox'
import { MainNav } from './main-nav'
import { MobileNav } from '@/components/layouts/MobileNav'
import { ThemeToggle } from './theme-toggle'
import { siteConfig } from '@/config/site'

export async function SiteHeader () {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-20 items-center space-x-4'>
        <MainNav items={siteConfig.mainNav} />
        <div className='h-6 border-l' />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <div className='flex items-center space-x-2'>
            <ThemeToggle />
            <Combobox />
          </div>
        </div>
        <MobileNav
          mainNavItems={siteConfig.mainNav}
        />
      </div>
    </header>
  )
}
