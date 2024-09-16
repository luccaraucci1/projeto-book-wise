import { ImageBorder, UserImage } from './style'
import Image from 'next/image'

import eu from '../../../../public/images/eu.jpg'

interface ProfileImageProps {
  width: number
  src: string
}

export function ProfileImage({ width, src }: ProfileImageProps) {
  return (
    <ImageBorder>
      <Image
        width={width}
        height={width}
        src={src}
        alt="Imagem do usuário"
        style={UserImage}
      />
    </ImageBorder>
  )
}
