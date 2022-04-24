import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCharacter } from "../../api/characters";
import characterActions from "../../redux/actions/characterActions";
import loader from "../../img/loader.gif";
import favStarFill from "../../img/svg/star-fill.svg";
import favStar from "../../img/svg/star.svg";
import "./character.css";

function Character() {
  const [character, setCharacter] = useState(null);
  const { fav } = useSelector((state) => state);
  const { id } = useParams();

  const dispatch = useDispatch();
  const isFav = fav.some((fav) => fav.name === character?.name);

  useEffect(() => {
    const character = async () => {
      const character = await getCharacter(id);
      setCharacter(character.data);
    };
    character();
  }, []);

  const handleAddFav = () => {
    dispatch(characterActions.addFav(character));
  };

  const handleRemoveFav = () => {
    dispatch(characterActions.removeFav(character));
  };

  return (
    <div className="character">
      <div>
        <Link className="character-backBtn" to="/">
          <h2 className="character-backBtn-h2">&#60; Volver al listado</h2>
        </Link>
      </div>
      <div>
        <div className="character-dataContainer">
          {character ? (
            <div className="character-dataContainer-data">
              <h3>
                {character.name}
                {isFav ? (
                  <button
                    className="character-dataContainer-favBtn"
                    onClick={() => handleRemoveFav()}
                  >
                    <img src={favStarFill} alt="" />
                  </button>
                ) : (
                  <button
                    className="character-dataContainer-favBtn"
                    onClick={() => handleAddFav()}
                  >
                    <img src={favStar} alt="" />
                  </button>
                )}
              </h3>
              <span>{character.gender}</span>
              <span>Birth date: {character.birth_year}</span>
              <span>Amount of films: {character.films.length}</span>
              <span>{`Height: ${character.height} | Mass: ${character.mass}`}</span>
            </div>
          ) : (
            <img
              className="character-dataContainer-loader"
              src={loader}
              alt="cargando"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Character;
