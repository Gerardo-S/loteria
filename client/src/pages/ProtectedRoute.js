import { Route, Redirect } from "react-router-dom";
import { useAuth } from "../util/authContext";

// Use this to create a route when only a logged in user should be able to
// navigate to the route.
function ProtectedRoute({ children, ...rest }) {
  const { isLoggedIn } = useAuth();
  const render = ({ location }) => {
    if (isLoggedIn) {
      return children;
    }
    return (
      <Redirect
        to={{
          // customize this redirect as needed. Path to direct a user to if user
          // isn't logged in.
          pathname: "/login",
          state: { from: location },
        }}
      />
    );
  };
  return <Route {...rest} render={render} />;
}

export default ProtectedRoute;
