import { Navigate, useLocation } from "react-router-dom";
import { useUser } from "@clerk/clerk-react";

const ProtectedRoute = ({ children }) => {
  const { isSignedIn, isLoaded, user } = useUser();
  const { pathname } = useLocation();

  // ✅ Wait for Clerk to load before making a redirect decision
  if (!isLoaded) return null;

  // ❌ If not signed in → redirect to sign-in page
  if (!isSignedIn) {
    return <Navigate to="/?sign-in=true" />;
  }

  // 🛠 If signed in but onboarding not done → redirect to onboarding
  if (user && !user?.unsafeMetadata?.role && pathname !== "/onboarding") {
    return <Navigate to="/onboarding" />;
  }

  // ✅ Otherwise → allow access
  return children;
};

export default ProtectedRoute;
