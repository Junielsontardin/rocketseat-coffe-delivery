import styled from 'styled-components'

export const BenefitsContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  gap: 1.25rem 2.5rem;
`

export const Benefit = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  span {
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 14px;
    color: ${(props) => props.theme['gray-600']};
  }
`

const COLORS_BACKGROUND_ICON = {
  'yellow-700': 'yellow-700',
  'yellow-500': 'yellow-500',
  'purple-500': 'purple-500',
  'gray-600': 'gray-600',
} as const

interface BackgroundColor {
  color: keyof typeof COLORS_BACKGROUND_ICON
}

export const BackgroundIcon = styled.div<BackgroundColor>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 2rem;
  height: 2rem;
  border-radius: 100%;

  background-color: ${(props) =>
    props.theme[COLORS_BACKGROUND_ICON[props.color]]};
  color: ${(props) => props.theme['white-300']};
`
