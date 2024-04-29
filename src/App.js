import './App.css';
import {useEffect} from "react";
import Header from "./components/Header/Header";
import {Route, Routes} from "react-router-dom";
import Productslist from "./components/Productlist/Productslist";
import Form from "./components/Form/Form";
const tg = window.Telegram.WebApp;

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
