'use client';
import React, { useContext, useEffect, useRef } from "react";
import ReactFullpage, { fullpageApi } from '@fullpage/react-fullpage';
import GlobalContext from "./utils/global-context";
import Landing from "./components/Home/Landing";
import About from "./components/Home/About";

interface GlobalContextValue {
  active: [getActive: { index: number; from: string }, setActive: React.Dispatch<React.SetStateAction<{ index: number; from: string }>>];
}

const HomePage = () => {
  const { active } = useContext(GlobalContext) as GlobalContextValue;
  const [getActive, setActive] = active;
  const fullpageApiRef = useRef<fullpageApi | null>(null);

  useEffect(() => {
    if (!fullpageApiRef.current) return;
    const { index, from } = getActive;
    if (from === 'header') fullpageApiRef.current.moveTo(index + 1);
  }, [getActive]);

  const handleLeave = (origin: any, destination: any) => {
    setActive({ index: destination.index, from: 'home' });
  };

  return (
    <ReactFullpage
      licenseKey="gplv3-license"
      scrollingSpeed={1000}
      credits={{ enabled: false }}
      onLeave={handleLeave}
      render={({ fullpageApi }) => {
        fullpageApiRef.current = fullpageApi;

        return (
          <ReactFullpage.Wrapper>
            <div className="section">
              <Landing />
            </div>
            <div className="section">
              <About />
            </div>
          </ReactFullpage.Wrapper>
        );
      }}
    />
  );
};

export default HomePage;