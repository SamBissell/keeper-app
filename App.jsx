import React from "react";
import Header from "./Header";
import Note from "./Note";
import Footer from "./Footer";
import notes from "../notes.js"

function createNote(note) {
    return (
        <Note
            key={note.id}
            title={note.title}
            content={note.content}
        />
    );
}

const App = function () {
    return (
        <div>
            <Header />
            <div>
                {notes.map((note) => {
                    return (
                        <Note
                            key={note.id}
                            title={note.title}
                            content={note.content}
                        />
                    )
                })}
            </div>



            <Footer />
        </div>
    )
}

export default App;
