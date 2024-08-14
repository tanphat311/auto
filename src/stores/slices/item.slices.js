import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const findAllitems = createAsyncThunk(
    "findAllitems",
    async () => {
        let res = await axios.get(process.env.REACT_APP_SERVER_JSON + 'items');
        return res.data
    }
)
const filterProductByType = createAsyncThunk(
    "filterProductByType",
    async (type) => {
        let res = await axios.get(`${process.env.REACT_APP_SERVER_JSON}items?name_like = ${type}`);
        return res.data
    }
)
const searchProductByName = createAsyncThunk(
    "searchProductByName",
    async (name) => {
        let res = await axios.get(`${process.env.REACT_APP_SERVER_JSON}items?name_like=${name}`)
        return res.data
    }
)
// const checkOut = createAsyncThunk(
//     "checkOut",
//     async (checkObj) => {
//         let res = await axios.patch(process.env.REACT_APP_SERVER_JSON + 'users/' + checkObj.id, checkObj.patchData)
//         return res.data
//     }
// )
const itemslice = createSlice(
    {
        name: "product",
        initialState: {
            listitems: [],
            searchName: []
        },
        extraReducers: (builder) => {
            builder.addCase(findAllitems.fulfilled, (state, action) => {
                state.listitems = [...action.payload]
            })
            builder.addCase(filterProductByType.fulfilled, (state, action) => {
                state.listitems = [...action.payload]
            })
            builder.addCase(searchProductByName.fulfilled, (state, action) => {
                state.searchName = [...action.payload]
            })
            builder.addCase(checkOut.fulfilled, (state, action) => {
                console.log('xong roi day', action)
            })
        }

    }
)


export const productActions = {
    ...itemslice.actions,
    findAllitems,
    filterProductByType,
    searchProductByName,
    checkOut

}
export default itemslice.reducer;