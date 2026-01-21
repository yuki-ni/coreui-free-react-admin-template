import React from 'react'
import { CButton, CRow, CCol } from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell } from '@coreui/icons'

export default {
  title: 'Components/Buttons',
  component: CButton,
  decorators: [
    (Story) => (
      <div style={{ 
        display: 'flex', 
        justifyContent: 'center', 
        alignItems: 'center', 
        minHeight: '100vh',
        width: '100%' 
      }}>
        <div style={{ width: '100%', maxWidth: '800px' }}>
          <Story />
        </div>
      </div>
    ),
  ],
  argTypes: {
    size: {
      control: 'radio',
      options: ['small', 'medium', 'large'],
    },
    disabled: { control: 'boolean' },
    variant: {
      control: 'radio',
      options: [undefined, 'outline', 'ghost'],
    },
  },
}

export const NormalButtons = {
  args: {
    size: 'md',
    disabled: false,
  },
  render: (args) => (
    <CRow className="p-4">
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((color) => (
        <CCol xs="auto" key={color} className="mb-2">
          <CButton {...args} color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </CButton>
        </CCol>
      ))}
    </CRow>
  ),
}

export const ButtonsWithIcons = {
  args: {
    size: 'md',
  },
  render: (args) => (
    <CRow className="p-4">
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((color) => (
        <CCol xs="auto" key={color} className="mb-2">
          <CButton {...args} color={color}>
            <CIcon icon={cilBell} className="me-1" />
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </CButton>
        </CCol>
      ))}
    </CRow>
  ),
}

export const OutlineButtons = {
  args: {
    variant: 'outline',
  },
  render: (args) => (
    <CRow className="p-4">
      {['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'light', 'dark'].map((color) => (
        <CCol xs="auto" key={color} className="mb-2">
          <CButton {...args} color={color}>
            {color.charAt(0).toUpperCase() + color.slice(1)}
          </CButton>
        </CCol>
      ))}
    </CRow>
  ),
}