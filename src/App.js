import "./App.css";
import { getImagesList } from "./api/gateway";
import { useEffect, useState } from "react";

function App() {
  const [imageUrls, setImageUrls] = useState([]);

  useEffect(() => {
    async function getImagesUrlsAndStore() {
      const imagesList = await getImagesList();
      const { imageUrls } = imagesList?.data;
      setImageUrls(imageUrls);
    }
    getImagesUrlsAndStore();
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
