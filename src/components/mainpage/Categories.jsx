import React from 'react'

const Categories = () => {
    const data = [
        {
            cateName:"FashWash"
        },
        {
            cateName:"Shampoo"
        },
        {
            cateName:"BeardWash"
        },
        {
            cateName:"Hair Oil"
        },
        {
            cateName:"Beard Oil"
        },
        {
            cateName:"Body wash"
        },
        {
            cateName:"Grooming Kits"
        },
        {
            cateName:"Perfumes"
        },
        {
            cateName:"Shaving"
        },
        {
            cateName:"Trimmers"
        },
        {
            cateName:"Deodorants"
        }
    ]
  return (
    <>
        <div className="category">
            {
                data.map((value, index) => {
                    return(
                        <div className="box f_flex" key={index}>
                            <span>{value.cateName}</span>
                        </div>
                    )
                })
            }
        </div>
    </>
  )
}

export default Categories