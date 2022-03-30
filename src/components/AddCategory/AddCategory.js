import React from 'react'
import { useState } from 'react'

export const AddCategory = ({ onAdd }) => {
    const [text, setText] = useState("");

    const onSubmit = (e) => {
        e.preventDefault();
        if(!text) {
            alert("Please add a category");
            return;
        }

        onAdd({text});
        setText("");
    }

    return (
        <div className="mb-3">
            <form onSubmit={onSubmit}>
                <label htmlFor="exampleFormControlInput1" className="form-label">Category Name</label>
                <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="Personal" style={{marginBottom: "15px"}}  value={text} onChange={(e) => {setText(e.target.value)}}/>
                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}
