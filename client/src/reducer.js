export const initialState = {
    basket: [],
    user: null,
    products: []
  };
  // calculated basket subtotal
  export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);
  
  
  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "ADD_TO_BASKET":
        return { 
          ...state, 
          basket: [...state.basket, action.item],
         };

         case "REMOVE_FROM_BASKET":
          
         const index = state.basket.findIndex(
            (basketItem) => basketItem.id === action.id
          );

          let newBasket = [...state.basket];
    
          if (index >= 0) {
            newBasket.splice(index, 1)
    
          } else {
            console.warn(
              `Cant remove product (id: ${action.id}) as its not in basket!`
            )
          }
    
          return {
            ...state,
            basket: newBasket
          }
          case 'ADD_TO_PRODUCTS':
            // Logic for adding item to cart
            return {
                ...state,
                products: [...state.products, action.payload]
            }

        case 'SET_USER':
            return {
                ...state,
                user: action.user
            }
        case 'SET_PROFILE':
            return {
                ...state,
                profile: action.userName
            }
      default:
        return state;
      }
  };
  
  export default reducer;