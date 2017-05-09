import palx from 'palx'
import { flattenColors } from './logic/util'

// Set your base color, and get a full color set to match your shorthand properties.
// Then, make any final color adjustments you might want.

const blue = '#07c'
export const colors = flattenColors(palx(blue))
colors.white = '#fff'

// Set your classname output here.
export const classNameOutput = 'monolithic' // lite, atomic, monolithic

export const breakpoints = [
  '(min-width:40em)',
  '(min-width:52em)',
  '(min-width:64em)'
].map(w => `@media screen and ${w}`)

export const scale = [
  0, 8, 16, 32, 64
]

export const typeScale = [
  64, 48, 32, 24, 16, 14, 12
]

export const borderRadius = 2
export const bold = 700

const defaultConfig = {
  breakpoints,
  scale,
  typeScale,
  colors,
  borderRadius,
  bold
}

export default defaultConfig
