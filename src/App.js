import { useState, useEffect } from "react";

function App() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const onChange = (e) => setToDo(e.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // 일반적인 js에서 과정 element를 직접 수정한다.
    // toDos.push()
    // element를 직접 수정하지 않고 어레이(toDos)에 들어가게 하기
    // toDo값 이후 새로운 내용을 추가해 array를 만든다.
    // setToDos가 [] 이기 때문에 currentArray(함수) 자체가 [] 가 된다.
    setToDos((currentArray) => [toDo, ...currentArray]);
    // 값이 입력 되면 기본값으로 돌린다
    setToDo("");
  };
  const onClickDelTodo = (index) => {
    setToDos((newTodos) => newTodos.filter((_, todoIndex) => todoIndex !== index));
  };
  const onClickEditTodo = (text, index) => {
    const isTodo = toDos.find((_, todoIndex) => todoIndex === index);
    if (isTodo === text) {
      console.log("맞다");
    } else {
      console.log("아니다");
    }
    // if (!isTodo) {
    //   console.log("아닌놈");
    // } else {
    //   console.log(isTodo);
    //   setIsEdit((prev) => !prev);
    // }
  };
  const onEditSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    console.log(event.target.value);
    setToDo("");
  };
  const onEditChange = (event) => console.log(event.target.value);
  return (
    <div>
      <h1>내 할일 ({toDos.length})</h1>
      <form action="" onSubmit={onSubmit}>
        <input onChange={onChange} value={toDo} type="text" placeholder="할일을 입력하슈" />
        <button>추가</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, index) => (
          <li key={index}>
            <span>
              {item}
              {isEdit ? (
                <form action="" onSubmit={onEditSubmit}>
                  <input onChange={onEditChange} type="text" placeholder={item} />
                  <button>☑️</button>
                </form>
              ) : null}
            </span>
            <button onClick={() => onClickEditTodo(item, index)}>✍️</button>
            <button onClick={() => onClickDelTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
