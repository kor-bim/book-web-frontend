import { Box, Container, HStack } from '@chakra-ui/react'
import { HeaderTypes } from '@/components/organisms/Header'
import { Logo } from '@/components/atoms/Logo'
import { NavHeader } from '@/components/molecules/NavHeader'
import React from 'react'

export const Header: React.FC<HeaderTypes> = ({ isAdmin }) => {
  return (
    <Box w={'100%'} mt={5}>
      <Container maxW={'container.xl'}>
        <HStack justifyContent={'space-between'} alignItems={'center'}>
          <Logo />
          <NavHeader isAdmin={isAdmin} />
        </HStack>
      </Container>
    </Box>
  )
}
