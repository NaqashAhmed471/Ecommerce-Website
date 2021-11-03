import "./App.css";
import { Provider } from "react-redux";
import store from "./Redux/Store";
import Login from "./pages/LoginPage/Login";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Login />
      </div>
    </Provider>
  );
}

export default App;

