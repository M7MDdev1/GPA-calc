import { Link } from "react-router-dom";

export default function Home() {
  let buttonStyle =
    "text-white bg-[#15B788] px-7 py-3 rounded-2xl font-semibold";
  return (
    <div className={" inline-flex justify-evenly w-full mt-5"}>
      <Link className={buttonStyle} to={"/GPA-calc"}>الفصلي</Link>
      <Link className={buttonStyle}>التراكمي</Link>
      <Link className={buttonStyle}>عنا</Link>
    </div>
  );
}
