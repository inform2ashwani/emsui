import React from 'react'
import CIcon from '@coreui/icons-react'
import {cilBell,  cilCalculator,  cilChartPie,  cilCursor,  cilDrop,  cilNotes,  cilPencil,
  cilPuzzle,  cilSpeedometer,  cilStar,} from '@coreui/icons'
import { CNavGroup, CNavItem, CNavTitle } from '@coreui/react'

const _nav = [
  {
    component: CNavItem,
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon icon={cilSpeedometer} customClassName="nav-icon" />,
    badge: {
      color: 'info',
      text: 'NEW',
    },
  },
  
  {
    component: CNavGroup,
    name: 'Equipments',
    to: '/equipments',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
     
      {
        component: CNavItem,
        name: 'All Equipments',
        to: '/equipments/all-equipments',
        
      },
      {
        component: CNavItem,
        name: 'List Equipments',
        to: '/equipments/list-equipments',
        
      },
     
      {
        component: CNavItem,
        name: 'Add New Equipments',
        to: '/equipments/add-new-equipments/',
      },     
      
    ],
  },
  
  {
    component: CNavItem,
    name: 'Repairs',
    to: '/equipments/repairs',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
    
  },
  {
    component: CNavItem,
    name: 'Purchase',
    to: '/inventory/purchase',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    
  },
  {
    component: CNavItem,
    name: 'Consumption',
    to: '/inventory/consumption',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    
  },
  {
    component: CNavItem,
    name: 'Pending',
    to: '/equipments/pending',
    icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
   
  },
  {
    component: CNavGroup,
    name: 'Masters',
    to: '/masters',
    icon: <CIcon icon={cilPencil} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Hospital Name ',
        to: '/masters/hosp-name',
      },    
     
      {
        component: CNavItem,
        name: 'Equipment Name',
        to: '/masters/equip-name',
        
      },
      {
        component: CNavItem,
        name: 'Department Name',
        to: '/masters/dept-name',
        
      },
      {
        component: CNavItem,
        name: 'Category',
        to: '/masters/category',
      }, 
      {
        component: CNavItem,
        name: 'Maint Periodicity',
        to: '/masters/maint-period',
      }, 
      {
        component: CNavItem,
        name: 'Sub Category',
        to: '/masters/sub-category',
      },
      {
        component: CNavItem,
        name: 'Supplier ',
        to: '/masters/supplier',
      },
      {
        component: CNavItem,
        name: 'Status ',
        to: '/masters/status',
      },               
      
    ],
  },
  {
    component: CNavGroup,
    name: 'Forms',
    icon: <CIcon icon={cilNotes} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Form Control',
        to: '/forms/form-control',
      },
      {
        component: CNavItem,
        name: 'Select',
        to: '/forms/select',
      },
    ]
  },
  
  //     {
  //       component: CNavItem,
  //       name: 'Checks & Radios',
  //       to: '/forms/checks-radios',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Range',
  //       to: '/forms/range',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Input Group',
  //       to: '/forms/input-group',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Floating Labels',
  //       to: '/forms/floating-labels',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Layout',
  //       to: '/forms/layout',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Validation',
  //       to: '/forms/validation',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Charts',
  //   to: '/charts',
  //   icon: <CIcon icon={cilChartPie} customClassName="nav-icon" />,
  // },
  {
    component: CNavGroup,
    name: 'Icons',
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'CoreUI Free',
        to: '/icons/coreui-icons',
        badge: {
          color: 'success',
          text: 'NEW',
        },
      },
      {
        component: CNavItem,
        name: 'CoreUI Flags',
        to: '/icons/flags',
      },
      {
        component: CNavItem,
        name: 'CoreUI Brands',
        to: '/icons/brands',
      },
    ],
  },
  // {
  //   component: CNavGroup,
  //   name: 'Notifications',
  //   icon: <CIcon icon={cilBell} customClassName="nav-icon" />,
  //   items: [
  //     {
  //       component: CNavItem,
  //       name: 'Alerts',
  //       to: '/notifications/alerts',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Badges',
  //       to: '/notifications/badges',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Modal',
  //       to: '/notifications/modals',
  //     },
  //     {
  //       component: CNavItem,
  //       name: 'Toasts',
  //       to: '/notifications/toasts',
  //     },
  //   ],
  // },
  // {
  //   component: CNavItem,
  //   name: 'Widgets',
  //   to: '/widgets',
  //   icon: <CIcon icon={cilCalculator} customClassName="nav-icon" />,
  //   badge: {
  //     color: 'info',
  //     text: 'NEW',
  //   },
  // },
  // {
  //   component: CNavTitle,
  //   name: 'Extras',
  // },
   {
    component: CNavGroup,
    name: 'Pages',  
    icon: <CIcon icon={cilStar} customClassName="nav-icon" />,
    items: [
      {
        component: CNavItem,
        name: 'Login',
        to: '/login',
      },
      
        {
          component: CNavItem,
          name: 'Login1',
          to: '/login1',
        },
      {
        component: CNavItem,
        name: 'Register',
        to: '/register',
      },
      // {
      //   component: CNavItem,
      //   name: 'Error 404',
      //   to: '/404',
      // },
      // {
      //   component: CNavItem,
      //   name: 'Error 500',
      //   to: '/500',
      // },
    ]
  }
]

export default _nav
