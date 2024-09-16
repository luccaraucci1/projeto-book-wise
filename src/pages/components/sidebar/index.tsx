import { ChartLineUp, Binoculars, SignOut, SignIn, User } from 'phosphor-react'
import { SidebarContainer, SidebarItems, Item, LoginOrLogout } from './styles'
import Image from 'next/image'
import Logo from '../../../../public/images/Logo.svg'
import Link from 'next/link'

import { ProfileImage } from '../profile-image'
import { signOut, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'

interface SidebarProps {
  activePage: 'profile' | 'home' | 'explore'
}

export function Sidebar({ activePage }: SidebarProps) {
  const session = useSession()
  const router = useRouter()

  const userLogged = session.status === 'authenticated'

  async function handleSignOut() {
    await signOut()
  }

  async function handleRedirectToLogin() {
    await router.push('/login')
  }

  return (
    <SidebarContainer>
      <Image alt="Logo" width={132} src={Logo} />

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

      {userLogged ? (
        <LoginOrLogout logged={userLogged}>
          {session.data.user?.image && (
            <ProfileImage src={session.data.user?.image} width={32} />
          )}
          <span>{session.data.user?.name?.split(' ')[0]}</span>
          <SignOut color="#f75a68" size={22} onClick={handleSignOut} />
        </LoginOrLogout>
      ) : (
        <LoginOrLogout logged={userLogged} onClick={handleRedirectToLogin}>
          <span>Fazer login</span> <SignIn size={22} />
        </LoginOrLogout>
      )}
    </SidebarContainer>
  )
}
