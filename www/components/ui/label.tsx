import { cva } from 'class-variance-authority'
import { type ClassValue } from 'class-variance-authority/dist/types'
import { Label, type LabelProps } from 'react-aria-components'

export interface _LabelProps extends Omit<LabelProps, 'className'> {
  className?: ClassValue
}

const labelVariants = cva(
  'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'
)

const _Label = ({ className, ...props }: _LabelProps) => {
  return <Label className={labelVariants({ className })} {...props} />
}

export { _Label as Label }
