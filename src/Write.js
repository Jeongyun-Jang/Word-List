
import styled from "styled-components";

import {useDispatch} from "react-redux";
import {createWord} from "./redux/modules/word";

import { addWordFB } from "./redux/modules/word";
import React from "react";

const Write = (props) => {

  const dispatch = useDispatch();

  const word_ref = React.useRef(null);
  const desc_ref = React.useRef(null);
  const example_ref = React.useRef(null);
  let count = 0;  

  const addWord = () =>{
        const word = {          
          word: word_ref.current.value,
          desc: desc_ref.current.value,
          example: example_ref.current.value,
        }

        {/*this.props.create(word);*/}

        if(dispatch(createWord(word)))  {
          console.log(word);
          count += 1;
          dispatch(addWordFB(word))
        }
        props.history.replace("/");
    
    }

  return (
    <React.Fragment>{/*로 감싸서 반환한다면 Fragment는 dom에 추가되지 않기*/}
      <Title>단어 추가하기</Title>
      <InputWrapper>
        <p>단어</p>
        <input ref={word_ref} />
      </InputWrapper>
      <hr/>

      <InputWrapper>
        <p>설명</p>
        <input ref={desc_ref} />
      </InputWrapper>
      <hr/>
      <InputWrapper>
        <p>예시</p>
        <input ref={example_ref} />
      </InputWrapper>

      {/* 아직은 이 버튼에 아무런 동작도 주지 않을거예요 :) */}
      <Button onClick={addWord}>추가하기</Button>
    </React.Fragment>
  );
};

// 제목 스타일을 잡아줄 거예요.
const Title = styled.h1`
  width: 40vw;
  margin: 8px auto;
`;

// input이 들어갈 부분을 감싸줄거예요. 배경색도 흰색으로 줘볼게요!
// 이 div 아래에 있는 p 태그에 접근할 때는 & > p로 접근할 수 있어요.
// 이 div 아래에 있는 input 태그에 접근할 때는 & > input으로 접근할 수 있어요.
const InputWrapper = styled.div`
  width: 20vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 8px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
  & > p {
    text-decoration: underline;
    font-size: 8px;
    color: #888888;
    margin: 4px 0px;
  }

  & > input {
    border: 1px solid #000000;
    width: 100%;
    padding: 2px 4px;
    margin: 4px 0px;
    box-sizing: border-box;
  }
`;

// 추가하기 버튼 스타일을 잡아줄거예요.
const Button = styled.button`
  background-color: #6100ff;
  color: #ffffff;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  padding: 8px 0px;
  margin: 16px;
`;

export default Write;
