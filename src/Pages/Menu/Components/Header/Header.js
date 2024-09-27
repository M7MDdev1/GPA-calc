import { Link } from "react-router-dom";
import Home from "./Home.svg";

export default function Header({ title }) {
  return (
    <div className={"bg-teal-500 p-6 shadow-xl flex flex-row justify-center"}>
      <h1 className={"text-white text-3xl font-bold"}>{title}</h1>
      <button className={" ml-3"}>
        <Link to={"/"}>
          <img src={Home} />
        </Link>
      </button>
    </div>
  );
}
