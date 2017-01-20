import React from 'react'
import { IndexLink, Link } from 'react-router'
import './Header.scss'

export const Header = () => (
  <div>
    <h1>Todo</h1>
    <IndexLink to='/' activeClassName='route--active'>
      something
    </IndexLink>
    {' · '}
    <Link to='/somethingelse?' activeClassName='route--active'>
      something
    </Link>
  </div>
)

export default Header
