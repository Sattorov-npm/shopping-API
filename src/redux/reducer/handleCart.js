
const cart = [];

//  for quantity property
let quantity;
const handleCart = (state=cart,action) => { 
  const product = action.payload;
  switch (action.type) {
      case "ADDCART":
        //   Product yes or not checking it !
        const exist = state.find((x) => x.id === product.id);
        if(exist) {  
          // quantity plus
          return state.map((x)=> 
          x.id === product.id ? {...x, quantity: x.quantity + 1} : x 
          );
        } else { 
          const product = action.payload;
          return [ 
            ...state,
            {  
              ...product,
              quantity: 1,
            }
          ]
        }
          break;

          case "DELETECART": 
          const exist2 = state.find((x)=> x.id === product.id);
          if(exist2.quantity === 1) {
            return state.filter((x) => x.id !==exist2.id);
          } else { 
              return state.map((x)=>
               x.id === product.id ? {...x,
              quantity: quantity - 1} : x
              );
            } 
            break;

          

  
      default:
        return state;
          break;
  }
}

export default handleCart;