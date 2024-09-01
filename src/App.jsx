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
      <CardRow title="Romance" url={ROMANCE} />
      <CardRow title="Horror" url={HORROR} />
      <CardRow title="Comedy" url={COMEDY} />
    </div>
  );
};

export default App;
