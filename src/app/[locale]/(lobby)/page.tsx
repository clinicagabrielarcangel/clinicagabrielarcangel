// import Image from 'next/image'
import { Link } from '@/i18n/routing'
import { useTranslations } from 'next-intl'
import { ArrowRightIcon } from 'lucide-react'
import { CallToAction } from '@/components/call-to-action'
import { InfiniteMovingImages } from '@/components/infinite-moving-images'
import {
  PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/page-header'
import { Shell } from '@/components/shell'
import { Button } from '@/components/ui/button'

const certification = [
  {
    name: 'NIBBOT',
    url: 'https://nibbot-tms.com',
    image: {
      src: '/images/certifications/nibbot.webp',
      alt: 'NIBBOT logotype',
      width: 462,
      height: 139
    }
  },
  {
    name: 'CONASAMA',
    url: 'https://www.gob.mx/conasama',
    image: {
      src: '/images/certifications/conasama.webp',
      alt: 'CONASAMA logotype',
      width: 405,
      height: 84
    }
  },
  {
    name: 'COFEPRIS',
    url: 'https://www.gob.mx/cofepris',
    image: {
      src: '/images/certifications/cofepris.webp',
      alt: 'COFEPRIS logotype',
      width: 1158,
      height: 282
    }
  },
  {
    name: 'CECA',
    url: 'https://gobqro.gob.mx/cecaqro',
    image: {
      src: '/images/certifications/ceca.webp',
      alt: 'CECA logotype',
      width: 880,
      height: 299
    }
  }
]

export default function LobbyPage () {
  const t = useTranslations('LobbyPage')

  return (
    <div>
      <div className='relative overflow-hidden h-dvh -mt-20'>
        <Shell className='h-full relative z-10'>
          <PageHeader
            className='max-w-4xl gap-4 sm:gap-5 lg:gap-6'
            withPadding
          >
            <PageHeaderHeading
              className='animate-fade-up text-white'
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
              size='lg'
            >
              {t('pageHeaderTitle')}
            </PageHeaderHeading>
            <PageHeaderDescription
              className='animate-fade-up text-white'
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
              size='lg'
            >
              {t('pageHeaderDescription')}
            </PageHeaderDescription>
            <PageActions
              className='justify-start animate-fade-up'
              style={{ animationDelay: '0.4s', animationFillMode: 'both' }}
            >
              <CallToAction
                className='font-semibold uppercase'
                to='contact'
                size='lg'
              />
            </PageActions>
          </PageHeader>
        </Shell>
        <div className='absolute inset-0 overflow-hidden z-0'>
          <video
            className='w-full h-full object-cover relative'
            width={1920}
            height={1080}
            controls={false}
            autoPlay
            muted
            loop
            playsInline
            disablePictureInPicture
            controlsList='nodownload noplaybackrate'
          >
            <source src='/video/video-home.mp4' type='video/mp4' />
          </video>
          <div className='absolute inset-0 bg-black/5 z-10' />
        </div>
      </div>
      <Shell>
        <section className='pt-20 md:pt-36 pb-14 flex flex-col items-center gap-12'>
          <h2 className='max-w-6xl mx-auto heading text-center text-h2 text-balance'>
            {t('aboutUs')}
          </h2>
          <Button
            className='w-fit uppercase'
            asChild
            size='lg'
            variant='outline'
          >
            <Link href='#'>
              {t('aboutUsAction')}
              <ArrowRightIcon />
            </Link>
          </Button>
        </section>
      </Shell>
      <section className='border-y'>
        <div className='text-muted-foreground text-center font-medium uppercase text-sm pt-4'>
          {t('certifications')}
        </div>
        <div className='flex w-full'>
          <InfiniteMovingImages
            items={certification}
            speed='slow'
          />
        </div>
      </section>
    </div>
  )
}
