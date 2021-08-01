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

  const defaultFormData = {
    title: "",
    imageUrl: "",
    url: "",
  };

  const [communities, setCommunities] = useState([]);
  const [followers, setFollowers] = useState([]);
  const [formFields, setFormFields] = useState(defaultFormData);

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

  const handleCreateCommunity = async (event) => {
    event.preventDefault();
    const newCommunityResponse = await fetch(`/api/communities/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formFields),
    })
      .then(async (response) => {
        return await response.json();
      })
      .catch((err) => {
        console.error(err);
      });

    setFormFields(defaultFormData);
    setCommunities([newCommunityResponse, ...communities]);
  };

  const handleChangeForm = (e) => {
    setFormFields({
      ...formFields,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
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
              onChange={handleChangeForm}
              submitButtonText="Criar comunidade"
              fields={[
                {
                  name: "title",
                  label: "Qual vai ser o nome da sua comuniudade?",
                  value: formFields.title,
                },
                {
                  name: "imageUrl",
                  label: "Coloque uma URL para usarmos de capa?",
                  value: formFields.imageUrl,
                },
                {
                  name: "url",
                  label: "Onde fica a sua comunidade?",
                  value: formFields.url,
                },
              ]}
            ></Form>
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
