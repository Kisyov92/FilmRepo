import popcornImg from "./img/popcorn.jpg";
import logo from "./img/logo.png";

function App() {
  return (
    <header
      style={{ "--image-url": `url(${popcornImg})` }}
      className="bg-[image:var(--image-url)] h-[500px] bg-cover bg-[center_bottom_-500px]"
    >
      <nav className="bg-violet-500 flex justify-between items-center w-[1024px] mx-auto px-10 rounded-md py-1">
        <img src={logo} alt="FilmRepo's logo" className="w-60" />
        <ul>
          <li>Login</li>
        </ul>
      </nav>
      <form>
        <input type="text" />
      </form>
    </header>
  );
}

export default App;
