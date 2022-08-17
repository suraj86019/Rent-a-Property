import React from 'react';
import './styles.css';
import SearchIcon from '@material-ui/icons/Search';

const SearchBar = ({ value, changeInput }) => (
  <div >
    
   
    <h3 className='malti-bar'>
     Search  Properties  to Rent
     </h3>
        
     

    <div className='searchBar-wrap'>
    
    <SearchIcon className='searchBar-icon' />
    <input
      type='text'
      placeholder='search here '
      value={value}
      onChange={changeInput}
    />
    

    </div>
   


   
    
  </div>
  
);

export default SearchBar;
