import React from 'react'

const Annu = () => {
    const mystyle = {
        width: "30%",
        height:"340px"
    }
    const mystyle1 = {
        width: "68%",
        height:"340px"
    }
  return (
    <>
        <section className='annoc background'>
            <div className="container d_flex">
                <div className="img" style={mystyle}>
                    <img src="https://cdn.grabon.in/gograbon/images/merchant/1539871282389.jpg" width='100%' height='100%' />
                </div>
                <div className="img" style={mystyle1}>
                    <img src="https://cbshop.in/wp-content/uploads/2020/02/Beardo-coupons-image.jpg" width='100%' height='100%' />
                </div>
            </div>
        </section>
    </>
  )
}

export default Annu