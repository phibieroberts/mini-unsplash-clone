import React, { useState, useEffect } from "react";
import Header from "./Components/Header";
import ImageCards from "./Components/ImageCards";
import Loader from "./Components/Loader";
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faSearch} from '@fortawesome/free-solid-svg-icons'

library.add(fab, faSearch)
function App() {
  const [queryValue, setQueryValue] = useState("");
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchImages = () => {
    fetch(
      `https://api.unsplash.com/search/photos?client_id=YTA-QQYC91SVlfacn6Bo8_9LF1hEXX13w5i7lGCIaxM&query=${
        queryValue || "dog" 
      }&per_page=15`
    )
      .then((res) => res.json())
      .then((res) => setImages(res.results));
  };

  useEffect(() => {
    setTimeout(async () => {
      await fetchImages();
      setLoading(false);
    }, 3000);
  }, [queryValue]);
  return (
    <div className="App">
      <Header
        queryValue={queryValue}
        setQueryValue={(value) => setQueryValue(value)}
      />
       <ImageCards images={images} />
    </div>
  );
}

export default App;
