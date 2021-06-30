//완료
import React from 'react';
import { Route } from 'react-router';
import {BrowserRouter} from "react-router-dom";

import styled from "styled-components";

import Write from "./Write";
import WordList from "./WordList";

/**
 * BrowserRouter를 사용해서 라우터를 잡아줍니다.
 * /에는 목록 페이지를, /write에는 작성 페이지를 엮어줍니다. (path는 각각의 주소를, component에는 각각 페이지를 담당하는 컴포넌트를 넣어줘요!)
 * 
 */
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


// 가장 바깥에 있을 div 스타일을 잡아줄거예요.
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
