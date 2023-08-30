import React, { useState } from "react";
import MidDiv from "./components/midDiv";
import './index.css'
import questions from "./components/api";
function App() {
  const [data, setData] = useState(questions)
  return (
    <div>
      <div className="main-div">
        <div className="mid-div">
          <h1 className="text-center">Questions</h1>
          <div className="underline">

          </div>
          {data.map((all) => {
            return(
              <div key={all.id}>
                <MidDiv id={all.id} title={all.title} info={all.info}/>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default App;
