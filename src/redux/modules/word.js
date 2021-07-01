import { firestore } from "../../firebase";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";

const word_db = firestore.collection("word");


const initialState = {
    word_list: []
};

// Action Creators
export const loadWord = (word) => {
  return { type: LOAD, word };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};


export const loadWordFB = () => {
  return function (dispatch) {//미들웨어 부분
    word_db.get().then((docs) => {//응답 받은 모든 documant를 then에서 가져옴
      let word_data = [];//리덕스에 넣기 위한 배열
      docs.forEach((doc) => {
        if (doc.exists) {
            word_data = [...word_data, doc.data()]; //word_data = [...word_data, { id: doc.id, ...doc.data() }]; //id를 가져와 수정 삭제 할때는 주석처리 같이함
        }
      });

      console.log(word_data);
      // 이제 액션이 디스패치
      dispatch(loadWord(word_data));
    });
  };
};

export const addWordFB = (word) => {    

  return function (dispatch) {

    let word_data = { word: word.word, desc: word.desc, example: word.example };

    word_db
      .add(word_data)
      .then((docRef) => {
        // id를 추가한다!
        word_data = { ...word_data, id: docRef.id };

        console.log(word_data);

        // 성공했을 때는? 액션 디스패치!
        dispatch(createWord(word_data));
      })
      .catch((err) => {
        // 여긴 에러가 났을 때 들어오는 구간입니다!
        console.log(err);
        window.alert("오류가 났네요! 나중에 다시 시도해주세요!");

      });
  };
};

// Reducer
export default function reducer(state = initialState, action) {
  switch (action.type) {
    // do reducer stuff
    case "word/LOAD": {
        if(action.word.length >0){//비어있지 않다면
          return { word_list: action.word };
        }
  
        return state;
      }

    case "word/CREATE": {
      const new_word_list = [...state.word_list, action.word];
      //return { ...state, word_list: new_word_list };
      return {  ...state, word_list: new_word_list };
    }


    default:
      return state;
  }
}
