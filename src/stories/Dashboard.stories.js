import React from 'react'
import { MemoryRouter } from 'react-router-dom'
import Dashboard from '../views/dashboard/Dashboard'
import '@coreui/coreui/dist/css/coreui.min.css'

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
  parameters: {
    layout: 'fullscreen',
  },
}

const DefaultTemplate = (args) => (
  <MemoryRouter>
    <div
      style={{
        padding: args.padding,
        maxWidth: args.maxWidth,
        margin: args.center ? '0 auto' : '0',
        minHeight: '100vh',
      }}
    >
      <Dashboard />
    </div>
  </MemoryRouter>
)

export const Default = DefaultTemplate.bind({})
Default.args = {
  padding: 16,
  maxWidth: '100%',
  center: false,
}
Default.argTypes = {
  padding: {
    control: { type: 'range', min: 0, max: 40, step: 4 },
  },
  maxWidth: {
    control: 'select',
    options: ['100%', '1200px', '992px'],
  },
  center: {
    control: 'boolean',
  },
}

const MobileTemplate = (args) => (
  <MemoryRouter>
    <div
      className={args.background === 'dark' ? 'bg-dark text-white' : 'bg-light'}
      style={{
        padding: args.padding,
        minHeight: '100vh',
        border: args.showBorder ? '3px dashed #6c757d' : 'none',
      }}
    >
      <Dashboard />
    </div>
  </MemoryRouter>
)

export const MobileView = MobileTemplate.bind({})
MobileView.args = {
  padding: 12,
  background: 'light',
  showBorder: false,
}
MobileView.argTypes = {
  padding: {
    control: { type: 'range', min: 0, max: 32, step: 4 },
  },
  background: {
    control: 'radio',
    options: ['light', 'dark'],
  },
  showBorder: {
    control: 'boolean',
  },
}
MobileView.parameters = {
  viewport: {
    defaultViewport: 'mobile1',
  },
}

const PlayTemplate = (args) => (
  <MemoryRouter>
    <div style={{ padding: args.padding, minHeight: '100vh' }}>
      <Dashboard />
    </div>
  </MemoryRouter>
)

export const WithPlay = PlayTemplate.bind({})
WithPlay.args = {
  padding: 16,
  delay: 800,
  autoClick: true,
}
WithPlay.argTypes = {
  padding: {
    control: { type: 'range', min: 0, max: 40, step: 4 },
  },
  delay: {
    control: { type: 'range', min: 200, max: 2000, step: 200 },
  },
  autoClick: {
    control: 'boolean',
  },
}
WithPlay.play = async ({ canvasElement, args }) => {
  if (!args.autoClick) return

  await new Promise((r) => setTimeout(r, args.delay))

  const buttons = canvasElement.querySelectorAll('button')
  if (buttons.length > 0) {
    buttons[0].click()
  }
}
