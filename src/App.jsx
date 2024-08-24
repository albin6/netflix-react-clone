import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardRow from "./components/CardRow/CardRow";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <CardRow />
    </div>
  );
};

export default App;
