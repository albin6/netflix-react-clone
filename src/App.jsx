import "./App.css"
import Header from "./components/Header/Header"
import Banner from "./components/Banner/Banner"
import Body from "./components/Body/Body"

const App = () => {
    return (
        <div className="app">
            <Header />
            <Banner />
            <Body />
        </div>
    );
}

export default App;