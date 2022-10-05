import { BrowserRouter } from "react-router-dom";
import Header from "./components/Header";
import { CartContextProvider } from "./contexts/cart";
import Router from "./router";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <CartContextProvider>
        <Router />
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
