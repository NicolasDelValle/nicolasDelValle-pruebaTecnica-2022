import axiosInstance from "./axios";

async function getCharacters(page) {
  const characters = await axiosInstance({
    method: "get",
    url: `people/?page=${page}`,
  });
  return characters;
}
async function getCharacter(id) {
  const character = await axiosInstance({
    method: "get",
    url: `people/${id}`,
  });
  return character;
}
export { getCharacters, getCharacter };
