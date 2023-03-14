// ColorModeButton.stories.tsx
import React from 'react'
import { Meta } from '@storybook/react'
import { ColorModeButton } from './ColorModeButton'

export default {
  title: 'Components/Button',
  component: ColorModeButton
} as Meta

export const ColorMode = () => <ColorModeButton />
