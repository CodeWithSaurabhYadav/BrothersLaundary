import React from 'react'

import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <div className="flex justify-center gap-4">
        <Link to="/auth/login" className='border border-3 p-3 bg-brand-color-default rounded-xl hover:bg-white ease-in w-[200px] text-center'>Login</Link>
        <Link to="/auth/register" className='border border-3 p-3 bg-brand-color-default rounded-xl hover:bg-white ease-in w-[200px] text-center'>Register</Link>
      </div>
    </div>
  )
}

export default Dashboard