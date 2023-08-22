import { Breadcrumbs } from '@/components/pagers/Breadcrumbs'
// import { ProductCard } from '@/components/ProductCard'
import { ProductImageCarousel } from '@/components/ProductImageCarousel'
import { Separator } from '@/components/ui/Separator'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { formatMilage, formatPrice } from '@/lib/utils'
import { Icons } from '@/components/Icons'

export const metadata: Metadata = {
  metadataBase: new URL('http://localhost:3000'),
  title: 'Producto',
  description: 'Lorem ipsum'
}

interface ProductPageProps {
  params: {
    productId: string
  }
}

export default async function ProductPage ({ params }: ProductPageProps) {
  const productId = Number(params.productId)
  const allProducts = [
    {
      id: 1,
      branch: 'KIA',
      model: 'Sportage',
      version: '2.0 EX AUTO',
      year: 2018,
      price: 364999,
      milage: 48881,
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
      basic: {
        traction: '4x4',
        transmission: 'Automática',
        consumption: 12.7,
        city: 'Querétaro',
        store: 'Autos Resok Pasteur',
        stockID: 1,
        parked_at: 'D55'
      },
      outside: {
        rearWindow: true,
        type: 'SUV',
        trunkOpening: 'Remota',
        doors: 5,
        frontHeadlights: 'Faros de niebla',
        rimMaterial: 'Faros de niebla',
        rimNumber: 17
      },
      equipment: {
        rearSensor: true,
        powerButton: true,
        externalTemperature: true,
        airConditioning: 'Automático',
        rearCupHolder: true,
        fontCupHolder: true
      },
      segurity: {
        tractionControl: true,
        descentControl: true,
        sideAirBags: true,
        frontAirBags: true,
        electricLocks: true,
        isofix: true
      },
      inside: {
        materialSeats: 'Tela',
        passengers: 5
      },
      entertainment: {
        touschScreen: true,
        radio: true,
        androidAuto: true,
        appleCarPlay: true,
        aux: true,
        usb: true,
        bluetooth: true
      }
    }
  ]
  const product = allProducts[productId - 1]!
  const productName = `${product.branch} ${product.model} ${product.version} ${product.year}`

  if (!product) {
    notFound()
  }

  // const store = {
  //   id: 1,
  //   name: 'Autos Resok Pasteur'
  // }

  // const productsFromStore = allProducts

  return (
    <section className='space-y-8'>
      <div>
        <div className='container p-4'>
          <Breadcrumbs
            segments={[
              {
                title: 'Kia',
                href: '#'
              },
              {
                title: 'Sportage',
                href: '#'
              }
            ]}
          />
        </div>
        <div className='md:container flex flex-col gap-4 md:flex-row'>
          <div className='w-full md:w-2/3 space-y-8'>
            <ProductImageCarousel
              images={product.images ?? []}
              options={{
                loop: true
              }}
            />
            <div className='space-y-8 pb-12 px-4 md:px-0'>
              <h2 className='flex-1 text-2xl font-bold'>
                Informacion Básica
              </h2>
              <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Tracción
                  </div>
                  <div className='text-lg'>
                    {product.basic.traction}
                  </div>
                </div>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Transmisión
                  </div>
                  <div className='text-lg'>
                    {product.basic.transmission}
                  </div>
                </div>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Consumo de Combustible (KM/L)
                  </div>
                  <div className='text-lg'>
                    {product.basic.consumption}
                  </div>
                </div>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Ciudad
                  </div>
                  <div className='text-lg'>
                    {product.basic.city}
                  </div>
                </div>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Sucursal
                  </div>
                  <div className='text-lg'>
                    {product.basic.store}
                  </div>
                </div>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Stock ID
                  </div>
                  <div className='text-lg'>
                    {product.basic.stockID}
                  </div>
                </div>
                <div className='pb-3 border-b'>
                  <div className='text-muted-foreground'>
                    Estacionado en
                  </div>
                  <div className='text-lg'>
                    {product.basic.parked_at}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='w-full md:w-1/3 pl-4 pr-4 md:pl-10 md:pr-0'>
            <div className='w-full border border-border rounded-xl bg-white dark:bg-slate-800 dark:border-0 dark:highlight-white/20'>
              <div className='p-4 space-y-2'>
                <h2 className='text-2xl font-bold'>
                  {productName}
                </h2>
                <p className='text-sm font-light text-muted-foreground'>
                  {`${formatMilage(product.milage)} • ${product.basic.city}`}
                </p>
              </div>
              <Separator />
              <div className='p-4 space-y-2'>
                <p className='text-sm font-light text-muted-foreground'>
                  {`Precio de ${formatPrice(product.price)}`}
                </p>
                <p className='text-base'>
                  Desde <span className='text-2xl'>{`${formatPrice(product.price)}`}</span> /mes
                </p>
                <div className='pt-3'>
                  <Link
                    href='#'
                    className='flex items-center gap-x-2 text-sky-500 dark:text-sky-400'
                  >
                    <Icons.CircleDollar
                      strokeWidth={1}
                      size={32}
                      className='stroke-sky-500 dark:stroke-sky-400'
                    /> Solicita plan a crédito
                  </Link>
                </div>
              </div>
              <Separator />
              <div>
                <div className='p-4 space-y-2'>
                  <div>
                    <div className='text-muted-foreground'>Año</div>
                    <div className='text-lg'>{product.year}</div>
                  </div>
                </div>
                <Separator />
                <div className='p-4 space-y-2'>
                  <div>
                    <div className='text-muted-foreground'>Versión</div>
                    <div className='text-lg'>{product.version}</div>
                  </div>
                </div>
                <Separator />
                <div className='p-4 space-y-2'>
                  <div>
                    <div className='text-muted-foreground'>Transmición</div>
                    <div className='text-lg'>{product.basic.transmission}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* {store && productsFromStore.length > 0
        ? (
          <div className='container overflow-hidden md:pt-6'>
            <h2 className='line-clamp-1 flex-1 text-2xl font-bold'>
              Más en {store.name}
            </h2>
            <div className='overflow-x-auto pb-2 pt-6'>
              <div className='flex w-fit gap-4'>
                {productsFromStore.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    className='min-w-[260px]'
                  />
                ))}
              </div>
            </div>
          </div>
          )
        : null} */}
    </section>
  )
}
