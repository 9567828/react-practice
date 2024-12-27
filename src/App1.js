import { useState, useEffect } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye");
  // }
  // function hiFn() {
  //   console.log("created");
  //   return byeFn;
  // }
  useEffect(() => {
    console.log("hi");
    return () => console.log("bye");
  }, []);
  useEffect(function () {
    console.log("hi");
    return function () {
      console.log("bye");
    };
  }, []);
  // useEffect(() => {
  //   effectFn();
  //   // cleanup function 컴포넌트가 없어질 때 어떤 분석결과를 보내고 싶을 때, component가 사라지거나 나타날 때 console.log에 보여주고 싶을 때를 위해서
  //   return () => console.log("destroyed");
  // }, []);
  return <h1>Hello</h1>;
}

function App1() {
  const [showing, setShowing] = useState(false);
  const onClick = () => setShowing((prev) => !prev);
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default App1;

// function App() {
//   // 0을 넣으면 0이 기본값이 된다
//   const [counter, setValue] = useState(0);
//   // 기본 값은 빈문자열
//   const [keyword, setKeyword] = useState("");
//   const onClick = () => setValue((prev) => prev + 1);
//   // 입력할 때마다 한글자씩 렌더링 되고, 버튼을 클릭할 때마다 함께 렌더 된다
//   const onChange = (event) => setKeyword(event.target.value);
//   // 입력을 한 번만 받아보도록 한다
//   useEffect(() => {
//     if (keyword !== "" && keyword.length > 5) {
//       console.log("글자를 입력할 때만 실행 된다");
//     }
//   }, [keyword]);
//   useEffect(() => {
//     console.log("i run when 'counter' changes");
//   }, [counter]);
//   // 첫 번째 컴포넌트 이후 렌더를 한 번만 실행되도록 해야할 필요가 있다. api 자꾸 호출하는 것을 방지하기 위해서임
//   // console.log("i run all the time");
//   useEffect(() => {
//     console.log("i run only once");
//   }, []);
//   // useEffect는 한 번  만 실행 시킨다
//   // useEffect(iRunOnlyOnce, []);
//   return (
//     <div>
//       <input onChange={onChange} value={keyword} type="text" placeholder="검색" />
//       <h1>{counter}</h1>
//       <button onClick={onClick}>클릭크!</button>
//     </div>
//   );
// }
