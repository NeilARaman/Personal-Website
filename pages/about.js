import { styled } from '../stitches.config'
import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import { parseISO, format, intervalToDuration } from 'date-fns'
import Base from '../layouts/Base'
import { ButtonPrimary } from '../components/ButtonPrimary'
import Toast from '../components/Toast'
import items from '../data/about'
import dynamic from 'next/dynamic'
import profilePic from '../public/static/images/Water-Profile-Photo.jpg'

const LottieIcon = dynamic(() => import('../components/LottieIcon'), { ssr: false })
import downloadIcon from '../public/static/icons/download.json'

const CopyBioClient = ({ description, setToastTitle, setToastDescription, setShowToast }) => {
  const copyBio = e => {
    e.preventDefault()
    if (typeof window !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(description)
      setToastTitle('Copied :D')
      setToastDescription('You can now paste it anywhere.')
      setShowToast(true)
    }
  }

  return (
    <ButtonPrimary as="button" onClick={copyBio}>
      Copy Bio
    </ButtonPrimary>
  )
}

const DynamicCopyBio = dynamic(() => Promise.resolve(CopyBioClient), { ssr: false })

export async function getStaticProps() {
  const meta = {
    title: 'About // Neil Raman',
    description: [
      "Neil Raman is a sophomore at Carnegie Mellon studying Information Systems and Economics.",
      "He has interests in computational biology/chemistry, applied AI/ML in healthcare, and likes to research foundational models in robotics, driverless cars, and space exploration.",
      "He is currently building the best entrepreneurship environment at CMU through Foundry and scouting for impactful startups via Mangusta Capital."
    ].join(' '),
    tagline: 'Build. Learn. Innovate.',
    image: '/static/images/about-bw.jpg',
    primaryColor: 'pink',
    secondaryColor: 'purple',
  }

  return { props: meta }
}

