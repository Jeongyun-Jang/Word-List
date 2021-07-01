//완료
import React from 'react';
import { Route } from 'react-router';
import {BrowserRouter} from "react-router-dom";

import styled from "styled-components";

import Write from "./Write";
import WordList from "./WordList";

const App = () => {
  
  return (
    <React.Fragment>
      <Container>
        <BrowserRouter>
          <Route path="/" exact component={WordList} />
          <Route path="/write" exact component={Write} />
        </BrowserRouter>
      </Container>
    </React.Fragment>
  );
}


const Container = styled.div`
  max-width: 350px;
  min-height: 60vh;
  padding: 16px;
  margin: 20px auto;
  border-radius: 5px;
  border: 1px solid #ddd;
  flex-direction: column;
  background-color: #E2FFF8;
  display: flex;
`;

export default App;
