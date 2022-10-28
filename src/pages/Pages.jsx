import React from 'react'
import Annu from '../components/announcement/Annu'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'
import NewArrivals from '../components/newarrivals/NewArrivals'
import Shop from '../components/shop/Shop'
import TopCate from '../components/top/TopCate'
import Wrapper from '../components/wrapper/Wrapper'

const Pages = ({ productItems, cartItem, addToCart, shopItems,searchedItems }) => {
  return (
    <>
        <Home cartItem={cartItem} />
        <FlashDeals productItems={productItems} addToCart={addToCart} />
        <TopCate />
        <NewArrivals />
        <Shop shopItems={shopItems} addToCart={addToCart} searchedItems={searchedItems}/>
        <Annu />
        <Wrapper/>
    </>
  )
}

export default Pages