import { Balancer } from 'react-wrap-balancer'
import Link from 'next/link'
import { buttonVariants } from '@/components/ui/Button'
import { cn } from '@/lib/utils'
import { Icons } from '@/components/Icons'

const ourValues = [
  {
    heading: 'Trabajamos en equipo',
    description: 'Filosofía: Los negocios son opuestos a las matemáticas. Mientras las matemáticas plantean que la mejor forma de sumar es multiplicar, en los negocios la mejor forma de sumar es dividir. Dividir el esfuerzo, trabajando con un equipo de profesionales que nos permitan poner los mejores vehículos al alcance de nuestros clientes.',
    image: {
      src: '/images/why-certification.webp',
      alt: 'Equipo Resok'
    }
  },
  {
    heading: 'Innovamos constantemente',
    description: 'Innovamos alrededor de lo que nuestros clientes consideran valioso para lograr brindar la mejor experiencia posible.',
    image: {
      src: '/images/why-recondition.webp',
      alt: 'Innovación Resok'
    }
  },
  {
    heading: 'Transformamos problemas en oportunidades',
    description: [
      'Problemas = áreas de oportunidad.',
      'Mientras más grande y frecuente sea el problema, mayor será la posibilidad de generar valor.',
      'Buscamos excelencia en la restauración de automóviles, poniendo especial atención a los detalles y elementos clave que sabemos que nuestros clientes apreciarán.'
    ],
    image: {
      src: '/images/why-payments.webp',
      alt: 'Soluciones Resok'
    }
  },
  {
    heading: 'No asumimos',
    description: 'Se debe tener certeza en cada tarea u objetivo a realizar. Trabajamos en conjunto con nuestros clientes para conocer sus necesidades, logrando de esta forma evitar posibles retrabajos a corto, mediano y largo plazo.',
    image: {
      src: '/images/why-certification.webp',
      alt: 'Seguridad Resok'
    }
  },
  {
    heading: 'Planeamos y ejecutamos con estrategia',
    description: [
      'Se debe analizar y elegir con mucho cuidado la mejor forma de llegar del punto A (en donde estamos), al punto B (a donde se quiere llegar).',
      'Administramos con eficiencia los recursos disponibles, entendemos que siempre hay una forma mejor u óptima de hacer las cosas. La mejora continua en todos nuestros procesos es parte primordial de nuestro ADN.'
    ],
    image: {
      src: '/images/why-recondition.webp',
      alt: 'Acción Resok'
    }
  },
  {
    heading: 'Prevemos futuras tendencias',
    description: [
      'Lo único constante es el cambio.',
      'Nos mantenemos a la vanguardia de las tendencias que establece el mercado para poder brindar el mejor producto y servicio posible, ofreciendo automóviles confiables y seguros que generan valor para nuestros clientes en tiempo real.'
    ],
    image: {
      src: '/images/why-payments.webp',
      alt: 'Visión Resok'
    }
  }
]

export default function About () {
  return (
    <main className='space-y-12 pb-8'>
      <section
        id='about-hero'
        aria-labelledby='about-hero-heading'
        className='mx-auto px-4 flex w-full max-w-[64rem] flex-col items-center justify-center gap-y-4 md:gap-y-8 pb-8 pt-6 text-center md:pb-12 md:pt-10 lg:py-28'
      >
        <h1 className='text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl lg:leading-[1.1]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </h1>
        <Balancer className='max-w-[46rem] text-lg text-muted-foreground sm:text-xl'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit.
          Consequuntur perferendis nisi, a aliquam magnam.
        </Balancer>
        <div className='pt-4'>
          <Link
            href='#'
            className={cn(
              buttonVariants({
                size: 'lg'
              })
            )}
          >
            Contáctanos
          </Link>
        </div>
      </section>
      <section>
        <article className='container py-8 flex flex-col items-center gap-8 md:flex-row md:h-[480px] md:py-0'>
          <div className='w-full lg:px-12 space-y-8 text-center md:text-left md:w-1/2'>
            <h2 className='text-4xl'>
              Nuestra Misión
            </h2>
            <Balancer className='text-xl text-muted-foreground'>
              En Autos Resok, nuestra misión es brindarte una experiencia agradable,
              confiable y segura en la compra de tu automóvil.
            </Balancer>
          </div>
          <div className='w-full h-80 md:h-full bg-sky-600 md:w-1/2' />
        </article>
        <article className='container py-8 flex flex-col items-center gap-8 md:flex-row-reverse md:h-[480px] md:py-0'>
          <div className='w-full lg:px-12 space-y-8 text-center md:text-left md:w-1/2'>
            <h2 className='text-4xl'>
              Nuestra Visión
            </h2>
            <Balancer className='text-xl text-muted-foreground'>
              Nuestra visión es llegar a ser la empresa líder en México en el mercado
              de venta de automóviles restaurados y recuperados, avalada por la plena
              satisfacción y preferencia de nuestros clientes.
            </Balancer>
          </div>
          <div className='w-full h-80 md:h-full bg-sky-600 md:w-1/2' />
        </article>
      </section>
      <section className='container overflow-hidden space-y-12 md:pt-6'>
        <div className='text-center space-y-4'>
          <h2 className='text-4xl font-bold'>
            Nuestros Valores
          </h2>
          <Balancer className='text-lg text-muted-foreground'>
            El éxito a corto, mediano y largo de cualquier empresa no depende de un
            solo aspecto, sino de la sincronización de muchos. Aquí te presentamos
            los más importantes para nosotros, mismos que forman parte de nuestro ADN
            y son clave en la generación de valor para nuestros clientes.
          </Balancer>
        </div>
        <div className='grid gap-y-8 md:grid-cols-2 md:gap-20 md:px-20'>
          {ourValues.map((value, key) => (
            <div className='w-full grid' key={key}>
              <div className='flex gap-x-4'>
                <div className='w-10'>
                  <Icons.Logomark className='w-10 h-auto' />
                </div>
                <div className='space-y-4'>
                  <h3 className='text-2xl'>
                    {value.heading}
                  </h3>
                  <div className='text-muted-foreground space-y-2'>
                    {typeof value.description === 'string'
                      ? value.description
                      : (
                        <div className='space-y-2'>
                          {value.description.map((value, key) => <div key={key}>{value}</div>)}
                        </div>)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  )
}
