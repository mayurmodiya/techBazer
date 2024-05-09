'use client'
import MobileSearch from '@/components/modals/MobileSearch'
import ProductQuickViewModal from '@/components/modals/ProductQuickView'
import { useProductQuickViewStore } from '@/store/productQuickViewStore'
import React from 'react'

const ModalProvider = () => {
  return (
    <div>
        <ProductQuickViewModal />
        <MobileSearch />
    </div>
  )
}

export default ModalProvider