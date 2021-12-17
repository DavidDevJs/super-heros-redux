import { configureStore } from "@reduxjs/toolkit";

import heroes from "./slices/heroes";

export default configureStore({
  reducer: {
    heroes,
  },
});
