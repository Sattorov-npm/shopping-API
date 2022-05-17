// Add product to cart page
export const addCart = (product) => { 
  return { 
      type: "ADDCART",
      payload: product
  }
}

// Delete product from cart page 
export const deleteCart = (product) => { 
    return { 
        type: "DELETECART",
        payload: product
    }
}