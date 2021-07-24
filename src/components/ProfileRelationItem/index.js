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
            .map((d) => <FriendRelationItem props={d} key={d.id} />)}

        {type === "community" &&
          items
            .slice(0, MAX_GRID_LIST)
            .map((d) => <CommunityRelationItem props={d} key={d.id} />)}
      </ul>
    </ProfileRelationsBoxWrapper>
  );
};

const FriendRelationItem = ({ props: { url, avatar_url, login } }) => {
  return (
    <li>
      <a href={url}>
        <img src={avatar_url} />
        <span>{login}</span>
      </a>
    </li>
  );
};

const CommunityRelationItem = ({ props: { title, imageUrl, url } }) => {
  return (
    <li>
      <a href={url}>
        <img src={imageUrl} />
        <span>{title}</span>
      </a>
    </li>
  );
};
