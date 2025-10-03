import { createAsyncThunk } from "@reduxjs/toolkit";

import http from "@/utils/http";

export const getList = createAsyncThunk("product/getList", async () => {
    const response = await http.get("/products");
    return response.data;
});
