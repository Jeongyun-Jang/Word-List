//수정중
import { firestore } from "../../firebase";

// Actions
const LOAD = "word/LOAD";
const CREATE = "word/CREATE";
//const UPDATE = "bucket/UPDATE";


const initialState = {
    word_list: [
        {
        id: "list_0",
        word: "ㅎ1ㅎ1",
        desc: "히히를 변형한 단어. 숫자 1을 'ㅣ'로 쓴다.",
        example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
        {
        id: "list_1",
        word: "ㅎrㅎrㅎr",
        desc: "하하를 변형한 단어. r을 'ㅏ'로 쓴다.",
        example: "저 친구가 초콜릿을 줬어. ㅎrㅎr",
        },
        {
        id: "list_2",
        word: "ㅎHㅎH",
        desc: "해해를 변형한 단어. H을 'ㅐ'로 쓴다.",
        example: "저 친구가 초콜릿을 줬어. ㅎ1ㅎ1",
        },
    ]
};

const word_db = firestore.collection("word");

// Action Creators
export const loadWord = (word_list) => {
  return { type: LOAD, word_list };
};

export const createWord = (word) => {
  return { type: CREATE, word };
};


// 파이어베이스랑 통신하는 부분
export const loadWordFB = () => {
  return function (dispatch) {
    word_db.get().then((docs) => {
      let word_data = [];
      docs.forEach((doc) => {
        // 도큐먼트 객체를 확인해보자!
        console.log(doc);
        // 도큐먼트 데이터 가져오기
        console.log(doc.data());
        // 도큐먼트 id 가져오기
        console.log(doc.id);

        if (doc.exists) {
          word_data = [...word_data, { id: doc.id, ...doc.data() }];
        }
      });

      console.log(word_data);
      // 이제 액션이 디스패치 되도록 해줍시다! 그러면 끝!
      dispatch(loadWord(word_data));
    });
  };
};

export const addWordFB = (word) => {
  return function (dispatch) {

    // 생성할 데이터를 미리 만들게요!
    let word_data = { id: word.id, word: word.word, desc: word.desc, example: word.example };

    // add()에 데이터를 넘겨줍시다!
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
        if(action.word.length >0){
          return { word_list: action.word_list };
        }
  
        return state;
      }

    case "word/CREATE": {
      const new_word_list = [...state.word_list, action.word,];
      //return { ...state, word_list: new_word_list };
      return { word_list: new_word_list };
    }


    default:
      return state;
  }
}
