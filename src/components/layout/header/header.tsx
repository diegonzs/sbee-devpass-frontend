'use client'
import { routes } from '@/routes'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from '@nextui-org/navbar'
import logo from '@/assets/images/png/sbee-logo.png'
import Image from 'next/image'
import Link from 'next/link'
import { Typography } from '@/components/ui'
import { Web3Button } from '@/components/widgets'

const LOGO_WIDTH = 86
const LOGO_HEIGHT = 56

interface NavigationItemProps {
  href: string
  children: React.ReactNode
}

const NavigationItem = ({ href, children }: NavigationItemProps) => {
  return (
    <NavbarItem className="flex">
      <Link href={href} className="px-[14px] py-2">
        <Typography className="text-base font-bold text-co-text-1">
          {children}
        </Typography>
      </Link>
    </NavbarItem>
  )
}

const Header = () => {
  return (
    <Navbar
      position="static"
      classNames={{
        base: ['bg-[#FAF6D8]'],
        wrapper: ['h-[76px] px-10 max-w-[1440px]'],
      }}
    >
      <NavbarBrand>
        <Link href={routes.home}>
          <Image
            className="absolute top-4"
            src={logo}
            alt="sbee logo"
            width={LOGO_WIDTH}
            height={LOGO_HEIGHT}
          />
        </Link>
      </NavbarBrand>
      <NavbarContent className="flex gap-2" justify="center">
        <NavigationItem href={routes.projects}>Beegen</NavigationItem>
        <NavigationItem href={routes.home}>FAQs</NavigationItem>
        <NavigationItem href={routes.home}>About</NavigationItem>
        <NavigationItem href={routes.home}>Contact</NavigationItem>
      </NavbarContent>
      <NavbarContent justify="end">
        <Web3Button />
      </NavbarContent>
    </Navbar>
  )
}

export default Header
