import React from 'react'
import { IconButton, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export const ColorModeButton: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  return (
    <IconButton
      onClick={toggleColorMode}
      aria-label="Color Mode Button"
      icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
    />
  )
}
