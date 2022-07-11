import './App.css';
import {Header} from "./components/Header/Header";
import {Content} from "./components/Main/Content";
import {Footer} from "./components/Footer/Footer";

export function App() {

    return (

            <div className="App">
                <Header/>
                <main>
                    <Content/>
                </main>
                <Footer/>
            </div>

    );
}
