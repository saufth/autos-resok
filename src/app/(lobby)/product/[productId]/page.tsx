import { Breadcrumbs } from '@/components/pagers/Breadcrumbs'
import { ProductAside as ProductAsideLayout } from '@/components/ProductAside'
import { ProductImageCarousel } from '@/components/ProductImageCarousel'
// import { ProductCard } from '@/components/ProductCard'
import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/Accordion'
import { slugify } from '@/lib/utils'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import Balancer from 'react-wrap-balancer'
import { ProductCard } from '@/components/ProductCard'

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

export default function ProductPage ({ params }: ProductPageProps) {
  const productId = params.productId
  Number(productId)

  const store = {
    id: 1,
    city: 'Querétaro',
    name: 'Autos Resok Pasteur'
  }

  const productsFromStore = [
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

  const product = {
    id: productId,
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
    basic: [
      {
        name: 'Tracción',
        value: '4x4'
      },
      {
        name: 'Transmisión',
        value: 'Automática'
      },
      {
        name: 'Consumo de Combustible (KM/L)',
        value: '12.7'
      },
      {
        name: store.city,
        value: 'Querétaro'
      },
      {
        name: store.name,
        value: 'Autos Resok Pasteur'
      },
      {
        name: 'ID del producto',
        value: String(productId)
      },
      {
        name: 'Estacionado en',
        value: 'D55'
      }
    ],
    info: [
      {
        name: 'General',
        values: [
          {
            name: 'Vidrios Eléctricos',
            value: 'Traseros y delanteros'
          },
          {
            name: 'Numero de Velocidades',
            value: '6'
          },
          {
            name: 'Torque Estimado lb/ft',
            value: '142'
          },
          {
            name: 'Litros',
            value: '2'
          },
          {
            name: 'Caballos de Fuerza Estimado',
            value: '153'
          },
          {
            name: 'Combustible',
            value: 'Gasolina'
          },
          {
            name: 'Tipo de Motor',
            value: 'Combustión'
          }
        ]
      },
      {
        name: 'Exterior',
        values: [
          {
            name: 'Ventanilla Trasera',
            value: 'Si'
          },
          {
            name: 'Tipo de Carrocería',
            value: 'SUV'
          },
          {
            name: 'Apertura de Cajuela',
            value: 'SUV'
          },
          {
            name: 'Número de Puertas',
            value: '5'
          },
          {
            name: 'Faros Frontales',
            value: 'Faros de niebla'
          },
          {
            name: 'Material Rin',
            value: 'Aluminio'
          },
          {
            name: 'Número de Rin',
            value: '17'
          }
        ]
      },
      {
        name: 'Equipamiento y confort',
        values: [
          {
            name: 'Sensor Trasero',
            value: 'Si'
          },
          {
            name: 'Boton de Encendido',
            value: 'Si'
          },
          {
            name: 'Temperatura externa',
            value: 'Si'
          },
          {
            name: 'Cámara',
            value: 'Cámara de Reversa'
          },
          {
            name: 'Aire acondicionado',
            value: 'Automático'
          },
          {
            name: 'Portavasos Traseros',
            value: 'Si'
          },
          {
            name: 'Boton de Encendido',
            value: 'Si'
          }
        ]
      },
      {
        name: 'Seguridad',
        values: [
          {
            name: 'Control de tracción',
            value: 'Si'
          },
          {
            name: 'Control de Descenso',
            value: 'Si'
          },
          {
            name: 'Bolsas de Aire Laterales',
            value: 'Si'
          },
          {
            name: 'Bolsas de Aire Frontales',
            value: 'Si'
          },
          {
            name: 'Seguros Eléctricos',
            value: 'Si'
          },
          {
            name: 'Anclaje Infantil ISOFIX',
            value: 'Si'
          }
        ]
      },
      {
        name: 'Interior',
        values: [
          {
            name: 'Material Asientos',
            value: 'Tela'
          },
          {
            name: 'Número de Pasajeros',
            value: '5'
          }
        ]
      },
      {
        name: 'Entretenimiento',
        values: [
          {
            name: 'Pantalla Táctil',
            value: 'Si'
          },
          {
            name: 'Radio',
            value: 'Si'
          },
          {
            name: 'Android Auto',
            value: 'Si'
          },
          {
            name: 'Apple Care',
            value: 'Si'
          },
          {
            name: 'Aux',
            value: 'Si'
          },
          {
            name: 'USB',
            value: 'Si'
          },
          {
            name: 'Bluetooth',
            value: 'Si'
          }
        ]
      }
    ]
  }
  const productName = `${product.branch} ${product.model} ${product.version} ${product.year}`
  const transmission = product.basic.find((element) => element.name === 'Transmisión')!

  if (!product) {
    notFound()
  }

  const ProductAside = ({ className }: { className: string }) => (
    <ProductAsideLayout
      name={productName}
      version={product.version}
      year={product.year}
      price={product.price}
      milage={product.milage}
      city={store.city}
      transmission={transmission}
      className={className}
    />
  )

  // const productsFromStore = allProducts

  return (
    <section className='space-y-8'>
      <div>
        <div className='container p-4'>
          <Breadcrumbs
            segments={[
              {
                title: product.branch,
                href: '#'
              },
              {
                title: product.model,
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
            <ProductAside className='w-full px-4 md:hidden' />
            <div className='space-y-8 pb-14 px-4 md:px-0'>
              <div className='space-y-8'>
                <h2 className='text-2xl'>
                  Informacion Básica
                </h2>
                <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
                  {product.basic.map((basicInfo, key) => (
                    <div className='pb-3 border-b' key={key}>
                      <div className='text-muted-foreground'>
                        {basicInfo.name}
                      </div>
                      <div className='text-lg'>
                        {basicInfo.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className='space-y-4'>
                <Accordion
                  type='single'
                  collapsible
                  className='w-full'
                >
                  {product.info.map((item, key) => (
                    <AccordionItem value={slugify(item.name)} key={key}>
                      <AccordionTrigger className='text-2xl'>
                        {item.name}
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className='grid md:grid-cols-2 gap-x-8 gap-y-3'>
                          {item.values.map((info, key) => (
                            <div className='pb-3 border-b' key={key}>
                              <div className='text-muted-foreground'>
                                {info.name}
                              </div>
                              <div className='text-lg'>
                                {info.value}
                              </div>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
          <ProductAside className='w-1/3 hidden pl-12 md:block' />
        </div>
      </div>
      <section className='container py-8 flex flex-col items-center gap-8 md:flex-row md:h-[480px] md:py-0'>
        <div className='w-full lg:px-12 space-y-8 text-center md:text-left md:w-1/2'>
          <h2 className='text-4xl'>
            Pagar auto a meses
          </h2>
          <Balancer className='text-xl'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nulla voluptatum
            labore non vitae omnis magni, porro fugiat quidem qui voluptate quaerat ipsum enim
            vero explicabo eius eos sed excepturi.
          </Balancer>
          <Link
            href='#'
            className={buttonVariants({ size: 'lg' })}
          >
            Solicitar plan a meses
          </Link>
        </div>
        <div className='w-full h-80 md:h-full bg-sky-600 md:w-1/2' />
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
            Cambia tu auto con más beneficios
          </h2>
          <Balancer>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat, nulla voluptatum
            labore non vitae omnis magni, porro fugiat quidem qui voluptate quaerat ipsum enim
            vero explicabo eius eos sed excepturi.
          </Balancer>
          <div>
            <Link href='/dashboard/stores'>
              <div className={buttonVariants()}>
                Vende o cambia tu auto
              </div>
            </Link>
          </div>
        </div>
      </section>
      {store && productsFromStore.length > 0
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
        : null}
    </section>
  )
}
