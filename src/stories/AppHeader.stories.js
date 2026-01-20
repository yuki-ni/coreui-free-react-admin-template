import React from 'react'
import { Provider } from 'react-redux'
import { configureStore, createSlice } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import AppHeader from '../components/AppHeader'
import AppSidebar from '../components/AppSidebar'

const sidebarSlice = createSlice({
  name: 'sidebar',
  initialState: { sidebarShow: true, sidebarUnfoldable: false },
  reducers: {
    set: (state, action) => ({ ...state, ...action.payload }),
  },
})

const createStore = (preloadedState) =>
  configureStore({ reducer: sidebarSlice.reducer, preloadedState })

export default {
  title: 'Components/AppHeader',
  component: AppHeader,
  argTypes: {
    initialColorMode: {
      control: { type: 'select' },
      options: ['light', 'dark', 'auto'],
      description: 'Initial color mode for the header',
    },
  },
  decorators: [
    (Story, { loaded }) => (
      <Provider store={loaded.store}>
        <MemoryRouter>
          <div style={{ display: 'flex', minHeight: '100vh' }}>
            <AppSidebar />
            <div style={{ flex: 1 }}>
              <Story />
            </div>
          </div>
        </MemoryRouter>
      </Provider>
    ),
  ],
}

export const Default = {
  loaders: [async () => ({ store: createStore({ sidebarShow: true, sidebarUnfoldable: true }) })],
  args: { initialColorMode: 'light' },
}

export const CollapsedSidebar = {
  loaders: [async () => ({ store: createStore({ sidebarShow: false, sidebarUnfoldable: false }) })],
  args: { initialColorMode: 'light' },
}

export const DarkModeHeader = {
  loaders: [async () => ({ store: createStore({ sidebarShow: true, sidebarUnfoldable: true }) })],
  args: { initialColorMode: 'dark' },
  play: async ({ canvasElement }) => {
    const { userEvent, within } = await import('@storybook/testing-library')
    const canvas = within(canvasElement)

    const delay = (ms) => new Promise((res) => setTimeout(res, ms))

    const colorModeButton = canvasElement.querySelector('[aria-label="Toggle color mode"]')
    if (colorModeButton) {
      await userEvent.click(colorModeButton)
      await delay(1000)
    }

    const darkOption = await canvas.getByText(/dark/i)
    if (darkOption) {
      await userEvent.click(darkOption)
      await delay(1000)
    }
  },
}
