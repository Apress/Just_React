import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import { createStore } from "redux";
import { Provider } from "react-redux";

const reducer = (state = [{ name: "Meeting at 9" }], action) => {
  switch (action.type) {
    case "addNewTask":
      return [...state, action.payload];
    default:
      return state;
  }
};

const store = createStore(reducer);

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
