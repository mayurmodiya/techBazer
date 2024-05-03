'use client'
import ProductQuickViewModal from '@/components/modals/ProductQuickView'
import { useProductQuickViewStore } from '@/store/productQuickViewStore'
import React from 'react'

const ModalProvider = () => {
  return (
    <div>
        <ProductQuickViewModal />
    </div>
  )
}

export default ModalProvider