import Page1 from "./containers/Page1";
import Page2 from "./containers/Page2";
import Page3 from "./containers/Page3";
import Page4 from "./containers/Page4";
import Header from './components/Header';

function App() {
  return (
    <div>
      <Header />
      <Page1 />
      <Page2 />
      <Page3 />
      <Page4 />
    </div>
  );
}

export default App;
