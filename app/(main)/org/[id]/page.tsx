import OrgIdContents from '@/components/shared/org-components/org-id-page'
import H2 from '@/components/ui/h2'
import React from 'react'

const OrgIdPage = () => {
  return (
    <main className='p-2 space-y-4'>
        <H2 className='text-left border-b p-1'>
            Organisation Page
        </H2>
        <div className='w-full rounded-lg bg-secondary/50'>
          <OrgIdContents/>
        </div>
    </main>
  )
}

export default OrgIdPage