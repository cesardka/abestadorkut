import { Box } from "../Box";

export const ProfileSideBar = ({ user }) => {
  return (
    <Box>
      <img src={`https://github.com/${user}.png`} />
    </Box>
  );
};
