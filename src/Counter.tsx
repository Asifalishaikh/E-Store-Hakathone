// "use client"
// // time to paly with app Vid-1:15
// import { useSelector, useDispatch } from "react-redux";
// import { RootState } from "./store/store";

// // action needs here
// import { counterActions } from "./store/slice/cartSlice";


// const CounterView = () => {
// // after state.counterSlice.value. initiate dispatch > then call in (Vid-1:15)
//   const dispatch = useDispatch();

//   //const counterValue = 0;           callBack func > slected value form store
//   const counterValue = useSelector(
//     (state: RootState) => state.counterSlice.value);
// //Vid-1:15 counterActions.increment are values comes from store to perform acion to change value on click
//   const increment = () => {
//     dispatch(counterActions.increment())
//   };
//   // use it on onClick={decrement}
//   const decrement = () => {
//     dispatch(counterActions.decrement())
//    };
//   return (
//     <div className="flex gap-4">
//       <button className="bg-green-500 text-lg rounded-md pl-2 pr-2 gap-4"onClick={increment}>
//                 Increment</button>
      
//       <div className="text-lg font-bold">Counter App {counterValue}</div>
      
//       <button className="bg-red-500 text-lg rounded-md pl-2 pr-2 gap-4" onClick={decrement}>
//                 Decrement</button>
//     </div>
//   );
// };

// export default CounterView;

// types Defining
//( message as {message:string, index:number}). 
let message = {
    message:"hi"
}