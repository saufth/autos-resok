'use client'

import * as React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { cn, formatMilage, formatPrice } from '@/lib/utils'
import { AspectRatio } from '@/components/ui/AspectRatio'
import { buttonVariants } from '@/components/ui/Button'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import type { StoredFile } from '@/types'

interface ProductCardProps extends React.HTMLAttributes<HTMLDivElement> {
  product: {
    id: number
    name: string
    price: number
    images: StoredFile[]
    year: number
    city: string
    milage: number
  }
}

export function ProductCard ({
  product,
  className,
  ...props
}: ProductCardProps) {
  return (
    <Card
      className={cn('h-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <Link
        aria-label={`Ver detalles de ${product.name}`}
        href={`/product/${product.id}`}
      >
        <CardHeader className='border-b p-0'>
          <AspectRatio ratio={4 / 3}>
            <Image
              src={product.images[0]?.url ?? '/images/product-placeholder.webp'}
              alt={product.name}
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              fill
              className='object-cover'
              loading='lazy'
            />
          </AspectRatio>
        </CardHeader>
      </Link>
      <Link
        aria-label={`View ${product.name} details`}
        href={`/product/${product.id}`}
      >
        <CardContent className='grid gap-2.5 p-4'>
          <CardTitle className='line-clamp-1'>{product.name}</CardTitle>
          <CardDescription>
            {`${formatPrice(product.price)}`}
          </CardDescription>
          <CardDescription className='text-xs'>
            {`${product.city} • ${product.year} • ${formatMilage(product.milage)}`}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className='p-4'>
        <div className='flex w-full flex-col items-center gap-2 sm:flex-row sm:justify-between'>
          <Link
            aria-label='Preview product'
            href={`/product-preview/${product.id}`}
            className={buttonVariants({
              variant: 'outline',
              size: 'sm',
              className: 'h-8 w-full rounded-sm'
            })}
          >
            Ver más
          </Link>
          <Link
            href='#'
            aria-label='Add to cart'
            className='h-8 w-full rounded-sm'
          >
            <div className={buttonVariants({
              size: 'sm',
              className: 'h-8 w-full rounded-sm'
            })}
            >
              Apartar
            </div>
          </Link>
        </div>
      </CardFooter>
    </Card>
  )
}
