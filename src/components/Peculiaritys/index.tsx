import { PeculiaritysContainer } from './style'

interface IPeculiaritys {
  peculiaritys: string[]
}

export const Peculiaritys = ({ peculiaritys }: IPeculiaritys) => {
  return (
    <PeculiaritysContainer>
      {peculiaritys.map((peculiarity, index) => {
        return <span key={index}>{peculiarity}</span>
      })}
    </PeculiaritysContainer>
  )
}
