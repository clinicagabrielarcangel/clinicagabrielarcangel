// import Link from 'next/link'
import { useTranslations } from 'next-intl'
// import { siteConfig } from '@/config/site'
// import { Badge } from '@/components/ui/badge'
// import { CallToAction } from '@/components/call-to-action'
// import { GitHubIcon } from '@/components/icons'
import {
  // PageActions,
  PageHeader,
  PageHeaderDescription,
  PageHeaderHeading
} from '@/components/page-header'
import { Shell } from '@/components/shell'

export default function LobbyPage () {
  const t = useTranslations('LobbyPage')

  return (
    <div className='relative overflow-hidden h-dvh -mt-20'>
      <Shell className='h-full relative z-10'>
        <PageHeader
          className='max-w-4xl gap-4 sm:gap-5 lg:gap-6'
          withPadding
        >
          {/* <Link
            href={siteConfig.links.github}
            target='_blank'
            rel='noreferrer'
            className='animate-fade-up'
            style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
          >
            <Badge
              className='px-3.5 py-1.5 gap-x-2 rounded-full'
              variant='secondary'
            >
              <GitHubIcon className='size-3.5' aria-hidden />
              {t('pageHeaderLabel')}
            </Badge>
          </Link> */}
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
        <div className='absolute inset-0 bg-black/25 z-10' />
      </div>
    </div>
  )
}
