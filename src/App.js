import {
  BrowserRouter as Router,
  Switch,
  Route,
  BrowserRouter,
  Routes,
} from "react-router-dom";

import Home from "./components/Home";
import Cart from "./components/Cart";
import ItemProvider from "./Context/ItemsProvider";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <ItemProvider>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        </ItemProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
