import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/Card'
import { AspectRatio } from '@/components/ui/AspectRatio'
import Image from 'next/image'
import * as React from 'react'
import { cn } from '@/lib/utils'

interface InfoCardProps extends React.HTMLAttributes<HTMLDivElement> {
  card: {
    heading: string
    description: string | string[]
    image: {
      src: string
      alt: string
    }
  }
}

export default function InfoCard ({
  card,
  className,
  ...props
}: InfoCardProps) {
  return (
    <Card
      className={cn('h-full overflow-hidden rounded-sm', className)}
      {...props}
    >
      <CardHeader className='border-b p-0'>
        <AspectRatio ratio={4 / 3}>
          <Image
            src={card.image.src}
            alt={card.image.alt}
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            fill
            className='object-cover'
            loading='lazy'
          />
        </AspectRatio>
      </CardHeader>
      <CardContent className='grid gap-2.5 p-4'>
        <CardTitle className='lg:text-xl'>{card.heading}</CardTitle>
        <CardDescription>
          {typeof card.description === 'string'
            ? card.description
            : (
              <div className='space-y-2'>
                {card.description.map((value) => value)}
              </div>)}
        </CardDescription>
      </CardContent>
    </Card>
  )
}
