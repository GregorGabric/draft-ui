import { DateField, DateInput, DateInputContent, DateSegment } from 'ui'

import { type Meta, type StoryObj } from '@storybook/react'

const meta: Meta<typeof DateInputContent> = {
  title: 'DateInput',
  component: DateInputContent,
}

export default meta

export const Default: StoryObj<typeof DateInputContent> = {
  argTypes: {
    validationState: {
      type: 'string',
      control: 'radio',
      options: ['valid', 'invalid'],
    },
    size: {
      type: 'string',
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
    },
  },
  args: {
    validationState: 'valid',
    size: 'md',
  },
  render: (props) => (
    <DateField>
      <DateInputContent {...props}>
        <DateInput>{(segment) => <DateSegment segment={segment} />}</DateInput>
      </DateInputContent>
    </DateField>
  ),
}
