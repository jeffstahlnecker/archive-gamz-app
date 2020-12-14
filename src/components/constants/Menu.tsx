import React from 'react'
import {
  IconCalendar,
  IconChartBar,
  IconHome,
  IconInbox,
  IconUsers,
  IconChat,
} from '../Icons'

export const MainMenu = [
  {
    title: 'Dashboard',
    route: '/',
    icon: <IconHome />,
  },
  {
    title: 'Conversations',
    route: '/conversations',
    icon: <IconChat />,
  },
  {
    title: 'Customers',
    route: '/customers',
    icon: <IconUsers />,
  },
  {
    title: 'Calendar',
    route: '/calendar',
    icon: <IconCalendar />,
  },
  {
    title: 'Documents',
    route: '/documents',
    icon: <IconInbox />,
  },
  {
    title: 'Reports',
    route: '/reports',
    icon: <IconChartBar />,
  },
]

export const Dropdown = [{ example: 'example' }]
