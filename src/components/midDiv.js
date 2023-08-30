import React, { useState } from "react";
import '../index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function MidDiv({ id, title, info }) {
    const [count, setCount] = useState(1);
    const handleCount = () => {
        setCount(count + 1)
    }
    return (
        <div>
            <div>
                <div className="single-divs">
                    <h5 className="question-heading">{title}</h5>
                    <button className="collups-btn" type="button" onClick={handleCount}>
                        {count % 2 === 0 ? "-" : "+"}
                    </button><br /><br />
                    {count % 2 === 0 && (<p className="info-style">{info}</p>)}
                </div>
            </div>
        </div>
    );
}

export default MidDiv;
