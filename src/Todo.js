import { useState } from "react";

function Todo() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const [editIndex, setEditIndex] = useState(null); // 현재 편집 중인 항목의 인덱스
  const [editToDo, setEditToDo] = useState(""); // 편집 중인 항목의 값

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

  const onClickEditTodo = (index) => {
    if (editIndex === index) {
      setEditIndex(null); // 이미 편집 중인 항목을 다시 클릭하면 편집 종료
      setEditToDo("");
    } else {
      setEditIndex(index); // 해당 항목을 편집 모드로 설정
      setEditToDo(toDos[index]);
    }
  };

  const onEditChange = (event) => setEditToDo(event.target.value);

  const onEditSubmit = (event) => {
    event.preventDefault();
    if (editToDo === "") {
      return;
    }
    // 수정된 값으로 할 일 목록 갱신
    setToDos((currentArray) => currentArray.map((item, idx) => (idx === editIndex ? editToDo : item)));
    setEditToDo(""); // 입력창 초기화
    setEditIndex(null); // 편집 종료
  };

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
              {editIndex === index ? (
                <form action="" onSubmit={onEditSubmit}>
                  <input onChange={onEditChange} type="text" value={editToDo} />
                  <button>☑️</button>
                </form>
              ) : null}
            </span>
            <button onClick={() => onClickEditTodo(index)}>✍️</button>
            <button onClick={() => onClickDelTodo(index)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
