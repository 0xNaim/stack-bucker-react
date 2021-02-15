import { Helmet } from "react-helmet";
import AppRouter from "./Router";

function App() {
  return (
    <div className="App">
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;500&family=Roboto:wght@100;300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>
      <AppRouter />
    </div>
  );
}

export default App;
