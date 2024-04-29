import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
const tg = window.Telegram.WebApp;
import {Route, Routes} from "react-router-dom";
import Productslist from "./components/Productlist/Productslist";
import Form from "./components/Form/Form";

function App() {

    useEffect(() => {
        tg.ready();
    }, []);

  return (
    <div className="App">
        <Header />
        <Routes>
            <Route index element={<Productslist />}/>
            <Route path={'/form'} element={<Form />}/>
        </Routes>
    </div>
  );
}

export default App;
