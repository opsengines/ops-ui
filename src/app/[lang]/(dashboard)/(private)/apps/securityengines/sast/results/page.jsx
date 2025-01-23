import { Button } from '@mui/material'

import ResultsTable from '@/views/apps/securityplanengine/ResultsTable'

const SastResults = () => {
  return (
    <div>
      <h2 className='mb-5'>Scan Results</h2>
      <ResultsTable type='SAST' />
    </div>
  )
}

export default SastResults
