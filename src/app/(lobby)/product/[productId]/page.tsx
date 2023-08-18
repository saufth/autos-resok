import type { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { formatMilage, formatPrice } from '@/lib/utils'
import { Breadcrumbs } from '@/components/pagers/Breadcrumbs'
import { ProductCard } from '@/components/ProductCard'
import { ProductImageCarousel } from '@/components/ProductImageCarousel'
import { Separator } from '@/components/ui/Separator'

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

export default async function ProductPage ({ params }: ProductPageProps) {
  const productId = Number(params.productId)

  const product = allProducts[productId]

  if (!product) {
    notFound()
  }

  const store = {
    id: 1,
    name: 'Autos Resok Pasteur'
  }

  const productsFromStore = allProducts

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
          <ProductImageCarousel
            className='w-full md:w-2/3'
            images={product.images ?? []}
            options={{
              loop: true
            }}
          />
          <div className='w-full md:w-1/3 pl-4 pr-4 md:pl-10 md:pr-0'>
            <div className='w-full border border-border rounded-xl'>
              <div className='p-4 space-y-2'>
                <h2 className='text-2xl font-bold'>{product.name}</h2>
                <p className='text-sm font-light text-muted-foreground'>
                  {`${formatMilage(product.milage)} • ${product.city}`}
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
              </div>
              <Separator />
              <div className='p-4 space-y-2'>
                {store
                  ? (
                    <Link
                      href={`/products?store_ids=${store.id}`}
                      className='line-clamp-1 inline-block text-base text-muted-foreground hover:underline'
                    >
                      {store.name}
                    </Link>
                    )
                  : null}
              </div>
            </div>
          </div>
        </div>
      </div>
      {store && productsFromStore.length > 0
        ? (
          <div className='container overflow-hidden md:pt-6'>
            <h2 className='line-clamp-1 flex-1 text-2xl font-bold'>
              Más autos en {store.name}
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
        : null}
    </section>
  )
}
