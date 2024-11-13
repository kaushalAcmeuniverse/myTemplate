import { Provider } from "react-redux";
import Main from "./src/Main";
import { store } from "./src/redux/store";
import "./global";

export default function App() {
  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}
