import { Container } from '../styles'
import {
  LoginImage,
  LoginForm,
  Button,
  LoginButtons,
  LoginTitle,
  LoginFormContainer,
} from './styles'
import Image from 'next/image'
import Logo from '../../../public/images/Logo.svg'
import googleLogo from '../../../public/images/login-logos/google-logo.png'
import githubLogo from '../../../public/images/login-logos/github-logo.png'
import rocketLogo from '../../../public/images/login-logos/rocket-logo.png'
import { signIn, useSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import Link from 'next/link'

export default function Login() {
  const router = useRouter()
  const session = useSession()

  async function handleSignIn(provider: string) {
    await signIn(provider, { callbackUrl: '/' })
  }

  useEffect(() => {
    const redirectUserIfLogged = async () => {
      if (session.status === 'authenticated') {
        await router.push('/')
      }
    }
    redirectUserIfLogged()
  })

  return (
    <Container>
      <LoginImage>
        <Image src={Logo} alt="Imagem de logo da Book Wise" />
      </LoginImage>
      <LoginFormContainer>
        <LoginForm>
          <LoginTitle>
            <h1>Boas vindas!</h1>
            <span>Faça seu login ou acesse como visitante.</span>
          </LoginTitle>
          <LoginButtons>
            <Button onClick={() => handleSignIn('google')}>
              <Image width={32} src={googleLogo} alt="Logo do Google" />
              <span>Entrar com o Google</span>
            </Button>
            <Button onClick={() => handleSignIn('github')}>
              <Image width={32} src={githubLogo} alt="Logo do Github" />
              <span>Entrar com o Github</span>
            </Button>
            <Link href="/">
              <Button>
                <Image width={32} src={rocketLogo} alt="Logo Rocket" />
                <span>Entrar como visitante</span>
              </Button>
            </Link>
          </LoginButtons>
        </LoginForm>
      </LoginFormContainer>
    </Container>
  )
}
