import axios from "axios";
import { useEffect, useState } from "react";
import { Container } from "../../components";
// import "../../axios";
import css from "./styles.module.css";

export const Home = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    const execute = async () => {
      setLoading(true);
      try {
        await axios
          .get(
            "https://api.giphy.com/v1/gifs/trending?api_key=HjvvLv19smnnDbehOuisjLulGQsP3ZWf&limit=25&rating=g"
          )
          .then((res) => setData(res.data.data))
          .then(() => setLoading(false));
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    execute();
  }, []);
  return (
    <Container>
      <div className={css.grid}>
        {data.map((g, i) => {
          const { images } = g;
          return <img src={images.original.url} alt="" />;
        })}
      </div>
    </Container>
  );
};
