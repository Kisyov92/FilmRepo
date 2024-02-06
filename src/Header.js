import popcornImg from "./img/popcorn.jpg";
import logo from "./img/logo.png";
import { useEffect, useState } from "react";

// import {
//   createUserWithEmailAndPassword,
//   onAuthStateChanged,
//   signInWithEmailAndPassword,
//   signOut,
// } from "firebase/auth";
// import { auth } from "./config/firebase";

function Header({ moviesNum, onSetQuery }) {
  const [inputValue, setInputValue] = useState("");
  // const [userAction, setUserAction] = useState("");
  // const [registerEmail, setRegisterEmail] = useState("");
  // const [registerPassword, setRegisterPassword] = useState("");
  // const [loginEmail, setLoginEmail] = useState("");
  // const [loginPassword, setLoginPassword] = useState("");
  // const [user, setUser] = useState({});

  useEffect(() => {
    const timer = setTimeout(() => {
      onSetQuery(inputValue);
    }, 300);
    return () => clearTimeout(timer);
  }, [inputValue]);

  function handleInputChange(e) {
    setInputValue(e.target.value);
  }

  // useEffect(() => {
  //   onAuthStateChanged(auth, (currentUser) => {
  //     if (currentUser) {
  //       setUser(currentUser);
  //       setUserAction("");
  //       // onLoginAndLogout(currentUser.email);
  //     }
  //   });
  // }, []);

  // function handleUserAction(action) {
  //   setUserAction(action);
  // }

  // async function handleRegister(e) {
  //   e.preventDefault();
  //   try {
  //     const user = await createUserWithEmailAndPassword(
  //       auth,
  //       registerEmail,
  //       registerPassword,
  //     );
  //     setRegisterEmail("");
  //     setRegisterPassword("");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }
  // async function handleLogin(e) {
  //   e.preventDefault();
  //   try {
  //     const user = await signInWithEmailAndPassword(
  //       auth,
  //       loginEmail,
  //       loginPassword,
  //     );
  //     setLoginEmail("");
  //     setLoginPassword("");
  //   } catch (err) {
  //     console.log(err.message);
  //   }
  // }

  // async function handleLogout() {
  //   await signOut(auth);
  //   setUser({});
  // }

  // let username;
  // if (user?.email) {
  //   const separator = user.email.split("").indexOf("@");
  //   username = user.email.split("").slice(0, separator).join("");
  // }

  return (
    <header
      style={{ "--image-url": `url(${popcornImg})` }}
      className="relative h-[500px] bg-[image:var(--image-url)] bg-cover bg-[center_bottom_-500px] text-stone-50"
    >
      <nav className="mx-auto flex w-[1024px] items-center justify-between rounded-md bg-[#6741d9] px-10 py-1">
        <img src={logo} alt="FilmRepo's logo" className="w-60" />
        <p>
          No user authentication avaivable. All created list will be stored in
          local storage
        </p>
        {/* {!username && (
          <ul className="flex gap-5">
            <li
              className="cursor-pointer rounded-xl bg-[#7654dd] px-4 py-2 hover:bg-[#8567e1]"
              onClick={() => handleUserAction("login")}
            >
              Login
            </li>
            <li
              className="cursor-pointer rounded-xl bg-[#7654dd] px-4 py-2 hover:bg-[#8567e1]"
              onClick={() => handleUserAction("register")}
            >
              Register
            </li>
          </ul>
        )} */}
        {/* {username && (
          <>
            <p>Hi {username}. We're glad to have you here.</p>
            <button
              className="cursor-pointer rounded-xl bg-[#7654dd] px-4 py-2 hover:bg-[#8567e1]"
              onClick={handleLogout}
            >
              Logout
            </button>
          </>
        )} */}
      </nav>
      {/* {userAction === "register" && (
        <div className="mx-auto mt-10 flex w-max flex-col items-center gap-5 rounded-lg bg-[#6741d9] px-10 py-5">
          <h3 className="text-2xl">Create an accout</h3>
          <form className="flex flex-col gap-3" onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Enter Email"
              className="px-2 py-1 text-stone-700"
              onChange={(e) => setRegisterEmail(e.target.value)}
              value={registerEmail}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="px-2 py-1 text-stone-700"
              onChange={(e) => setRegisterPassword(e.target.value)}
              value={registerPassword}
            />
            <button className="cursor-pointer rounded-xl bg-[#7654dd] px-4 py-2 hover:bg-[#8567e1]">
              Register
            </button>
          </form>
        </div>
      )} */}
      {/* {userAction === "login" && (
        <div className="mx-auto mt-10 flex w-max flex-col items-center gap-5 rounded-lg bg-[#6741d9] px-10 py-5">
          <h3 className="text-2xl">Log in to your accont</h3>
          <form className="flex flex-col gap-3" onSubmit={handleLogin}>
            <input
              type="text"
              placeholder="Enter Email"
              className="px-2 py-1 text-stone-700"
              onChange={(e) => setLoginEmail(e.target.value)}
              value={loginEmail}
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="px-2 py-1 text-stone-700"
              onChange={(e) => setLoginPassword(e.target.value)}
              value={loginPassword}
            />
            <button className="cursor-pointer rounded-xl bg-[#7654dd] px-4 py-2 hover:bg-[#8567e1]">
              Log in
            </button>
          </form>
        </div>
      )} */}
      <form
        onSubmit={(e) => e.preventDefault()}
        className="absolute bottom-0 right-[50%] flex translate-x-[50%] translate-y-[50%] items-center gap-x-6 rounded-md bg-[#6741d9] p-3"
      >
        <input
          type="text"
          placeholder="Search movies..."
          className="rounded-md bg-stone-50 px-2 py-1 text-2xl text-[#333] outline-none"
          onChange={handleInputChange}
          value={inputValue}
        />
        <div className="text-xl">{moviesNum} Results found</div>
      </form>
    </header>
  );
}

export default Header;
