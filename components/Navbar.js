"use client"

import { styled } from '../stitches.config'
import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { motion, LayoutGroup, AnimatePresence } from 'framer-motion'
import { useKBar } from 'kbar'

export default function Navbar() {
  const router = useRouter()
  const pages = [
    'About',
    'Articles',
    'Projects',
    // 'Talks',
    // 'Podcasts',
    // 'Investing',
    // 'Uses',
    // 'Reminder',
    'Contact',
  ]
  const [hovered, setHovered] = useState('')
  const { query } = useKBar()

  // No longer needed as we use Link for instant navigation

  return (
    <Header>
      <Link href="/" passHref>
        <ButtonLogo as="a">N</ButtonLogo>
      </Link>

      <Nav>
        <LayoutGroup>
          <List>
            {pages.map(page => {
              const path = `/${page.toLowerCase()}`
              const isHovered = hovered === page
              const isActive = router.pathname === path

              return (
                <ListItem key={page}>
                  <Link href={path} passHref>
                    <NavLink
                      as={motion.a}
                      onHoverStart={() => setHovered(page)}
                      onHoverEnd={() => setHovered('')}
                      whileHover={{ y: -2 }}
                      transition={{ duration: 0.2 }}
                      css={
                        isActive
                          ? {
                              color: '$primary',
                              fontWeight: 600,
                            }
                          : {}
                      }
                    >
                      <AnimatePresence>
                        {isHovered && (
                          <NavBackground
                            as={motion.div}
                            layoutId="navbar"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            transition={{ duration: 0.15 }}
                          />
                        )}
                      </AnimatePresence>
                      <NavText>{page}</NavText>
                    </NavLink>
                  </Link>
                </ListItem>
              )
            })}
          </List>
        </LayoutGroup>
      </Nav>

      <Aside>
        <ButtonHeader
          as="button"
          type="button"
          aria-label="Command"
          onClick={query.toggle}
          css={{ padding: '0 8px' }}
        >
          <Icon className="ri-command-line" />
        </ButtonHeader>
      </Aside>
    </Header>
  )
}

const Header = styled('header', {
  display: 'flex',
  alignItems: 'center',
  color: 'white',
  fontSize: '12px',
  minHeight: '59px',
  width: '100%',
  flexWrap: 'wrap',
  position: 'absolute',
  top: '0',
  zIndex: 3,
  marginTop: '13px',
  '@bp2': { marginTop: '0' },
})

const List = styled('ul', {
  margin: '0',
  padding: '0',
  listStyle: 'none',
  display: 'inline-flex',
  position: 'relative',
  top: '5px',
  '@bp1': { justifyContent: 'space-around' },
})

const ListItem = styled('li', {
  position: 'relative',
})

const ButtonHeader = styled('div', {
  appearance: 'none',
  background: 'transparent',
  border: 'none',
  borderRadius: '$borderRadius',
  color: 'white',
  cursor: 'pointer',
  height: '34px',
  padding: '0 10px',
  transition: 'background $duration ease-in-out',
  '&:hover': { background: '$hover' },
})

const Icon = styled('i', {
  fontSize: '24px',
  lineHeight: '32px',
})

const ButtonLogo = styled(ButtonHeader, {
  fontWeight: 700,
  fontSize: '32px',
  textDecoration: 'none',
  marginLeft: '12px',
  fontFamily: '$heading',
})

const Nav = styled('nav', {
  textAlign: 'center',
  flex: 1,
  order: 2,
  flexBasis: '100%',
  '@bp2': { order: 0, flexBasis: 'initial' },
  '@bp3': { overflowX: 'scroll', overflowY: 'hidden' },
})

const Aside = styled('div', {
  display: 'flex',
  alignItems: 'center',
  paddingRight: '12px',
  marginLeft: 'auto',
})

const NavLink = styled('a', {
  color: '$secondary',
  cursor: 'pointer',
  display: 'block',
  fontSize: '12px',
  fontWeight: 500,
  letterSpacing: '1.2px',
  padding: '20px',
  textDecoration: 'none !important',
  textTransform: 'uppercase',
  position: 'relative',
  transition: 'color $duration ease-in-out',
  '&:hover': {
    color: '$primary',
  },
})

const NavText = styled('span', {
  position: 'relative',
  zIndex: 2,
})

const NavBackground = styled('div', {
  position: 'absolute',
  top: '2px',
  left: '2px',
  right: '2px',
  bottom: '2px',
  background: '$hover',
  borderRadius: '8px',
  zIndex: 1,
  opacity: 0.9,
})
