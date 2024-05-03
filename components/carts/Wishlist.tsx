import { Heart } from 'lucide-react'
import React from 'react'
import { Badge } from '../ui/badge'

const Wishlist = () => {
  return (
    <div className='flex items-center gap-2'>
        <Heart size={25}/>
        <p>Wishlist</p>
    </div>
  )
}

export default Wishlist