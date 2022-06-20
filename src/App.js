import { getImagesList } from "./api/gateway";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import styles from "./App.module.scss";

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
    <div className={styles.root}>
      <Header />
    </div>
  );
}

export default App;
