import { getNotesFromLS, saveNotesToLS } from "@/utilities/localStorage/notes";
import "./notes.scss";
import { useState } from "react";

const Notes = () => {

    const [value, setValue] = useState(getNotesFromLS() || "");

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        const text = e.target.value

        saveNotesToLS(text)
        setValue(text)
    }

    return (
        <div className="notes-layout">
            <label htmlFor="all-notes">All notes</label>

            <textarea id="all-notes" value={value} onChange={handleChange} />
        </div>
    );
}

export default Notes;