import nookies from "nookies";

const LogoutPage = () => {
  return <></>;
};

const getServerSideProps = async (context) => {
  nookies.destroy(context, "USER_TOKEN");

  return {
    redirect: {
      destination: "/login",
      permanent: false,
    },
  };
};

export default LogoutPage;

export { getServerSideProps };
