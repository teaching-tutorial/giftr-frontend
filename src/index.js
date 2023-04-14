import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PeopleList from './pages/people-list/people-list';
import GiftList from './pages/gift-list/gift-list';
import AddEditGiftIdea from './pages/add-edit-gift-idea/add-edit-gift-idea';
import AddEdit from './pages/add-edit/add-edit';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> 
    <Routes>  
      <Route path="/" element={<App />} />
      <Route path="/people-list" element={<PeopleList />} />
      <Route path="/gift-list" element={<GiftList />} />
      <Route path="/add-edit-gift-idea" element={<AddEditGiftIdea />} />
      <Route path="/add-edit" element={<AddEdit />} />

    </Routes>

    </BrowserRouter>
  </React.StrictMode>
);
