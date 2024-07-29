import { createSlice} from "@reduxjs/toolkit";
interface counterstate{
    value:number;
}
const initialState: counterstate={
value:0,
};
const counterSlice = createSlice({
       name:'counter',
       initialState,
      reducers:{
       incrementbyone :(state) =>{
        state.value +=1;
       },
       decrementbyone :(state) =>{
            state.value -=1;
       },
      }, 
});
export const{ incrementbyone , decrementbyone} = counterSlice.actions;
export default counterSlice.reducer;