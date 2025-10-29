import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
// import { cva, type VariantProps } from 'class-variance-authority'
// import { siteConfig } from '@/config/site'
import { cn } from '@/lib/utils'
import {
  LogomarkIcon,
  LogotypeIcon,
  SaufthIcon,
  type IconProps
} from '@/components/icons'

// const logotypeVariants = cva(
//   'leading-none',
//   {
//     variants: {
//       variant: {
//         default: 'text-primary',
//         secondary: 'text-secondary',
//         ghost: 'text-accent',
//         link: 'text-primary underline-offset-4 hover:underline'
//       },
//       size: {
//         default: 'text-base font-medium',
//         sm: 'text-xs',
//         lg: 'text-[1.375rem] font-bold'
//       }
//     },
//     defaultVariants: {
//       variant: 'default',
//       size: 'default'
//     }
//   }
// )

// interface LogotypeProps extends VariantProps<typeof logotypeVariants> {
//   className?: string
// }

// export function Logotype ({ className, variant, size }: LogotypeProps) {
//   const title = useTranslations('CallToAction')('home')

//   return (
//     <Link
//       href='/'
//       title={`${siteConfig.name} ${title}`}
//       className={cn(logotypeVariants({ variant, size, className }))}
//     >
//       <span>{siteConfig.name}</span>
//       <div className='sr-only'>{title}</div>
//     </Link>
//   )
// }

export function Logomark ({ className, ...props }: IconProps) {
  const title = useTranslations('CallToAction')('home')

  return (
    <Link href='/'>
      <LogomarkIcon
        className={cn('size-8', className)}
        title={title}
        {...props}
      />
      <div className='sr-only'>{title}</div>
    </Link>
  )
}

export function Logotype ({ className, ...props }: IconProps) {
  const title = useTranslations('CallToAction')('home')

  return (
    <Link href='/'>
      <LogotypeIcon
        className={cn('h-8 w-auto', className)}
        title={title}
        {...props}
      />
      <div className='sr-only'>{title}</div>
    </Link>
  )
}

export function AuthorLogo ({ className, ...props }: IconProps) {
  return (
    <Link href='https://x.com/saufth'>
      <SaufthIcon
        className={cn('size-8', className)}
        title='Saufth'
        desc='Project author'
        {...props}
      />
      <div className='sr-only'>Saufth</div>
    </Link>
  )
}
