import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCharacters } from "../../api/characters";
import CharacterCard from "../../components/characterCard";
import characterActions from "../../redux/actions/characterActions";
import pageActions from "../../redux/actions/pageActions";
import loader from "../../img/loader.gif";
import "./home.css";

function Home() {
  const [filt, setFilt] = useState(false);
  const { page, characters, fav } = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleCoso = async () => {
      const characters = await getCharacters(page);
      dispatch(characterActions.fillCharacters(characters.data.results));
    };
    handleCoso();
  }, []);

  const handleChangePage = async (page) => {
    setFilt(false);
    dispatch(characterActions.clearCharacters);
    dispatch(pageActions.setPage(page));
    const characters = await getCharacters(page);
    dispatch(characterActions.fillCharacters(characters.data.results));
  };

  const handlePagination = () => {
    let pagination = [];
    for (let i = 1; i < 10; i++) {
      i === page
        ? pagination.push(
            <button key={`on-${i}`} className="home-pagination-btnPage-active">
              {i}
            </button>
          )
        : pagination.push(
            <button
              key={`off-${i}`}
              onClick={() => handleChangePage(i)}
              className="home-pagination-btnPage"
            >
              {i}
            </button>
          );
    }
    return pagination;
  };

  const handleToggleFilt = () => {
    setFilt((prev) => !prev);
  };

  return (
    <div className="home">
      {filt ? (
        <button
          key={`on`}
          className="home-favBtnTrue"
          onClick={() => handleToggleFilt()}
        >
          Filtrar por favoritos
        </button>
      ) : (
        <button
          key={`off`}
          className="home-favBtnFalse"
          onClick={() => handleToggleFilt()}
        >
          Filtrar por favoritos
        </button>
      )}
      <div className="home-pagination">{handlePagination()}</div>
      <div className="home-cardContainer">
        {filt ? (
          fav.length === 0 ? (
            <div className="home-cardContainer-noFavMsg">
              <h1>Todavía no hay favoritos agregados</h1>
            </div>
          ) : (
            fav.map((item) => (
              <CharacterCard key={item.name} character={item} />
            ))
          )
        ) : characters ? (
          characters.map((item) => (
            <CharacterCard key={item.name} character={item} />
          ))
        ) : (
          <img className="home-cardContainer-loader" src={loader} alt="" />
        )}
      </div>
    </div>
  );
}

export default Home;