function About(props) {
  const { title, description, image } = props
  const [toastTitle, setToastTitle] = React.useState('')
  const [toastDescription, setToastDescription] = React.useState('')
  const [showToast, setShowToast] = React.useState(false)
  const [isClient, setIsClient] = React.useState(false)
  const downloadRef = React.useRef()

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  const renderIntro = () => {
    return (
      <Container>
        <Section>
          <ImageWrapper>
            <Image
              alt="Neil Raman Profile Picture"
              src={profilePic}
              width="470"
              height="470"
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAQAAAAECAIAAAAmkwkpAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAP0lEQVQImQE0AMv/AFBQUJKSkqmpqaOjowCurq7v7+/Jycm5ubkA////jIyMn5+fg4ODADAwMD09PWlpaQAAAApRGnEHblMWAAAAAElFTkSuQmCC"
              priority
              sizes="(max-width: 768px) 280px, 470px"
              quality={85}
              loading="eager"
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </ImageWrapper>
        </Section>
        <Section>
          <Paragraph
            css={{
              marginTop: '16px',
              '@bp2': { marginTop: '-6px' },
            }}
          >
            <strong>Hey, I&apos;m Neil!</strong>{' '}
            I&apos;m a sophomore at Carnegie Mellon studying Information Systems and Economics. 
            I have a bunch of different interests, which range from computational biology/chemistry, 
            applied AI/ML in healthcare, and researching foundational models in robotics, driverless cars, and space exploration.
          </Paragraph>
          <Paragraph>
            Currently, I&apos;m building the best entrepreneurship environment at CMU @ Foundry, 
            scouting for technically interesting and impactful startups @ Mangusta, 
            and building projects + writing in my free time.
          </Paragraph>
        </Section>
      </Container>
    )
  }

  const renderBio = () => {
    const btnStyle = { display: 'inline-flex', justifyContent: 'center', alignItems: 'center' }
    const iconStyle = { width: 24, height: 24, marginRight: 8 }

    return (
      <div>
        <p>
          This is made for journalists, podcast hosts, and event organizers to
          copy-and-paste.
        </p>
        <blockquote>
          <p>{description}</p>
        </blockquote>
        <ButtonsContainer>
          <DynamicCopyBio 
            description={description}
            setToastTitle={setToastTitle}
            setToastDescription={setToastDescription}
            setShowToast={setShowToast}
          />
          <span style={{ margin: '0 20px 0 10px' }}>•</span>
          <ButtonPrimary
            as="a"
            download="neil-raman-headshot.jpg"
            role="button"
            href="/static/images/Water-Profile-Photo.jpg"
            style={btnStyle}
            onClick={downloadHeadshot}
            onMouseEnter={() => downloadRef.current?.play()}
            onMouseLeave={() => downloadRef.current?.stop()}
          >
            <LottieIcon lottieRef={downloadRef} style={iconStyle} animationData={downloadIcon} loop={false} autoplay={false} />
            Download Headshot
          </ButtonPrimary>
        </ButtonsContainer>
      </div>
    )
  }

  const renderAll = () => {
    // Reverse chronological (most recent first)
    const sortedItems = [...items].sort((a, b) =>
      new Date(b.startDate) - new Date(a.startDate)
    )

    return sortedItems.map((item, index) => {
      return (
        <div style={{ marginBottom: 40 }} key={index}>
          <h3>{item.jobTitle}</h3>
          <p style={{ margin: 0 }}>
            <a href={item.companyUrl} target="_blank" rel="noopener noreferrer">
              {item.company}
            </a>
            <span> • {item.location}</span>
          </p>
          <p style={{ margin: 0 }} suppressHydrationWarning>
            <span>{format(parseISO(item.startDate), 'LLL yyyy')}</span>
            <span> – </span>
            <span>
              {item.endDate
                ? format(parseISO(item.endDate), 'LLL yyyy')
                : 'Present'}
            </span>
            <span> • </span>
            <span>{getDuration(item.startDate, item.endDate)}</span>
          </p>
        </div>
      )
    })
  }

  const getDuration = (startDate, endDate) => {
    if (!isClient) {
      return '...' // Placeholder during SSR
    }

    const durationObj = intervalToDuration({
      start: parseISO(startDate),
      end: endDate ? parseISO(endDate) : new Date(),
    })

    const years = Number.isFinite(durationObj.years) ? durationObj.years : 0
    const monthsRaw = Number.isFinite(durationObj.months) ? durationObj.months : 0

    let durationStr = ''

    if (years > 1) {
      durationStr = `${years} yrs `
    } else if (years === 1) {
      durationStr = `${years} yr `
    }

    // Ensure minimum visible duration of 1 month for experiences under 1 month
    const months = years === 0 && monthsRaw === 0 ? 1 : monthsRaw
    durationStr += `${months} ${months === 1 ? 'mo' : 'mos'}`

    return durationStr
  }

  const downloadHeadshot = (e) => {
    e.preventDefault()
    setToastTitle('Downloading...')
    setToastDescription('You can now add this photo to your fancy site.')
    setShowToast(true)
    
    // Only perform DOM operations on the client
    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      const link = document.createElement('a')
      link.href = '/static/images/Water-Profile-Photo.jpg'
      link.download = 'neil-raman-headshot.jpg'
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <>
      <Head>
        <meta content={title} property="og:title" />
        <meta content={description} name="description" />
        <meta content={description} property="og:description" />
        <meta content="https://neilraman.com/about" property="og:url" />
        <meta content={`https://neilraman.com${image}`} property="og:image" />
        <meta content={title} name="twitter:title" />
        <meta content={description} name="twitter:description" />
        <meta content={`https://neilraman.com${image}`} name="twitter:image" />
      </Head>
      <div>
        {renderIntro()}

        <h2>Bio</h2>
        {renderBio()}

        <h2>Career</h2>
        {renderAll()}

        <Toast
          title={toastTitle}
          description={toastDescription}
          isSuccess={true}
          showToast={showToast}
          setShowToast={setShowToast}
        />
      </div>
    </>
  )
}

const Container = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  '@bp2': { flexDirection: 'row' },
})

const Paragraph = styled('p', {
  '@bp2': { margin: '15px 0' },
})

const ButtonsContainer = styled('div', {
  display: 'flex',
  alignItems: 'center',
})

const ImageWrapper = styled('div', {
  width: '100%',
  maxWidth: '470px',
  height: '470px',
  overflow: 'hidden',
  borderRadius: '8px',
  position: 'relative',
  flexShrink: 0,
  '& img': {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
  },
  '@media (max-width: 768px)': {
    height: '280px',
    maxWidth: '280px',
  },
})

const Section = styled('div', {
  marginTop: '0px',
  width: 'auto',
  '@bp2': { width: '48%' },
})

About.Layout = Base

export default About
