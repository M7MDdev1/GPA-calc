export default function SystemSwitch({system,setSystem}) {

  return (
    <>
      <p>نظام المعدل</p>
      <div className=" inline-grid grid-cols-2">
        <label>4</label>
        <input
          type={"radio"}
          checked={system}
          onChange={(e) => setSystem(e.target.checked)}
        />
        <label>5</label>
        <input
          type={"radio"}
          checked={!system}
          onChange={(e) => setSystem(!e.target.checked)}
        />
      </div>
    </>
  );
}
