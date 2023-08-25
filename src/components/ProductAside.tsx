import { Icons } from '@/components/Icons'
import { Separator } from '@/components/ui/Separator'
import { cn, formatMilage, formatPrice } from '@/lib/utils'
import Link from 'next/link'

interface ProductAsideProps {
  name: string
  version: string
  year: number
  price: number
  milage: number
  city: string
  transmission: {
    name: string
    value: string
  }
  className?: string
}

export function ProductAside (props: ProductAsideProps) {
  return (
    <div
      className={cn('space-y-4', props.className)}
    >
      <div className='w-full border border-border rounded-xl bg-white dark:bg-slate-800 dark:border-0 dark:highlight-white/20'>
        <div className='p-4 space-y-2'>
          <h2 className='text-2xl font-bold'>
            {props.name}
          </h2>
          <p className='text-sm font-light text-muted-foreground'>
            {`${formatMilage(props.milage)} • ${props.city}`}
          </p>
        </div>
        <Separator />
        <div className='p-4 space-y-2'>
          <p className='text-sm font-light text-muted-foreground'>
            {`Precio de ${formatPrice(props.price)}`}
          </p>
          <p className='text-base'>
            Desde <span className='text-2xl'>{`${formatPrice(props.price)}`}</span> /mes
          </p>
          <div className='pt-3'>
            <Link href='#'>
              <div className='flex items-center gap-x-2 text-sky-500 dark:text-sky-400'>
                <Icons.CircleDollar className='w-8 h-auto stroke-1 stroke-sky-500 dark:stroke-sky-400' />
                <span>Solicita plan a crédito</span>
              </div>
            </Link>
          </div>
        </div>
        <Separator />
        <div>
          <div className='p-4 space-y-2'>
            <div>
              <div className='text-muted-foreground'>Año</div>
              <div className='text-lg'>{props.year}</div>
            </div>
          </div>
          <Separator />
          <div className='p-4 space-y-2'>
            <div>
              <div className='text-muted-foreground'>Versión</div>
              <div className='text-lg'>{props.version}</div>
            </div>
          </div>
          <Separator />
          <div className='p-4 space-y-2'>
            <div>
              <div className='text-muted-foreground'>{props.transmission.name}</div>
              <div className='text-lg'>{props.transmission.value}</div>
            </div>
          </div>
        </div>
      </div>
      <div className='w-full p-4 bg-white border border-border rounded-xl space-y-4 dark:bg-slate-800 dark:border-0 dark:highlight-white/20 [&>div]:flex [&>div]:gap-x-3 [&>div]:items-center'>
        <div>
          <div className='w-6 h-6'>
            <Icons.ShieldCheck className='w-auto h-full stroke-1 stroke-sky-500 dark:stroke-sky-400' />
          </div>
          3 meses de garantía mecánica.
        </div>
        <Separator />
        <div>
          <div className='w-6 h-6'>
            <Icons.Tool className='w-auto h-full stroke-1 stroke-sky-500 dark:stroke-sky-400' />
          </div>
          Inspección de 240 puntos.
        </div>
        <Separator />
        <div>
          <div className='w-6 h-6'>
            <Icons.Truck className='w-auto h-full stroke-1 stroke-sky-500 dark:stroke-sky-400' />
          </div>
          Envío interestatal disponible con costo adicional.
        </div>
        <Separator />
        <div>
          <div className='w-6 h-6'>
            <Icons.CalendarCheck className='w-auto h-full stroke-1 stroke-sky-500 dark:stroke-sky-400' />
          </div>
          Prueba de 7 días o 300 km.
        </div>
        <Separator />
        <div>
          <div className='w-6 h-6'>
            <Icons.Switch className='w-auto h-full stroke-1 stroke-sky-500 dark:stroke-sky-400' />
          </div>
          Descuento por intercambio. Deja el tuyo y llévate este por mucho menos.
        </div>
      </div>
    </div>
  )
}
