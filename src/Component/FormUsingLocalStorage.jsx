import React, { useEffect, useState } from "react";

function FormUsingLocalStorage() {
  const [task, setTask] = useState("");
  // const [count, setCount] = useState(0);
  const [display, SetDisplay] = useState([]); // because there is multiple values
  // Addingthe task in the local storage
  const handlingInput = (e) => {
    setTask(e.target.value);
  };
  const AddingTask = () => {
    if (task) {
      //setCount((prev) => prev + 1); karan overwrite hote refresh kela tar count 0 hote  and 0 key cha task var dusra task yete
      localStorage.setItem(Date.now(), task);
      SetDisplay((prev) => [...prev, task]);
      setTask("");
    } else {
      alert("Enter In The Input Field");
    }
  };

  // so jab bhi add ho To display hone ke liye used the useEffect
  const today = `${new Date().getDate()}-${
    new Date().getMonth() + 1
  }-${new Date().getFullYear()}`;
  useEffect(() => {
    let iteam = [];
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      iteam.push(localStorage.getItem(key));
    }
    SetDisplay(iteam);
  }, []);

  const Remove = (task) => {
    let key = localStorage.key(task);
    localStorage.removeItem(key);
    SetDisplay((prev) => prev.filter((iteam) => iteam != task));
  };

  return (
    <div style={{ border: "2px solid black" }}>
      <h1>Task Schedular</h1>
      <input
        type="text"
        placeholder="Enter the Task"
        value={task}
        onChange={handlingInput}
        style={{
          border: "2px solid cyan",
          height: "30px",
          width: "60%",
          margin: "0 10px",
        }}
      />
      <button
        onClick={AddingTask}
        style={{
          color: "black",
          background: "yellow",
          border: "2px solid balck",
        }}
      >
        Adding
      </button>
      {/* // <button onClick={displayTask}>DisplayIteam</button> */}
      <br />
      <br />
      <hr />
      <h3>All Task of {today} </h3>
      {display.map((task, index) => (
        <>
          {" "}
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h4 key={index} style={{ position: "relative" }}>
              {index + 1} : {task}
            </h4>
            <button
              onClick={() => Remove(task)}
              style={{
                right: "0",
                borderRadius: "50%",
                height: "50px",
                border: "2px solid black",
              }}
            >
              R
            </button>
          </div>
        </>
      ))}
    </div>
  );
}

export default FormUsingLocalStorage;
