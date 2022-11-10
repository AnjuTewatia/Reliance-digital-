import React from 'react'

const Product = ({items}) => {
    console.log("product page",items);
    const {id,url,price,title,save}=items
  return (
    <div key={id}>
        <img src={url} alt="product image" />
        <h5>{title}</h5>
<p><span>Deal Price :</span>{price} </p>
<p>M.R.P :$3499</p>
<p>You save: {save}</p>
    </div>
  )
}

export default Product