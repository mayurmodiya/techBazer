import { Loader2 } from 'lucide-react'
import React from 'react'

const DashboardLoading = () => {
  return (
    <div className="w-full h-full flex items-center justify-center m-2 gap-4">
    <Loader2 size={50} className="animate-spin" />
    <p>Please wait loading dashboard page...</p>
  </div>
  )
}

export default DashboardLoading