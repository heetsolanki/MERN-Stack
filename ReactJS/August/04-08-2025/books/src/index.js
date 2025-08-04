import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Books from './Books';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <center>
    <table border="1px" cellPadding="5px">
      <tr>
        <td>Book Title</td>
        <td>Author Name</td>
        <td>Price</td>
      </tr>

      <Books title = "To Kill a Mockingbird" author = "Harper Lee" price = "350"/>
      <Books title = "The Great Gatsby" author = "F. Scott Fitzgerald" price = "599"/>
      <Books title = "1984" author = "George Orwell" price = "250"/>
      <Books title = "Pride and Prejudice" author = "Jane Austen" price = "299"/>
      <Books title = "The Lord of the Rings" author = "J.R.R. Tolkien" price = "499"/>
    </table>
  </center>
</>
);
