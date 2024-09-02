import { styled } from "../../../../stitches.config"

export const UserImage = {
  borderRadius: '100%',
}

export const ImageBorder = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  background: '$gradient-vertical',
  borderRadius: '$full',
  width: 'fit-content',
  padding: '2px',
})