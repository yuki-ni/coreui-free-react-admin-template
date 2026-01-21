import React from 'react'
import { CWidgetStatsB, CWidgetStatsC, CWidgetStatsF, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilChartPie, cilPeople, cilSettings } from '@coreui/icons'

export default {
  title: 'Components/Widgets',
  component: CWidgetStatsB,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {
    color: {
      control: 'select',
      options: ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'],
    },
    value: { control: 'text' },
    title: { control: 'text' },
  },
}

export const AdjustableProgress = {
  args: {
    color: 'primary',
    title: 'Storage Usage',
    value: '75%',
  },
  render: (args) => (
    <CWidgetStatsB
      {...args}
      progress={{ color: args.color, value: 75 }}
      text="Monthly quota remaining"
    />
  ),
}

export const AdjustableIcon = {
  args: {
    color: 'info',
    title: 'Active Users',
    value: '1,250',
  },
  render: (args) => (
    <CWidgetStatsC
      {...args}
      icon={<CIcon icon={cilPeople} height={36} />}
      progress={{ color: args.color, value: 50 }}
    />
  ),
}

export const AdjustableSimple = {
  args: {
    color: 'warning',
    title: 'CPU Load',
    value: '25%',
  },
  render: (args) => (
    <CWidgetStatsF
      {...args}
      icon={<CIcon icon={cilChartPie} height={24} />}
    />
  ),
}