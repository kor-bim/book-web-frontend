import React from 'react'
import { BaseTemplateTypes } from '@/components/templates/BaseTemplate'
import { Box } from '@chakra-ui/react'

export const BaseTemplate: React.FC<BaseTemplateTypes> = ({ children }) => {
  return (
    <Box w={'100%'} h={'100%'} minW={'1200px'}>
      {children}
    </Box>
  )
}
