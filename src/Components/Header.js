export default function Header({ title }) {
  return (
    <div className={"bg-teal-500 p-6 shadow-xl"}>
      <h1 className={"text-white text-3xl font-bold w-fit mx-auto "}>
        {title}
      </h1>
    </div>
  );
}
