import React from 'react'
import PageTitle from '../PageTitle'
import PageLayout from '../PageLayout'
import Conversations from '../widgets/Conversations'

const Dashboard: React.FC = () => {
  return (
    <div>
      <PageTitle title="Dashboard" />
      <PageLayout>
        <Conversations />
      </PageLayout>
    </div>
  )
}

export default Dashboard
