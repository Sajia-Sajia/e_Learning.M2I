import React from 'react'
import { Outlet } from 'react-router-dom'
import Sidebarprof from './Sidebarprof'
import Topbarprof from './Topbarprof'

function Portalprof() {
  return (
    <>
      <div id="wrapper">
        <Sidebarprof />
        <div id="content-wrapper" className="d-flex flex-column">
          <div id="content">
            <Topbarprof />
            <div className='container-fluid'>
              <Outlet></Outlet>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portalprof;

