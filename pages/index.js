import Head from "next/head";
import { useState } from "react";
import { MainGrid } from "../src/components/MainGrid";
import { Box } from "../src/components/Box";
import { ProfileSideBar } from "../src/components/ProfileSideBar";
import { ProfileRelationsBoxWrapper } from "../src/components/ProfileRelations";
import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";

export default function Home() {
  const githubUser = "cesardka";
  const [communities, setCommunities] = useState([
    {
      id: new Date().toISOString(),
      title: "A minha mãe me ama",
      image:
        "https://www.culturamix.com/wp-content/gallery/tiririca-humorista/tiririca-humorista-10.jpg",
      url: "https://www.youtube.com/watch?v=aU5Iyc8IEV8",
    },
  ]);
  const favoriteUsers = [
    "browserdotsys",
    "fellowsheep",
    "Melissa-Lima",
    "filipecheverrya",
    "vit090",
    "cristofersouza",
    "Hudell",
    "nicolascb",
  ];

  const handleCreateCommunity = (event) => {
    event.preventDefault();
    const communityFormData = new FormData(event.target);
    const newCommunity = {
      id: new Date().toISOString(),
      title: communityFormData.get("title"),
      image: communityFormData.get("image"),
    };

    const newCommunityList = [...communities, newCommunity];

    setCommunities(newCommunityList);
  };

  return (
    <>
      <Head>
        <title>AbestadOrkut</title>
      </Head>
      <AlurakutMenu />
      <MainGrid>
        <div className="profileArea">
          <ProfileSideBar user={githubUser} />
        </div>
        <div className="welcomeArea">
          <Box>
            Bem-vindo
            <OrkutNostalgicIconSet />
          </Box>
          <Box>
            <h2 className="subTitle">O que você deseja fazer?</h2>
            <form onSubmit={handleCreateCommunity}>
              <input
                placeholder="Qual vai ser o nome da sua comuniudade?"
                name="title"
                aria-label="Qual vai ser o nome da sua comuniudade?"
                type="text"
              />
              <input
                placeholder="Coloque uma URL para usarmos de capa?"
                name="image"
                aria-label="Coloque uma URL para usarmos de capa?"
              />
              <input
                placeholder="Onde fica a sua comunidade?"
                name="url"
                aria-label="Onde fica a sua comunidade?"
                type="text"
              />
              <button type="submit">Criar comunidade</button>
            </form>
          </Box>
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoriteUsers.length})
            </h2>
            <ul>
              {favoriteUsers.slice(0, MAX_GRID_LIST).map((user) => (
                <li key={user}>
                  <a href={`/users/${user}`}>
                    <img src={`https://github.com/${user}.png`} />
                    <span>{user}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">Comunidades ({communities.length})</h2>
            <ul>
              {communities.slice(0, MAX_GRID_LIST).map((community) => (
                <li key={community.id}>
                  <a href={`/users/${community.title}`}>
                    <img src={community.image} />
                    <span>{community.title}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
        </div>
      </MainGrid>
    </>
  );
}
