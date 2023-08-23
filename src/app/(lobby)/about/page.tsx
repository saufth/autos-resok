import { Balancer } from 'react-wrap-balancer'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'

export default function Home () {
  return (
    <main className='space-y-8 pb-8'>
      <section
        id='hero'
        aria-labelledby='hero-heading'
        className='mx-auto px-4 flex w-full max-w-[64rem] flex-col items-center justify-center gap-y-4 md:gap-y-8 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28'
      >
        <h1 className='text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
          Autos Restaurados y Renovados. Realmente a tu alcance.
        </h1>
        <Balancer className='max-w-[46rem] text-lg text-muted-foreground sm:text-xl'>
          Venta, compra e intercambio de automóviles seminuevos, recuperados y restaurados.
        </Balancer>
        <div className='pt-4 flex flex-wrap items-center justify-center gap-4'>
          <Link
            href='#'
            className={cn(
              buttonVariants({
                size: 'lg'
              })
            )}
          >
            Comprar un auto
          </Link>
          <Link
            href='#'
            className={cn(
              buttonVariants({
                variant: 'secondary',
                size: 'lg'
              })
            )}
          >
            Cambia o vende tu auto {'>'}
          </Link>
        </div>
      </section>
    </main>
  )
}
