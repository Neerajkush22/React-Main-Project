import React from 'react'

const Catg = () => {
    const data = [
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "FaceWash",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Hair Oil",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Beard",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Body",
        },
        {
            cateImg: "./images/category/cat-1.png",
            cateName: "Perfume",
        },
        {
            cateImg: "./images/category/cat-2.png",
            cateName: "Oil",
        },
    ]
    return (
        <>
            <div className="category">
                <div className="chead d_flex">
                    <h1>Type</h1>
                    <h1>Shops</h1>
                </div>
                {
                    data.map((value,index) =>{
                        return(
                            <div className="box f_flex" key={index}>
                                <img src={value.cateImg} alt="" />
                                <span>{value.cateName}</span>
                            </div>
                        )
                    })
                }
                <div className="box box2"><button>View All Type</button></div>
            </div>
        </>
    )
}

export default Catg