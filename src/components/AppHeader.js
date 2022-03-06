import React from 'react'
import { NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import {CDropdownMenu,CDropdownItem,CDropdownToggle,CDropdown,
  CContainer,
  CHeader,
  CHeaderBrand,
  CHeaderDivider,
  CHeaderNav,
  CHeaderToggler,
  CNavLink,
  CNavItem,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilBell, cilEnvelopeOpen, cilList, cilMenu } from '@coreui/icons'
import { AppBreadcrumb } from './index'
import { AppHeaderDropdown } from './header/index'
import { logo } from 'src/assets/brand/logo'

const AppHeader = () => {
  const dispatch = useDispatch()
  const sidebarShow = useSelector((state) => state.sidebarShow)
  return (
    <CHeader position="sticky" className="mb-4">
      <CContainer fluid>
        <CHeaderToggler
          className="ps-1"
          onClick={() => dispatch({ type: 'set', sidebarShow: !sidebarShow })}
        >
          <CIcon icon={cilMenu} size="lg" />
        </CHeaderToggler>
        <CHeaderBrand className="mx-auto d-md-none" to="/">
          <CIcon icon={logo} height={48} alt="Logo" />
        </CHeaderBrand>
        <CHeaderNav className="d-none d-md-flex me-auto">
          <CNavItem>
            <CNavLink to="/dashboard" component={NavLink} activeClassName="active">
              Dashboard
            </CNavLink>
          </CNavItem>           
          {/* <CNavItem>
            <CNavLink href="#">Users</CNavLink>
          </CNavItem>           */}
          {/* <CNavItem>          
            <CNavLink href="#">Settings</CNavLink>
          </CNavItem>        */}
        <CDropdown >
        <CDropdownToggle caret color="white">
         Equipments      
        <CDropdownMenu>        
        <CNavLink to="/equipments/all-equipments" component={NavLink} activeClassName="Equipment">Equipment</CNavLink>
        <CNavLink to="/equipments/add-new-equipments" component={NavLink} activeClassName="Add Equipment">Add Equipment</CNavLink>

          <CDropdownItem divider />
       
        </CDropdownMenu>
        </CDropdownToggle>
      </CDropdown>
      <CDropdown >
        <CDropdownToggle caret color="white">
        Repairs
        <CDropdownMenu>         
        <CNavLink to="/equipments/repairs" component={NavLink} activeClassName="Repairs">Repair</CNavLink>
        <CNavLink to="/equipments/add-repairs" component={NavLink} activeClassName="Add Repiar">Add Repiar</CNavLink>       
          <CDropdownItem divider />        
        </CDropdownMenu>
        </CDropdownToggle>
      </CDropdown>
      <CDropdown >
        <CDropdownToggle caret color="white">
         Inventory     
        <CDropdownMenu>         
        <CNavLink to="/inventory/purchase" component={NavLink} activeClassName="Purchase">Purchase</CNavLink>
        <CNavLink to="/inventory/consumption" component={NavLink} activeClassName="Consumption">Consumption</CNavLink>       
          <CDropdownItem divider />
          <CDropdownItem>Stock</CDropdownItem>
        </CDropdownMenu>
        </CDropdownToggle>
      </CDropdown>
      
      <CDropdown >
        <CDropdownToggle caret color="white">
         Masters 
        <CDropdownMenu>         
        <CNavLink to="/masters/hosp-name" component={NavLink} activeClassName="Hospital Name">Hospital Name</CNavLink>
        <CNavLink to="/masters/equip-name" component={NavLink} activeClassName="Equipment Name">Equipment Name</CNavLink>
        <CNavLink to="/masters/dept-name" component={NavLink} activeClassName="Department Name">Department Name</CNavLink>
        <CNavLink to="/masters/category" component={NavLink} activeClassName="Category">Category</CNavLink>
        <CNavLink to="/masters/sub-category" component={NavLink} activeClassName="Sub Category">Sub Category</CNavLink>
        <CNavLink to="/masters/maint-period" component={NavLink} activeClassName="Maint Periodicity">Maint Periodicity</CNavLink>
        <CNavLink to="/masters/supplier" component={NavLink} activeClassName="Supplier">Supplier</CNavLink>
        <CNavLink to="/masters/status" component={NavLink} activeClassName="Status">Status</CNavLink>
          <CDropdownItem divider />          
        </CDropdownMenu>
        </CDropdownToggle>
      </CDropdown>
      </CHeaderNav>
        <CHeaderNav>
        <CNavItem>
        <CNavLink to="/masters/status" component={NavLink} activeClassName="Status">Log Out</CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilBell} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilList} size="lg" />
            </CNavLink>
          </CNavItem>
          <CNavItem>
            <CNavLink href="#">
              <CIcon icon={cilEnvelopeOpen} size="lg" />
            </CNavLink>
          </CNavItem>
        </CHeaderNav>
        <CHeaderNav className="ms-3">
          <AppHeaderDropdown />
        </CHeaderNav>
      </CContainer>
      <CHeaderDivider />
      {/* <CContainer fluid>
        <AppBreadcrumb />
      </CContainer> */}
    </CHeader>
  )
}

export default AppHeader
