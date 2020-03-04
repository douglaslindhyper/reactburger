import React from "react";
import "./App.css";

import { Query } from "react-apollo";
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";

import Components from "./components";

const QUERY_STORYBLOK = gql`
  {
    BurgerItem(id: "burger") {
      id
      slug
      content {
        _uid
        component
        body
      }
    }
  }
`;

function App() {
  const { loading, data } = useQuery(QUERY_STORYBLOK);

  if (data === undefined) return <p className="loading">loading...</p>;

  return <div className="App">{Components(data.BurgerItem.content)}</div>;
}

export default App;
