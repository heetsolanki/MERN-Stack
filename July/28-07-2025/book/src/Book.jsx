import React from 'react';
import ReactDOM from 'react-dom/client';

function BookList() {
    return <div>
        <ol>
            <li>Watchmen</li>
            <li>The Dark Knight Returns</li>
            <li>Spider-Man (The Amazing Spider-Man)</li>
            <li>Maus</li>
            <li>Saga</li>
        </ol>
    </div>
}

function Book() {
    return <div>
        <ol>
            <li>Alan Moore</li>
            <li>Frank Miller</li>
            <li>Stan Lee</li>
            <li>Art Spiegelman</li>
            <li>Brian K. Vaughan</li>
        </ol>
    </div>
}

export default Book;
export { BookList };