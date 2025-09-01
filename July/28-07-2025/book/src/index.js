import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Book, {BookList} from './Book';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<>
  <h1>Books Title</h1>
  <BookList />
  <h1>Authors</h1>
  <Book />
</>
);