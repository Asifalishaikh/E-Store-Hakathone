//       THE CREATESLICE IS WAY TO CREATE REDUCER 
// a slice can accept object of reducer's function, name & initial state 

import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

// Video-1:13  
export interface CounterState {
  items: Array<any>
  totalQuantity: number,
  totalAmount: number
}

// defult:   state with initial value 0; 
const initialState: CounterState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
}

// FUNCTION OBJECT==> UNIQUE NAME = "counter" & initil state value
export const cartSlice = createSlice({
  name: 'cart',// every counter have a unique name as counter here,

  // payload start here
  initialState,
  reducers: {
    addToCart: (state, actions: PayloadAction<any>) => {
   state.totalQuantity += actions.payload.quantity
    //console.log(actions);
     
    },
    deleteFromCart: (state, actions: PayloadAction<any>) => {
     state.totalQuantity-= actions.payload.quantity
      
    },
    clearCart: (state) => {
      state = initialState
    },
  },
})
export const cartActions = cartSlice.actions

// here: the way to crate a reducer
export default cartSlice.reducer


//Action creators for the types of actions that are handled by the slice reducer.

// Action creators are generated for each case reducer function
//export const { increment, decrement, incrementByAmount } = counterSlice.actions

//(NOW AS ALL SLICE WOULD PASSED IN REDUCER == & REDUCER ALWAYS FOUND IN STORE OF APP.)
// NOW PASS IN REDUCER OF STORE