import { GlobalStyleProps, mode } from '@chakra-ui/theme-tools'
import { extendTheme } from '@chakra-ui/react'

const styles = {
  global: (props: GlobalStyleProps) => ({
    body: {
      bg: mode('#ffffff', '#1f2937')(props),
      fontSize: '14px',
      fontWeight: 600
    }
  })
}

const fonts = {
  body: `'Toss Product Sans'`
}

const fontSizes = {
  xs: '12px',
  sm: '14px',
  md: '16px',
  lg: '18px',
  xl: '20px',
  '2xl': '24px',
  '3xl': '28px',
  '4xl': '36px',
  '5xl': '48px',
  '6xl': '64px'
}

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: true
}

const theme = extendTheme({ config, styles, fonts, fontSizes })
export default theme
