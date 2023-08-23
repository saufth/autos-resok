import { Combobox } from '../Combobox'
import { MainNav } from './MainNav'
import { MobileNav } from '@/components/layouts/MobileNav'
import { ThemeToggle } from './ThemeToggle'
import { siteConfig } from '@/config/site'

export async function SiteHeader () {
  return (
    <header className='sticky top-0 z-40 w-full border-b bg-background'>
      <div className='container flex h-20 md:h-24 items-center space-x-4'>
        <MainNav items={siteConfig.mainNav} />
        <div className='flex flex-1 items-center justify-end space-x-4'>
          <Combobox />
          <ThemeToggle />
        </div>
        <MobileNav
          mainNavItems={siteConfig.mainNav}
        />
      </div>
    </header>
  )
}
