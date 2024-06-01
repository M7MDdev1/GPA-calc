export default function Course({ courseName, Credits, Grade, change }) {
  return (
    <div>
      <input
        className={" bg-slate-300 shadow-lg border-3 border-black mb-7"}
        value={courseName}
        onChange={change}
        name="CourseName"
      />
      <select value={Grade} onChange={change} name="Grade">
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
        className={"shadow-lg border-3 border-black w-14"}
        value={Credits}
        onChange={change}
        name="Credits"
      />
    </div>
  );
}
