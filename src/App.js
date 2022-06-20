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
        details={[
          {
            id: 1,
            iconUrl: "/icons/map-pin.svg",
            value: "Notthing Hill, London",
          },
          {
            id: 2,
            iconUrl: "/icons/train.svg",
            value: "Walk 6 mins (Westbourne Park Station)",
          },
          {
            id: 3,
            iconUrl: "/icons/stairs.svg",
            value: "Stairs",
          },
        ]}
      />
    </div>
  );
}

export default App;
