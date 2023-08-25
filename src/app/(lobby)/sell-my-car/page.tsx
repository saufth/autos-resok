import { Icons } from '@/components/Icons'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger
} from '@/components/ui/Accordion'
import { buttonVariants } from '@/components/ui/Button'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'
import { slugify } from '@/lib/utils'

const sellCarConfig = [
  {
    name: 'Lorem ipsum dolor sit',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Lorem ipsum dolor sit',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Lorem ipsum dolor sit',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  },
  {
    name: 'Lorem ipsum dolor sit',
    value: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }
]

const faqConfig = [
  {
    name: '¿Lorem ipsum dolor sit ame varus a?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus e?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus i?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus o?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus u?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus ae?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus ai?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  },
  {
    name: '¿Lorem ipsum dolor sit ame varus ao?',
    value: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur perferendis nisi, a aliquam magnam.'
  }
]

export default function About () {
  return (
    <main className='space-y-24 pb-8'>
      <section className='container py-8 flex flex-col items-center gap-8 md:flex-row md:h-[480px] md:py-0'>
        <div className='w-full lg:px-12 space-y-8 text-center md:text-left md:w-1/2'>
          <h1 className='text-5xl font-black leading-snug'>
            <Balancer>
              Cotiza y vende tu auto en 1 día
            </Balancer>
          </h1>
          <p className='text-lg'>
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Balancer>
          </p>
          <Link
            href='#'
            className={buttonVariants({ size: 'lg' })}
          >
            Cotiza tu auto
          </Link>
        </div>
        <div className='w-full h-80 md:h-full bg-sky-600 md:w-1/2' />
      </section>
      <section className='container space-y-12'>
        <h2 className='text-4xl text-center'>
          <Balancer>
            Lorem ipsum dolor sit amet varus
          </Balancer>
        </h2>
        <div className='grid gap-16 sm:grid-cols-2 lg:grid-cols-4'>
          {sellCarConfig.map((item, key) => (
            <div className='flex flex-col items-center gap-y-6 text-center' key={key}>
              <Icons.Logomark className='w-14 h-auto' />
              <div className='space-y-1'>
                <h3 className='text-xl font-black'>
                  {item.name}
                </h3>
                <p className='text-muted-foreground font-thin'>
                  <Balancer>
                    {item.value}
                  </Balancer>
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className='container py-8 flex flex-col items-center gap-8 md:flex-row md:h-[480px] md:py-0'>
        <div className='w-full lg:px-12 space-y-8 text-center md:text-left md:w-1/2'>
          <h1 className='text-5xl font-black leading-snug'>
            <Balancer>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </Balancer>
          </h1>
          <p className='text-lg'>
            <Balancer>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam velit inventore.
            </Balancer>
          </p>
          <Link
            href='#'
            className={buttonVariants({ size: 'lg' })}
          >
            Vender auto
          </Link>
        </div>
        <div className='w-full h-80 md:h-full bg-sky-600 md:w-1/2' />
      </section>
      <section className='container space-y-8'>
        <h2 className='text-4xl text-center'>
          Preguntas frecuentes
        </h2>
        <Accordion
          type='single'
          collapsible
          className='max-w-[584px] mx-auto'
        >
          {faqConfig.map((item, key) => (
            <AccordionItem value={slugify(item.name)} key={key}>
              <AccordionTrigger className='text-lg text-left'>
                {item.name}
              </AccordionTrigger>
              <AccordionContent>
                <div className='pb-4 border-b'>
                  {item.value}
                </div>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>
    </main>
  )
}
