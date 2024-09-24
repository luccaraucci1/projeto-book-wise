import { LoginOverlay } from '@/pages/explore/styles'
import {
  Button,
  CloseModal,
  ModalContainer,
  ModalContent,
  ModalTitle,
} from './styles'
import { X } from 'phosphor-react'
import Image from 'next/image'
import { signIn } from 'next-auth/react'
import googleLogo from '../../../../public/images/login-logos/google-logo.png'
import githubLogo from '../../../../public/images/login-logos/github-logo.png'
import { SetStateAction } from 'react'

interface LoginModalProps {
  active: boolean
  setShowLoginModal: React.Dispatch<SetStateAction<boolean>>
}

export function LoginModal({ active, setShowLoginModal }: LoginModalProps) {
  async function handleSignIn(provider: string) {
    await signIn(provider, { callbackUrl: '/' })
  }

  if (!active) {
    return null
  }

  return (
    <>
      <LoginOverlay />
      <ModalContainer>
        <CloseModal>
          <X size={24} onClick={() => setShowLoginModal(false)} />
        </CloseModal>
        <ModalContent>
          <ModalTitle>
            <span>Faça login para deixar sua avaliação</span>
          </ModalTitle>
          <Button onClick={() => handleSignIn('google')}>
            <Image width={32} src={googleLogo} alt="Logo do Google" />
            <span>Entrar com o Google</span>
          </Button>
          <Button onClick={() => handleSignIn('github')}>
            <Image width={32} src={githubLogo} alt="Logo do Github" />
            <span>Entrar com o Github</span>
          </Button>
        </ModalContent>
      </ModalContainer>
    </>
  )
}
