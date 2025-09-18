import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/ui/theme-provider";

import AppLayout from "./layout/AppLayout";
import LandingPage from "./pages/LandingPage";
import Onboarding from "./pages/Onboarding";
import Job from "./pages/Job";
import JobListing from "./pages/JobListing";
import MyJobs from "./pages/MyJobs";
import PostJob from "./pages/PostJob";
import SaveedJob from "./pages/SaveedJob";

import "./App.css";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/onboarding",
        element: <Onboarding />,
      },
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/job-listing",
        element: <JobListing />,
      },
      {
        path: "/my-jobs",
        element: <MyJobs />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-jobs",
        element: <SaveedJob />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
