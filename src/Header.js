import popcornImg from "./img/popcorn.jpg";
import logo from "./img/logo.png";

function Header() {
  return (
    <header
      style={{ "--image-url": `url(${popcornImg})` }}
      className="relative h-[500px] bg-[image:var(--image-url)] bg-cover bg-[center_bottom_-500px] text-stone-50"
    >
      <nav className="mx-auto flex w-[1024px] items-center justify-between rounded-md bg-[#6741d9] px-10 py-1">
        <img src={logo} alt="FilmRepo's logo" className="w-60" />
        <ul>
          <li>Login</li>
        </ul>
      </nav>
      <form className="absolute bottom-0 right-[50%] flex translate-x-[50%] translate-y-[50%] items-center gap-x-6 rounded-md bg-[#6741d9] p-3">
        <input
          type="text"
          placeholder="Search movies..."
          className="bg-stone-50 px-2 py-1 text-2xl text-[#333]"
        />
        <div className="text-xl">4 Results found</div>
      </form>
    </header>
  );
}

export default Header;
