import React, {Component} from 'react'
import Greeting from '../Greeting/Greeting'
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Homepage from './Homepage';
import About from './About';
import NotFound from './NotFound';

const Items = [
  'Lorem Ipsum',
  'Ipsum Dipsum',
  'Foo Bar',
  'A little black cat',
  'A lazy fox',
  'A jumping dog'
];

const doSearch = term => {
  if(!term)
      return Items

  return Items.filter(
    item => item.toLowerCase().indexOf(term.toLowerCase()) !== -1)
  
}



const Search = () => {
  console.log(useLocation())
  const query = new URLSearchParams(useLocation().search)
  const term = query.get('q')

  const returned = doSearch(term)

  console.log(query)
  return (
    <div>
    <div>Search</div>
    
    <ul>
      {returned.map(t => (<li key={t}>{t}</li>))}
    </ul>
    </div>
  )

}


export default Search;
