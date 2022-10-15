import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const getAllOrder = createAsyncThunk("orders/all", async () => {
  const response = await axios.get(
    `http://localhost/ecommerce/backend/api/order/read.php`
  );
  return response.data.data;
});
export const getOrder = createAsyncThunk("orders/single", async (id) => {
  const res = await axios.get(
    `http://localhost/ecommerce/backend/api/order/read_single.php?user_id=${id}`
  );
  return res.data.data;
});
export const changeStateOrder = createAsyncThunk(
  "orders/change",
  async ({ id, state }) => {
    const res = await axios.put(
      `http://localhost/ecommerce/backend/api/order/update.php?id=${id}`,
      {
        state,
      }
    );
    return {
      id: id,
      data: res.data.data,
    };
  }
);

// Create slice
const ordersSlice = createSlice({
  name: "comments",
  initialState: {
    allOrder: [],
    order: {},
  },
  reducers: {},
  extraReducers: {
    // get all user from backend
    [getAllOrder.pending]: (state, action) => {
      console.log("Fetching all order from backend");
    },
    [getAllOrder.fulfilled]: (state, action) => {
      console.log("Done");
      state.allOrder = action.payload;
    },
    [getAllOrder.rejected]: (state, action) => {
      console.log("Failed to get all order");
    },

    // get one order from backend
    [getOrder.pending]: (state, action) => {
      console.log("Fetching one order from backend");
    },
    [getOrder.fulfilled]: (state, action) => {
      console.log("Done");
      state.order = action.payload[0];
    },
    [getOrder.rejected]: (state, action) => {
      console.log("Failed to get one order");
    },
    // change one order from backend
    [changeStateOrder.pending]: (state, action) => {
      console.log("Changing one order from backend");
    },
    [changeStateOrder.fulfilled]: (state, action) => {
      const { id, data } = action.payload;
      console.log("Done");
      state.allOrder = state.allOrder.map((item) => {
        if (item.order_id === id) {
          return {
            ...item,
            state: data,
          };
        }
        return item;
      });
    },
    [changeStateOrder.rejected]: (state, action) => {
      console.log("Failed to change one order");
    },
    // toggle status
    // [toggleStatus.pending]: (state, action) => {
    //   console.log("Toggle  status ");
    // },
    // [toggleStatus.fulfilled]: (state, action) => {
    //   console.log("Done");
    //   state.allUser = state.allUser.map((user) => {
    //     if (user.user_id === action.payload) {
    //       return {
    //         ...user,
    //         isBlocked: 1 - user.isBlocked,
    //       };
    //     }
    //     return user;
    //   });
    // },
    // [toggleStatus.rejected]: (state, action) => {
    //   console.log("Failed to toggle status");
    // },
  },
});
// Reducer
const ordersReducer = ordersSlice.reducer;

// Selector
export const ordersSelector = (state) => state.ordersReducer.allOrder;
export const orderSingleSelector = (state) => state.ordersReducer.order;
export const {
  // addTodo,
  markComplete,
  // deleteTodo
  // todosFetched
} = ordersSlice.actions;

// Export reducer
export default ordersReducer;
