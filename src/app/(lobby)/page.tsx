import { Balancer } from 'react-wrap-balancer'
import Link from 'next/link'
import Image from 'next/image'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { AspectRatio } from '@/components/ui/AspectRatio'
import { ProductCard } from '@/components/ProductCard'

// export const dynamic = "force-dynamic"

const reasonWhyList = [
  {
    heading: 'Certificación OK para todos nuestros autos',
    description: 'Inspeccionamos a fondo cada una de nuestras unidades y nos aseguramos que todas cumplan con los estándares que tú como cliente necesitas.',
    image: 'certification'
  },
  {
    heading: 'Restauramos a detalle nuestros automóviles',
    description: 'Mientras otras marcas compran y venden problemas, en autos Resok nos comprometemos con ofrecer un producto confiable, seguro y a la medida de tu presupuesto.',
    image: 'recondition'
  },
  {
    heading: 'Ofrecemos planes de pago personalizados',
    description: 'Dependiendo de tu presupuesto y necesidades específicas, nos encargamos de brindarte una solución financiera viable y a tu medida.',
    image: 'payments'
  }
]

const allProducts = [
  {
    id: 1,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 2,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 3,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 4,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 5,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 6,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 7,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  },
  {
    id: 8,
    name: 'KIA Sportage 2.0 EX AUTO Suv 2018',
    price: 364999,
    images: [
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-1.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-2.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-3.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-4.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-5.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-6.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-7.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-8.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-9.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-10.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-11.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-12.webp'
      },
      {
        id: 1,
        name: 'Lorem ipsum',
        url: '/images/products/p1-13.webp'
      }
    ],
    year: 2018,
    city: 'Querétaro',
    milage: 48881
  }
]

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
            Cambia o vende tu auto
          </Link>
        </div>
      </section>
      <section
        id='why-resok'
        aria-labelledby='why-resok-heading'
        className='container'
      >
        <div className='space-y-6 py-6 md:pt-10 lg:pt-24'>
          <div className='mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center'>
            <h2 className='text-3xl font-bold leading-[1.1] sm:text-3xl md:text-5xl'>
              Razones para comprar un auto Resok
            </h2>
          </div>
          <div className='grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3'>
            {reasonWhyList.map((reasonWhy, key) => (
              <Card key={key} className='flex h-full flex-col overflow-hidden'>
                <CardHeader className='border-b p-0'>
                  <AspectRatio ratio={4 / 3}>
                    <Image
                      src={`/images/why-${reasonWhy.image}.webp`}
                      alt={reasonWhy.heading}
                      sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                      fill
                      className='object-cover'
                      loading='lazy'
                    />
                  </AspectRatio>
                </CardHeader>
                <CardContent className='grid gap-2.5 p-4'>
                  <CardTitle className='lg:text-xl'>{reasonWhy.heading}</CardTitle>
                  <CardDescription className='line-clamp-2'>
                    {reasonWhy.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section
        id='sell-yor-car-banner'
        aria-labelledby='sell-yor-car-banner-heading'
        className='container'
      >
        <div
          className='grid place-items-center gap-6 rounded-xl border bg-card px-6 py-16 text-center text-card-foreground shadow-sm'
        >
          <h2 className='pl-4 text-2xl font-medium sm:text-3xl'>
            Trade-In y Compra de Autos
          </h2>
          <Balancer>
            Facilitamos a nuestros clientes la posibilidad de la venta o intercambio
            de sus vehículos actuales al adquirir uno de nuestros automóviles.
          </Balancer>
          <div>
            <Link href='/dashboard/stores'>
              <div className={cn(buttonVariants())}>
                Vende o cambia tu auto
              </div>
            </Link>
          </div>
        </div>
      </section>
      <section className='container h-[587px] flex flex-col items-center gap-8 md:flex-row'>
        <div className='w-full space-y-8 text-center md:text-left md:w-1/2'>
          <h2 className='text-4xl'>
            ¡Pedidos especiales!
          </h2>
          <Balancer className='text-xl'>
            Si tienes la necesidad de adquirir un vehículo específico bajo un presupuesto concreto
            nuestro equipo de compras se dará a la tarea de seleccionar la mejor opción para ti.
          </Balancer>
          <Link
            href='#'
            className={cn(
              buttonVariants({
                size: 'lg'
              })
            )}
          >
            Solicitar auto
          </Link>
        </div>
        <div className='w-full md:w-1/2 h-full bg-sky-600' />
      </section>
      <section
        id='featured-products'
        aria-labelledby='featured-products-heading'
        className='container space-y-6'
      >
        <div className='flex items-center'>
          <h2 className='flex-1 text-2xl font-medium sm:text-3xl'>
            Autos destacados
          </h2>
          <Link aria-label='Products' href='/products'>
            <div
              className={cn(
                buttonVariants({
                  size: 'sm'
                })
              )}
            >
              Ver todos
            </div>
          </Link>
        </div>
        <div className='grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {allProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </main>
  )
}
