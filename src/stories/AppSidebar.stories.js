import React from 'react'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import { MemoryRouter } from 'react-router-dom'
import AppSidebar from '../components/AppSidebar'

const sidebarReducer = (state = { sidebarShow: true, sidebarUnfoldable: false }, action) => {
  switch (action.type) {
    case 'set':
      return { ...state, ...action }
    default:
      return state
  }
}

const defaultStore = configureStore({ reducer: sidebarReducer })

export default {
  title: 'Components/AppSidebar',
  component: AppSidebar,
  decorators: [
    (Story, { args }) => (
      <Provider store={defaultStore}>
        <MemoryRouter>
          <Story {...args} />
        </MemoryRouter>
      </Provider>
    ),
  ],
}

export const Default = {
  args: {},
}

export const Collapsed = {
  args: {},
  play: () => {
    defaultStore.dispatch({ type: 'set', sidebarUnfoldable: true })
  },
}

export const Hidden = {
  args: {},
  play: () => {
    defaultStore.dispatch({ type: 'set', sidebarShow: false })
  },
}
