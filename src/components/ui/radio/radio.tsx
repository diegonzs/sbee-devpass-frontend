import { cn } from '@/utils'
import { Radio, RadioProps } from '@nextui-org/radio'

const CustomRadio = (props: RadioProps) => {
  const { children, ...otherProps } = props

  return (
    <Radio
      {...otherProps}
      color="warning"
      classNames={{
        base: cn(
          'inline-flex m-0 bg-transparent items-center justify-between',
          'flex-row-reverse max-w-[300px] cursor-pointer rounded-xl gap-4 px-4 py-3 border border-black/10',
          // 'data-[selected=true]:border-primary',
        ),
      }}
    >
      {children}
    </Radio>
  )
}

export default CustomRadio
