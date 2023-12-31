import { OptReactCompProps } from '@/@types/components'
import { cn } from '@/utils/cn'

const SectionContent = ({
  children,
  className,
  ...props
}: OptReactCompProps<HTMLDivElement>) => (
  <div
    className={cn(
      'grid w-full border-0 bg-inherit p-6 pt-0 text-justify indent-2 text-base font-normal text-white shadow-none sm:text-lg md:min-h-[200px] md:grid-rows-1 md:gap-y-16 lg:grid lg:grid-cols-section-content',
      className
    )}
    {...props}
  >
    {children}
  </div>
)

export { SectionContent }
