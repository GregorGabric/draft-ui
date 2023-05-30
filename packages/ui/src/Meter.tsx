'use client'

import { type HTMLAttributes } from 'react'

import { Meter, type MeterProps } from 'react-aria-components'

import { cn } from '@/lib/utils'

const _Meter = ({ className, ...props }: MeterProps) => {
  return <Meter className={cn('w-full', className)} {...props} />
}

const _MeterTrack = ({
  className,
  children,
  ...props
}: HTMLAttributes<HTMLDivElement>) => {
  return (
    <div
      {...props}
      className={cn(
        'h-2 w-full overflow-hidden rounded bg-slate-200',
        className
      )}
    >
      {children}
    </div>
  )
}

export interface _MeterFilledTrackProps extends HTMLAttributes<HTMLDivElement> {
  percentage: number
}

const _MeterFilledTrack = ({
  className,
  children,
  percentage,
  ...props
}: _MeterFilledTrackProps) => {
  return children ? (
    <>children</>
  ) : (
    <div
      {...props}
      className={cn('h-full bg-black', className)}
      style={{ width: percentage + '%' }}
    />
  )
}

export {
  _Meter as Meter,
  _MeterTrack as MeterTrack,
  _MeterFilledTrack as MeterFilledTrack,
}
