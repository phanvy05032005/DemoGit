
import './App.css'

function Header() {
  return (
    <>
      <h1>Chào mừng bạn đến với thế giới React</h1>
      <p>
        Hôm nay là <strong>28/09/2025</strong>. Thời gian hiện tại{" : "}
        <strong>10:00 AM</strong>
      </p>
    </>
  )
};

function HomeWork() {
  return (
    <>
      <h1> Danh sách công việc của tôi</h1>
      <ul>
        <li>Học ReactJS</li>
        <li>Học NodeJS</li>
        <li>Học SWP</li>
      </ul>
      <p>Chúc bạn hoàn thành công việc tốt nhất trong hôm nay</p>
    </>
  )
}

function App() {
  return (
    <>
      <h1>Đây là tiêu đề</h1>
      <p>lorem ipsum dolor sit.</p>

      <Header></Header>
      <HomeWork></HomeWork>

    </>
  )
}

export default App
