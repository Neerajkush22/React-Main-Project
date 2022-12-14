import React from 'react'
import './Header.css'
const Head = () => {
    return (
        <>
            <section className="head">
                <div className="container d_flex">
                    <div className="left row">
                        <i className='fa fa-phone'></i>
                        <label>+91 73102 48383</label>
                        <i className='fa fa-envelope'></i>
                        <label>abc@gmail.com</label>
                    </div>
                    <div className="right row Rtext">
                        <label>Theme FAQ's</label>
                        <label>Need Help</label>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Head