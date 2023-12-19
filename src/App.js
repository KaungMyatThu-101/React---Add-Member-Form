import { useEffect } from "react";
import Main from "./components/Main";

function App() {
  useEffect(() => {
    console.log("Hello world");
  }, []);
  return (
    <div className="App">
      <Main></Main>
    </div>
  );
}

export default App;
