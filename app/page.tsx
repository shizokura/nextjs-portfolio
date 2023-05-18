'use client';
import Landing from "./components/Home/Landing"
import About from "./components/Home/About";
import ReactFullpage from '@fullpage/react-fullpage';
import GlobalContext from "./utils/global-context";
import { useContext, useEffect } from "react";

const HomePage = () => {
  const { active } = useContext(GlobalContext);
  const [ getActive, setActive ] = active;

  let api = null;

  useEffect(() => {
    if (!api) return;
    const { index, from } = getActive;
    console.log(index, from);
    if (from === 'header') api.moveTo(index + 1);
  }, [ getActive ]);

  return (
    <ReactFullpage
      licenseKey = {'gplv3-license'}
      scrollingSpeed = {1000}
      credits={{ enabled: false }}
      onLeave={(origin, destination) => setActive({ index: destination.index, from: 'home' })}
      render={({ state, fullpageApi }) => {
        api = fullpageApi;

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
  )
}

export default HomePage