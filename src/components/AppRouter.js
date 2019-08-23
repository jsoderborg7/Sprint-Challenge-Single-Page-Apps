import React from "react";
import {Route} from "react-router-dom";

import WelcomePage from "./WelcomePage";
import CharacterList from "./CharacterList";
import LocationList from "./LocationsList";
import EpisodeList from "./EpisodeList";

export default function AppRouter() {
  return(
    <div>
      <Route exact path="/" component={WelcomePage} />
      <Route exact path="/character" component={CharacterList} />
      <Route exact path="/location" component={LocationList} />
      <Route exact path="/episode" component={EpisodeList} />
    </div>
  );
}