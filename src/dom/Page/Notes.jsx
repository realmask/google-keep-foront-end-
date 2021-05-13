import React from 'react';
import './notes.css'

function Notes() {
    return (
        <>
            <div className="background">
                <form>
                    <input type="text" placeholder="Take a note..." name="title"></input>
                </form>

            </div>

        </>
    )
}

export default Notes;
