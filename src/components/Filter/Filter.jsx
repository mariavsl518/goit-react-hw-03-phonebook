import css from './Filter.module.css'
import React from 'react'

export const Filter = ({handleFilterSearch}) => {
  
  return (
    <label htmlFor="filter">
    <span className={css.findHeader}>Find contacts by name</span>
    <input type="text" name="filter" placeholder='Search...'
    className={css.filterInput} 
    onChange={handleFilterSearch}/>
</label>
  )
}

