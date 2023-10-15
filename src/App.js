import Nav from "./components/Nav";
import Routers from "./pages/Routers";
import "./App.css";

function App() {
  return (
    <div className="App">
      {/* 공통 영역 */}
      <Nav />
      {/* 페이지 변환 부분 */}
      <Routers />
    </div>
  );
}

export default App;
