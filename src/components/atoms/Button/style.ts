interface ButtonStyles {
  base: string
  red: string
  blue: string
  yellow: string
  sm: string
  md: string
  lg: string
}

export const buttonStyles: ButtonStyles = {
  base: `py-2 px-4 font-semibold rounded-lg shadow-md focus:outline-none`,
  red: `bg-red-500 text-white focus:ring-2 focus:ring-red-400 focus:ring-opacity-75`,
  blue: `bg-blue-500 text-white focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75`,
  yellow: `bg-yellow-500 text-white focus:ring-2 focus:ring-yellow-400 focus:ring-opacity-75`,
  sm: `py-1 px-2 text-sm`,
  md: `py-2 px-4 text-md`,
  lg: `py-3 px-6 text-lg`
}

export const buttonColorStyles = {
  red: buttonStyles.red,
  blue: buttonStyles.blue,
  yellow: buttonStyles.yellow
}

export const buttonSizeStyles = {
  sm: buttonStyles.sm,
  md: buttonStyles.md,
  lg: buttonStyles.lg
}
