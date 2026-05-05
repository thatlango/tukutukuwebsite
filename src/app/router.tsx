import { createBrowserRouter } from "react-router";
import SiteLayout from "./layout";
import HomePage from "./page";
import AboutPage from "./about/page";
import ServicesPage from "./services/page";
import CaseStudiesPage from "./case-studies/page";
import ProgramsPage from "./programs/page";
import InnovationPage from "./innovation/page";
import InvestorsPage from "./investors/page";
import ContactPage from "./contact/page";
import InsightsPage from "./insights/page";
import { RouteError } from "./components/RouteError";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <SiteLayout />,
    errorElement: <RouteError />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "about", element: <AboutPage /> },
      { path: "services", element: <ServicesPage /> },
      { path: "case-studies", element: <CaseStudiesPage /> },
      { path: "programs", element: <ProgramsPage /> },
      { path: "innovation", element: <InnovationPage /> },
      { path: "investors", element: <InvestorsPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "insights", element: <InsightsPage /> },
    ],
  },
]);
