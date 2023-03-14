import { Image, Link, useColorModeValue } from '@chakra-ui/react'
import NextLink from 'next/link'

export const Logo = () => {
  const logoImgSrc = useColorModeValue('/logo.light.png', '/logo.dark.png')

  return (
    <Link as={NextLink} href={'/'}>
      <Image w={150} src={logoImgSrc} alt={'로고'} />
    </Link>
  )
}
