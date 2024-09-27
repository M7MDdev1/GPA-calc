import Add from "./Add.svg";
export default function CourseName({ courseName, change }) {
  let text = "(: اسم المادة";
  return (
    <div
      className="bg-[#DEE3EF] p-2 rounded-md mr-2 flex flex-row-reverse text-[#00000080]"
      value={courseName}
      onChange={change}
      name="CourseName"
    >
      <p className=" pl-2">{text}</p>
      <img src={Add} alt="Add Course" />
    </div>
  );
}
