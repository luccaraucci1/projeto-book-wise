import { ImageBorder } from "./style";
import Image from 'next/image'
import {UserImage} from './style'
import eu from '../../../../public/images/eu.jpg'

interface ProfileImageProps{
  width: number
}

export function ProfileImage({width}: ProfileImageProps){
  return(
    <ImageBorder>
        <Image width={width} src={eu} alt="Imagem do usuário" style={UserImage} />
    </ImageBorder>
  )
}