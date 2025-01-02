function FallbackRender({ error }) {
  return (
    <div>
      <p>영화 정보를 확인할 수 없습니다.</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );
}

export default FallbackRender;
