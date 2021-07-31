import Head from "next/head";
import { useState, useEffect } from "react";
import { MainGrid } from "../src/components/MainGrid";
import { Box } from "../src/components/Box";
import { Form } from "../src/components/Form";
import { ProfileSideBar } from "../src/components/ProfileSideBar";
import { CommunityBox } from "../src/components/ProfileRelationItem";

import {
  AlurakutMenu,
  OrkutNostalgicIconSet,
} from "../src/lib/AlurakutCommons";
import { githubUser } from "../src/constants";

export default function Home() {
  const [communities, setCommunities] = useState([]);
  const [followers, setFollowers] = useState([]);

  useEffect(async () => {
    const newCommunities = await fetch(`/api/communities`).then(
      async (response) => {
        return await response.json();
      }
    );
    const newFollowers = await fetch(`/api/followers/${githubUser}`).then(
      async (response) => {
        return await response.json();
      }
    );

    setCommunities(newCommunities);
    setFollowers(newFollowers);
  }, []);

  const handleCreateCommunity = (event) => {
    event.preventDefault();
    const communityFormData = new FormData(event.target);
    const newCommunity = {
      id: new Date().toISOString(),
      title: communityFormData.get("title"),
      image: communityFormData.get("image"),
      url: communityFormData.get("url"),
    };

    const newCommunityList = [...communities, newCommunity];

    setCommunities(newCommunityList);
  };

  return (
    <>
      <Head>
        <title>AbestadOrkut</title>
      </Head>
      <AlurakutMenu githubUser={githubUser} />
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
            <Form
              onSubmit={handleCreateCommunity}
              submitButtonText="Criar comunidade"
            >
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
            </Form>
          </Box>
        </div>
        <div className="profileRelationsArea">
          {followers && (
            <CommunityBox
              title="Pessoas da comunidade"
              type="friends"
              items={followers}
            />
          )}
          {communities && (
            <CommunityBox
              title="Comunidades"
              type="community"
              items={communities}
            />
          )}
        </div>
      </MainGrid>
    </>
  );
}
