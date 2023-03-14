import React from 'react'
import { NavHeaderTypes } from '@/components/molecules/NavHeader'
import { HStack } from '@chakra-ui/react'
import NextLink from 'next/link'
import { Link } from '@chakra-ui/react'
import { ColorModeButton } from '@/components/atoms/Button'

export const NavHeader: React.FC<NavHeaderTypes> = ({ isAdmin }) => {
  return (
    <HStack gap={5}>
      {isAdmin && (
        <Link as={NextLink} href={'/admin'} color="gray.500" _hover={{ color: 'gray.500' }}>
          관리자
        </Link>
      )}
      <Link as={NextLink} href={'/login'} color="gray.500" _hover={{ color: 'gray.500' }}>
        로그인
      </Link>
      <Link as={NextLink} href={'/register'} color="gray.500" _hover={{ color: 'gray.500' }}>
        회원가입
      </Link>
      <ColorModeButton />
    </HStack>
  )
}
