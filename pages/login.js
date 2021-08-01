import { useState } from "react";
import { useRouter } from "next/router";
import nookies from "nookies";

export default function LoginScreen() {
  const currentYear = new Date().getFullYear();
  const router = useRouter();
  const [githubUser, setGithubUser] = useState("");

  const handleSubmitLogin = (event) => {
    event.preventDefault();

    if (githubUser === "") {
      return;
    }

    fetch(`https://alurakut.vercel.app/api/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ githubUser }),
    }).then(async (response) => {
      const { token } = await response.json();
      nookies.set(null, "USER_TOKEN", token, {
        path: "/",
        maxAge: 86400 * 7,
        sameSite: "lax",
        secure: true,
      });

      router.push("/");
    });
  };

  const handleChangeUsername = (e) => {
    setGithubUser(e.target.value);
  };

  return (
    <main
      style={{
        display: "flex",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div className="loginScreen">
        <section className="logoArea">
          <img src="https://alurakut.vercel.app/logo.svg" />

          <p>
            <strong>Conecte-se</strong> aos seus amigos e familiares usando
            recados e mensagens instantâneas
          </p>
          <p>
            <strong>Conheça</strong> novas pessoas através de amigos de seus
            amigos e comunidades
          </p>
          <p>
            <strong>Compartilhe</strong> seus vídeos, fotos e paixões em um só
            lugar
          </p>
        </section>

        <section className="formArea">
          <form className="box" onSubmit={handleSubmitLogin}>
            <p>
              Acesse agora mesmo com seu usuário do <strong>GitHub</strong>!
            </p>
            <input
              name="username"
              placeholder="Usuário"
              value={githubUser}
              onChange={handleChangeUsername}
            />
            {githubUser.length === 0 && (
              <div className="">Preencha o campo</div>
            )}
            <button type="submit">Login</button>
          </form>

          <footer className="box">
            <p>
              Ainda não é membro? <br />
              <a href="https://github.com/signup">
                <strong>ENTRAR JÁ</strong>
              </a>
            </p>
          </footer>
        </section>

        <footer className="footerArea">
          <p>
            © {currentYear} alura.com.br -{" "}
            <a href="https://www.orkut.br.com/" target="_blank">
              Sobre o Orkut.br
            </a>{" "}
            - <a href="/">Centro de segurança</a> - <a href="/">Privacidade</a>{" "}
            - <a href="/">Termos</a> - <a href="/">Contato</a>
          </p>
        </footer>
      </div>
    </main>
  );
}
