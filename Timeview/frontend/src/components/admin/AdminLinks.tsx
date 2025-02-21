import React from 'react'
import { sideBar_links } from '@/utils/links'
import { Link } from 'react-router-dom'
const AdminLinks = () => {
  return (
    <ul className='menu text-base-content'>
      {sideBar_links.map((link) => {
        return (
          <li key={link.path}>
            <Link
              to={link.path}
              className='capitalize'
            >
              {link.label}
            </Link>
          </li>
        )
      })}
    </ul>
  )
}

export default AdminLinks
