import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// Reducer Thunk
export const getProducts = createAsyncThunk(
  "products/productsFetched",
  async () => {
    const response = await axios.get(
      "http://localhost/ecommerce/backend/api/product/read.php"
    );
    return response.data.data;
  }
);
export const updateProduct = createAsyncThunk(
  "product/singleProductUpdate",
  async (updatedProduct) => {
    const response = await axios.put(
      "http://localhost/ecommerce/backend/api/product/update.php",
      updatedProduct
    );
    return response.data;
  }
);
export const getImgForProduct = createAsyncThunk(
  "product/singleimg",
  async (id) => {
    const res = await axios.get(
      `http://localhost/ecommerce/backend/api/imgProduct/read_single.php?id=${id}`
    );
    return res.data;
  }
);
export const getSingleProduct = createAsyncThunk(
  "product/singleProductsFetched",
  async (id) => {
    const response = await axios
      .all([
        axios.get(
          `http://localhost/ecommerce/backend/api/product/read_single.php?id=${id}`
        ),
        axios.get(
          `http://localhost/ecommerce/backend/api/imgProduct/read_single.php?id=${id}`
        ),
      ])
      .then(
        axios.spread((data1, data2) => {
          // output of req.
          return {
            ...data1.data,
            imgList: data2.data,
          };
        })
      );
    // console.log("??", res);
    // const response = await axios.get(
    //   `http://localhost/ecommerce/backend/api/product/read_single.php?id=${id}`
    // );
    return response;
  }
);

export const createImg = createAsyncThunk(
  "product/img",
  async ({ id, url }) => {
    const config = {
      headers: {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
      },
    };
    const res = await axios.post(
      `http://localhost/ecommerce/backend/api/imgProduct/create.php?id=${id}`,
      {
        url: url,
      },
      config
    );
    return res.data;
  }
);
export const deleteImg = createAsyncThunk("product/img/delete", async (id) => {
  const config = {
    headers: {
      "Access-Control-Allow-Origin": "*",
      "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
    },
  };
  const res = await axios.delete(
    `http://localhost/ecommerce/backend/api/imgProduct/delete.php?id=${id}`,
    config
  );
  return parseInt(res.data.id);
});

export const toggleStatus = createAsyncThunk(
  "product/togglestatus",
  async (id) => {
    const res = await axios.get(
      `http://localhost/ecommerce/backend/api/product/status.php?id=${id}`
    );
    return id;
  }
);

const productsSlice = createSlice({
  name: "products",
  initialState: {
    allProducts: [],
    product: {
      loading: true,
    },
  },
  reducers: {
    /* addTodo: {
			reducer(state, action) {
				state.allTodos.unshift(action.payload)
			},
			prepare(title) {
				return {
					payload: {
						id: nanoid(),
						title,
						completed: false
					}
				}
			}
		}, */
    markComplete(state, action) {
      const todoId = action.payload;
      state.allTodos = state.allTodos.map((todo) => {
        if (todo.id === todoId) todo.completed = !todo.completed;
        return todo;
      });
    },
    /* deleteTodo(state, action) {
			const todoId = action.payload
			state.allTodos = state.allTodos.filter(todo => todo.id !== todoId)
		} */
    /* todosFetched(state, action) {
			state.allTodos = action.payload
		} */
  },
  extraReducers: {
    // Get all products
    [getProducts.pending]: (state, action) => {
      console.log("Fetching products from backend ....");
    },
    [getProducts.fulfilled]: (state, action) => {
      console.log("Done");
      state.allProducts = action.payload;
    },
    [getProducts.rejected]: (state, action) => {
      console.log("Failed to get products!!!");
    },

    // Get single product
    [getSingleProduct.pending]: (state, action) => {
      console.log("Fetching single product from backend ....");
    },
    [getSingleProduct.fulfilled]: (state, action) => {
      console.log("Done");
      state.product = {
        ...action.payload,
        loading: false,
      };
    },
    [getSingleProduct.rejected]: (state, action) => {
      console.log("Failed to get single product!!!");
    },

    // Update product
    [updateProduct.pending]: (state, action) => {
      console.log("Fetching products from backend ....");
    },
    [updateProduct.fulfilled]: (state, action) => {
      console.log("Done");
      // state.allProducts = action.payload;
    },
    [updateProduct.rejected]: (state, action) => {
      console.log("Failed to get products!!!");
    },

    // Update product
    [createImg.pending]: (state, action) => {
      console.log("create img from backend ....");
    },
    [createImg.fulfilled]: (state, action) => {
      console.log("Done");
      state.product = {
        ...state.product,
        imgList: [...state.product.imgList, action.payload],
      };
    },
    [createImg.rejected]: (state, action) => {
      console.log("Failed to create img ");
    },

    // get img product
    [getImgForProduct.pending]: (state, action) => {
      console.log("get img for product from backend ....");
    },
    [getImgForProduct.fulfilled]: (state, action) => {
      console.log("Done");
      state.product = {
        ...state.product,
        imgList: action.payload,
      };
    },
    [getImgForProduct.rejected]: (state, action) => {
      console.log("Failed to get img products!!!");
    },

    // delete img by id
    [deleteImg.pending]: (state, action) => {
      console.log("delte img ingggg");
    },
    [deleteImg.fulfilled]: (state, action) => {
      console.log("Done delte");
      const imgListFilter = state.product.imgList.filter((item) => {
        if (item.id !== action.payload) return item;
      });
      state.product = {
        ...state.product,
        imgList: imgListFilter,
      };
    },
    [deleteImg.rejected]: (state, action) => {
      console.log("Failed to delete!!!");
    },
    // delete img by id
    [toggleStatus.pending]: (state, action) => {
      console.log("toggle status pending");
    },
    [toggleStatus.fulfilled]: (state, action) => {
      console.log("Done toggle");
      state.allProducts = state.allProducts.map((singleProduct) => {
        if (singleProduct.product_id === action.payload) {
          return {
            ...singleProduct,
            isDisabled: 1 - singleProduct.isDisabled,
          };
        }
        return singleProduct;
      });
    },
    [toggleStatus.rejected]: (state, action) => {
      console.log("Failed to toggle status!!!");
    },
  },
});
// Reducer
const productsReducer = productsSlice.reducer;

// Selector
export const productsSelector = (state) => state.productsReducer.allProducts;
export const singleProductsSelector = (state) => state.productsReducer.product;
export const {
  // addTodo,
  markComplete,
  // deleteTodo
  // todosFetched
} = productsSlice.actions;
// Export reducer
export default productsReducer;
