// import { Navigate, useLocation } from "react-router-dom";
// import { useUser } from "@clerk/clerk-react";

// const ProtectedRoute = ({ children }) => {
//   const { isSignedIn, isLoaded, user } = useUser();
//   const { pathname } = useLocation();

//   if (isLoaded && !isSignedIn && isSignedIn !== undefined) {
//     return <Navigate to="/?sign-in=true" />;
//   }

//   if (
//     user !== undefined &&
//     !user?.unsafeMetadata?.role &&
//     pathname !== "/onboarding"
//   )
//     return <Navigate to="/onboarding" />;

//   return children;
// };

// export default ProtectedRoute;

import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  if (!isLoaded) {
    return null; // Wait until Clerk loads
  }

  if (!isSignedIn) {
    return <Navigate to="/sign-in" />; // Use Clerk's sign-in route
  }

  if (!user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  return children;
};

export default ProtectedRoute;
