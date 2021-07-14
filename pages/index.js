import Head from "next/head";
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
        </div>
        <div className="profileRelationsArea">
          <ProfileRelationsBoxWrapper>
            <h2 className="smallTitle">
              Pessoas da comunidade ({favoriteUsers.length})
            </h2>
            <ul>
              {favoriteUsers.slice(0, 6).map((user) => (
                <li>
                  <a href={`/users/${user}`} key={user}>
                    <img src={`https://github.com/${user}.png`} />
                    <span>{user}</span>
                  </a>
                </li>
              ))}
            </ul>
          </ProfileRelationsBoxWrapper>
          <Box>Comunidades</Box>
        </div>
      </MainGrid>
    </>
  );
}
