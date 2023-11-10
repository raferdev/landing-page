import { IllustrationProps, ReactChildrenProps } from '@/@types/components'

import { AnimationBacklight } from './animations'

const Container = ({ children }: ReactChildrenProps) => (
  <div className="flex flex-col items-center gap-16 md:grid md:grid-cols-section-1 md:gap-0">
    {children}
  </div>
)

const Illustration = ({
  children,
  color_big,
  color_small,
}: IllustrationProps) => (
  <div className="relative flex justify-center">
    <AnimationBacklight color_small={color_small} color_big={color_big} />
    {children}
  </div>
)

const Description = ({ children }: ReactChildrenProps) => (
  <div className=" pl-4 pr-24">{children}</div>
)

const Content = {
  Container,
  Illustration,
  Description,
}

export { Content }
