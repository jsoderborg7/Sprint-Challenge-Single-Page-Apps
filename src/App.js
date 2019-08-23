import React from "react";
import TabNav from "./components/TabNav.js";
import Header from "./components/Header.js";
import WelcomePage from "./components/WelcomePage.js";
import CharacterList from "./components/CharacterList";
import LocationList from "./components/LocationsList";
import EpisodeList from "./components/EpisodeList";
import {Route} from "react-router-dom";



export default function App() {
  return (
    <main>
      <Header />
      <TabNav />
      <Route exact path="/character" component={CharacterList} />
      <Route exact path="/location" component={LocationList} />
      <Route exact path="/episode" component={EpisodeList} />
      <WelcomePage />
    </main>
  );
}
