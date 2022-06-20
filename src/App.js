import { getImagesList } from "./api/gateway";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { PropertyView } from "./components/PropertyView/PropertyView";
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
      <PropertyView
        name="Monsieur Didot"
        amenities={[
          "4 people",
          "2 bedrooms",
          "2 bathrooms",
          "Private terrace",
          "Peaceful",
        ]}
      />
    </div>
  );
}

export default App;
