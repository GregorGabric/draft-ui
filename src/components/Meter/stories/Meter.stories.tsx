import { Label } from '../../Label/src/Label'
import { Meter } from '../src/Meter'
import { type ComponentStory, type ComponentMeta } from '@storybook/react'

export default {
  title: 'Meter',
  component: Meter,
} as ComponentMeta<typeof Meter>

export const Default: ComponentStory<typeof Meter> = (props) => (
  <Meter
    value={props.value}
    minValue={props.minValue}
    maxValue={props.maxValue}
  >
    {({ percentage, valueText }) => (
      <>
        <Label>Meter Label</Label>
        <span>{valueText}</span>
        <div>
          <div style={{ width: percentage + '%' }} />
        </div>
      </>
    )}
  </Meter>
)

Default.argTypes = {
  minValue: { type: 'number' },
  maxValue: { type: 'number' },
  value: { type: 'number' },
}

Default.args = {
  value: 100,
  minValue: 50,
  maxValue: 150,
}
