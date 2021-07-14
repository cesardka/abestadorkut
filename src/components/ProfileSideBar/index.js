import { AlurakutProfileSidebarMenuDefault } from "../../lib/AlurakutCommons";
import { Box } from "../Box";

export const ProfileSideBar = ({ user }) => {
  return (
    <Box as="aside">
      <img src={`https://github.com/${user}.png`} />
      <hr />

      <a className="boxLink" href={`https://github.com/${user}`}>
        {user}
      </a>
      <hr />

      <AlurakutProfileSidebarMenuDefault />
    </Box>
  );
};
