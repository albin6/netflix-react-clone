import "./App.css";
import Header from "./components/Header/Header";
import Banner from "./components/Banner/Banner";
import CardRow from "./components/CardRow/CardRow";
import {
  ORIGINALS,
  ACTION,
  ROMANCE,
  HORROR,
  DOCUMENTARY,
  COMEDY,
} from "./utils/urls";

const App = () => {
  return (
    <div className="app">
      <Header />
      <Banner />
      <CardRow title="Originals" url={ORIGINALS} />
      <CardRow title="Action" url={ACTION} isPoster />
    </div>
  );
};

export default App;
