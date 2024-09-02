import { ChartLineUp, Binoculars, SignOut, User } from 'phosphor-react'
import { SidebarContainer, SidebarItems, Item, LoginOrLogout } from './styles'
import Image from 'next/image'
import Logo from '../../../../public/images/Logo.svg'
import Link from 'next/link'

import { ProfileImage } from '../profile-image'

interface SidebarProps {
  activePage: 'profile' | 'home' | 'explore'
}


export function Sidebar({activePage} : SidebarProps) {
  return (
    <SidebarContainer>
      <Image alt="Logo" src={Logo} />

      <SidebarItems>
        <Link href="/">
          <Item active={activePage === 'home'}>
            <ChartLineUp size={22} /> <span>Início</span>
          </Item>
        </Link>
        <Link href="/explore">
          <Item active={activePage === 'explore'}>
            <Binoculars size={22} /> <span>Explorar</span>
          </Item>
        </Link>
        <Link href="/profile">
          <Item active={activePage === 'profile'}>
            <User size={22} /> <span>Perfil</span>
          </Item>
        </Link>
      </SidebarItems>

      <LoginOrLogout>
        {/* }<span>Fazer login</span> <SignIn size={22} />{ */}
        <ProfileImage width={32} />
        <span>Lucca</span>
        <SignOut color="#f75a68" size={22} />
      </LoginOrLogout>
    </SidebarContainer>
  )
}
