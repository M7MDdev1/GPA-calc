import Cross from "./Cross.svg"
export default function Course({ courseName, Credits, Grade, change, remove }) {
  return (
    <div className="flex justify-around items-center mb-3">
      <img src={Cross} alt="Cross" className={"cursor-pointer"} onClick={remove}/>
      <input
        className="bg-[#D9D9D961] p-3 rounded-md mr-2"
        value={courseName}
        onChange={change}
        name="CourseName"
        placeholder="(: اسم المادة"
      />
      <select
        value={Grade}
        onChange={change}
        name="Grade"
        className="bg-[#D9D9D999] rounded-xl p-1 mr-2"
      >
        <option>A+</option>
        <option>A</option>
        <option>B+</option>
        <option>B</option>
        <option>C+</option>
        <option>C</option>
        <option>D+</option>
        <option>D</option>
        <option>F</option>
      </select>
      <input
        className="bg-[#D9D9D999] w-10 rounded-xl"
        value={Credits}
        onChange={change}
        name="Credits"
      />
    </div>
  );
}
