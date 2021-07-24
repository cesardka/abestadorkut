import { MAX_GRID_LIST } from "../../constants";
import { ProfileRelationsBoxWrapper } from "../ProfileRelationsBoxWrapper";

export const CommunityBox = ({
  title,
  type = "friends" | "community",
  items = [],
}) => {
  return (
    <ProfileRelationsBoxWrapper>
      <h2 className="smallTitle">
        {title} ({items.length})
      </h2>
      <ul>
        {type === "friends" &&
          items
            .slice(0, MAX_GRID_LIST)
            .map((d) => <FriendRelationItem props={d} />)}

        {type === "community" &&
          items
            .slice(0, MAX_GRID_LIST)
            .map((d) => <CommunityRelationItem props={d} />)}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
};

const FriendRelationItem = ({ props: { id, url, avatar_url, login } }) => {
  return (
    <li key={id}>
      <a href={url}>
        <img src={avatar_url} />
        <span>{login}</span>
      </a>
    </li>
  );
};

const CommunityRelationItem = (user) => {
  return (
    <li key={user}>
      <a href={`/users/${user}`}>
        <img src={`https://github.com/${user}.png`} />
        <span>{user}</span>
      </a>
    </li>
  );
};
