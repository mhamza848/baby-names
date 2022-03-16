import React, { Fragment } from "react";

import { NamePicker } from './component/name-picker';
import { Search } from "./component/search";
import { ShortList } from "./component/short-list";
import { ResetSearch } from "./component/reset-search";
import { Footer } from './component/footer';


function App() {

  return (
    <Fragment>
      <Search />
      <NamesContainer />
       <Footer />
    </Fragment>
    
  );
}

function NamesContainer () {
  return (
    <main>
      <ShortList />
      <NamePicker />
       <ResetSearch />
    </main>
  )
}

export default App;
