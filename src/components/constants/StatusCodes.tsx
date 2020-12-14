import React from 'react'

// Priority Badges

const LowPriority: React.FC = () => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
      Low
    </span>
  )
}

const MediumPriority: React.FC = () => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-800">
      Medium
    </span>
  )
}

const HighPriority: React.FC = () => {
  return (
    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800">
      High
    </span>
  )
}

// Code Keys

export const priorities = [
  <LowPriority />,
  <MediumPriority />,
  <HighPriority />,
]

export const status = [
  'Waiting for Customer',
  'Waiting for Support',
  'Blocked by Development',
  'Closed',
]
