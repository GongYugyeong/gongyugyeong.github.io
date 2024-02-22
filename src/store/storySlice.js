import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// createAsyncThunk 생성하기
export const storyApi = createAsyncThunk(
  // action 이름
  "load/story",
  // 처리할 비동기 함수
  async (data) => {
    // 서버에서 데이터를 불러옴
    //const res = await axios.get("http://tms.pitap.at/api/category/category_list_all.php");
    const res = await axios.post("http://www.pitapat.net/src/story_list.php", data);
    //console.log(res.data);
    // action의 payload 리턴
    return res.data;
  }
);

const storySlice = createSlice({
  name: "story",
  initialState: {list:[]},
  reducers: {},
  // extraReducer에 비동기 함수의 pending, fulfilled, rejected를 처리할 내용을 넣어준다!
  extraReducers: 
    (builder) => {
    builder.addCase(storyApi.pending, (state, action) => {
      // console.log('pending');
    })
    // fullflled 되었을 때, 서버에서 받아온 데이터를 state에 넣어줌!
    // 첫번째 파라미터는 redux의 state이고 두번째 파라미터는 action
    builder.addCase(storyApi.fulfilled, (state, action) => {
      state.list = action.payload;
      // console.log(action.payload);
      //console.log('fulfilled');
    })
    builder.addCase(storyApi.rejected, (state, action) => {
      // console.log('rejected');
    })
  }
})
export default storySlice.reducer;
