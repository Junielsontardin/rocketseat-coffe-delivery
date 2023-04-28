import { MapPin } from '@phosphor-icons/react'
import { Location } from './style'

export const LocationUser = () => {
  return (
    <Location>
      <MapPin width={16} height={20} weight="fill" />
      <span>Porto Alegre, RS</span>
    </Location>
  )
}
