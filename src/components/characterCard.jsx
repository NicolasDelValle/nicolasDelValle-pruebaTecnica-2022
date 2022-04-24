import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import slugify from "slugify";
import favStar from "../img/svg/star-fill.svg";

function CharacterCard(character) {
  const id = slugify(character.character.url, {
    remove: /[^0-9]/g,
  });
  const { fav } = useSelector((state) => state);
  const isFav = fav.some((fav) => fav.name === character.character.name);
  return (
    <Link className="home-cardContainer-card" to={id}>
      <div>
        <div className="home-cardContainer-card-nameContainer">
          <h2 className="home-cardContainer-card-nameContainer-name">
            {character.character.name}
            {isFav ? (
              <img
                className="home-cardContainer-card-nameContainer-favStar"
                src={favStar}
                alt=""
              />
            ) : (
              <></>
            )}
          </h2>
        </div>
        <h3 className="home-cardContainer-card-data">
          {`${character.character.gender} | Birth date: ${character.character.birth_year}`}
        </h3>
      </div>
    </Link>
  );
}

export default CharacterCard;
