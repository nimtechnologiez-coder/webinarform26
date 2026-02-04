import React from "react";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import WhyJoin from "./components/WhyJoin";
import UpcomingWebinar from "./components/UpcomingWebinar";
import WhatYouLearn from "./components/WhatYouLearn";
import IncludedForAttendees from "./components/IncludedForAttendees";
import Footer from "./components/footer";

import Hero from "./components/hero";
import Learn from "./components/learn";
import DifferenceSection from "./components/diffsec";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <HeroSection />
        <WhyJoin />
        <UpcomingWebinar />
        <WhatYouLearn />
        <IncludedForAttendees />
        <Footer />
      </>
    ),
  },


   {
    path: "/about",
    element: (
      <>
        <Navbar />
        <Hero />
        <Learn />
        <DifferenceSection />
        <Footer />
      </>
    ),
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
