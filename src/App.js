import React, { useRef } from "react";
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

/* ✅ HOME PAGE */
const Home = () => {
  const upcomingRef = useRef(null);

  const scrollToUpcoming = () => {
    upcomingRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar />
      <HeroSection scrollToUpcoming={scrollToUpcoming} />
      <WhyJoin />

      {/* 👇 TARGET SECTION */}
      <div ref={upcomingRef}>
        <UpcomingWebinar />
      </div>

      <WhatYouLearn />
      <IncludedForAttendees />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
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
