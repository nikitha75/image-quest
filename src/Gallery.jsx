import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const url = import.meta.env.VITE_PHOTOS_URL;

const Gallery = () => {
  const response = useQuery({
    queryKey: ["images"],
    queryFn: async () => {
      const result = await axios.get(url);

      return result.data;
    },
  });

  console.log(response);
  return <div>Gallery</div>;
};

export default Gallery;
