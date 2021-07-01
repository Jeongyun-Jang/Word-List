import React ,{useEffect} from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { loadWordFB} from "./redux/modules/word";
import { withRouter} from 'react-router-dom';


const WordList = (props) => {
  
  const dispatch = useDispatch();

  const word_list = useSelector((state) => state.word.word_list); //word_list는 딕셔너리 형태
  
  //실시간으로 계속해서 렌더링 되면 안됨 dispatch 될 때마다 렌더링 되도록.. 
  useEffect( ()=>{
    console.log("word_list", word_list)
    dispatch(loadWordFB());
  }, dispatch);
  
  
  return (
    <React.Fragment>
      <Title>My dictionary</Title>
      { word_list.map((w) => {
        return (
          <Card key={w.id}>
            <Text color="#888888" size="8px" underline>
              단어
            </Text>
            <Text>{w.word}</Text>
            <Text color="#888888" size="8px" underline>
              설명
            </Text>
            <Text>{w.desc}</Text>
            <Text color="#888888" size="8px" underline>
              예시
            </Text>
            <Text color="blue">{w.example}</Text>
          </Card>
        );
      })}
      <AddButton
        onClick={() => {
          props.history.push("/write");
        }}
      >
        +
      </AddButton>
    </React.Fragment>
  );
};

const Title = styled.h1`
  width: 60vw;
  margin: 8px auto;
`;

const Card = styled.div`
  width: 40vw;
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 4px 16px;
  margin: 8px auto;
  box-sizing: border-box;
  background-color: #ffffff;
`;

const Text = styled.p`
  font-size: ${(props) => (props.size ? `${props.size}` : "16px")};
  ${(props) => (props.underline ? "text-decoration: underline;" : "")}
  ${(props) => (props.color ? `color: ${props.color};` : "")}
  margin: 4px 0px;
`;

const AddButton = styled.button`
  position: fixed;
  bottom: 20px;
  right: 20px;
  width: 50px;
  height: 50px;
  border-radius: 50px;
  background-color: #6100ff;
  color: #fff;
  font-size: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default withRouter(WordList);
