import React from 'react' 


const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))
const Colors = React.lazy(() => import('./views/theme/colors/Colors'))
const Typography = React.lazy(() => import('./views/theme/typography/Typography'))

// Base
const Accordion = React.lazy(() => import('./views/base/accordion/Accordion'))
const Breadcrumbs = React.lazy(() => import('./views/base/breadcrumbs/Breadcrumbs'))
const Cards = React.lazy(() => import('./views/base/cards/Cards'))
const Carousels = React.lazy(() => import('./views/base/carousels/Carousels'))
const Collapses = React.lazy(() => import('./views/base/collapses/Collapses'))
const ListGroups = React.lazy(() => import('./views/base/list-groups/ListGroups'))
const Navs = React.lazy(() => import('./views/base/navs/Navs'))
const Paginations = React.lazy(() => import('./views/base/paginations/Paginations'))
const Popovers = React.lazy(() => import('./views/base/popovers/Popovers'))
const Progress = React.lazy(() => import('./views/base/progress/Progress'))
const Spinners = React.lazy(() => import('./views/base/spinners/Spinners'))
const Tables = React.lazy(() => import('./views/base/tables/Tables'))
const Tooltips = React.lazy(() => import('./views/base/tooltips/Tooltips'))

// Buttons
const Buttons = React.lazy(() => import('./views/buttons/buttons/Buttons'))
const ButtonGroups = React.lazy(() => import('./views/buttons/button-groups/ButtonGroups'))
const Dropdowns = React.lazy(() => import('./views/buttons/dropdowns/Dropdowns'))

//Forms
const ChecksRadios = React.lazy(() => import('./views/forms/checks-radios/ChecksRadios'))
const FloatingLabels = React.lazy(() => import('./views/forms/floating-labels/FloatingLabels'))
const FormControl = React.lazy(() => import('./views/forms/form-control/FormControl'))
const InputGroup = React.lazy(() => import('./views/forms/input-group/InputGroup'))
const Layout = React.lazy(() => import('./views/forms/layout/Layout'))
const Range = React.lazy(() => import('./views/forms/range/Range'))
const Select = React.lazy(() => import('./views/forms/select/Select'))
const Validation = React.lazy(() => import('./views/forms/validation/Validation'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications
const Alerts = React.lazy(() => import('./views/notifications/alerts/Alerts'))
const Badges = React.lazy(() => import('./views/notifications/badges/Badges'))
const Modals = React.lazy(() => import('./views/notifications/modals/Modals'))
const Toasts = React.lazy(() => import('./views/notifications/toasts/Toasts'))

const Widgets = React.lazy(() => import('./views/widgets/Widgets'))
//const AllEquipments = React.lazy(() => import('./views/equipments/AllEquipments'))
//const AddNewEquipments = React.lazy(() => import('./views/equipments/AddNewEquipments'))
//const EditEquipments = React.lazy(() => import('./views/equipments/AddNewEquipments'))
const ViewEquipments = React.lazy(() => import('./views/users/ViewUser'))

//user
//const AllEquipments = React.lazy(() => import('./views/users/TableUser'))
const AllEquipments = React.lazy(() => import('./views/users/AllEquipments'))
const ListEquipments = React.lazy(() => import('./views/users/ListEquipments'))
const AddNewEquipments = React.lazy(() => import('./views/users/AddUser'))
const EditEquipments = React.lazy(() => import('./views/users/AddUser'))
const Repairs = React.lazy(() => import('./views/users/Repairs'))
const Purchase= React.lazy(() => import('./views/users/Purchase'))
const Consumption = React.lazy(() => import('./views/inventory/Consumption'))
const Pending = React.lazy(() => import('./views/users/Pending'))
//masters
const HospitalName = React.lazy(() => import('./views/masters/HospitalName'))
const EquipmentName = React.lazy(() => import('./views/masters/EquipmentName'))
const DepartmentName = React.lazy(() => import('./views/masters/DepartmentName'))
const Category = React.lazy(() => import('./views/masters/Category'))
const SubCategory = React.lazy(() => import('./views/masters/SubCategory'))
const Supplier = React.lazy(() => import('./views/masters/Supplier'))
const Status = React.lazy(() => import('./views/masters/Status'))
const MaintPeriodicity= React.lazy(() => import('./views/masters/MaintPeriodicity'))
// pages

const Login = React.lazy(() => import('./views/pages/login/Login'))
const Login1 = React.lazy(() => import('./views/pages/login/Login1'))
const Register = React.lazy(() => import('./views/pages/register/Register'))


const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', component: Dashboard },
  { path: '/theme', name: 'Theme', component: Colors, exact: true },
  { path: '/theme/colors', name: 'Colors', component: Colors },
  { path: '/theme/typography', name: 'Typography', component: Typography },
  { path: '/base', name: 'Base', component: Cards, exact: true },
  { path: '/base/accordion', name: 'Accordion', component: Accordion },
  { path: '/base/breadcrumbs', name: 'Breadcrumbs', component: Breadcrumbs },
  { path: '/base/cards', name: 'Cards', component: Cards },
  { path: '/base/carousels', name: 'Carousel', component: Carousels },
  { path: '/base/collapses', name: 'Collapse', component: Collapses },
  { path: '/base/list-groups', name: 'List Groups', component: ListGroups },
  { path: '/base/navs', name: 'Navs', component: Navs },
  { path: '/base/paginations', name: 'Paginations', component: Paginations },
  { path: '/base/popovers', name: 'Popovers', component: Popovers },
  { path: '/base/progress', name: 'Progress', component: Progress },
  { path: '/base/spinners', name: 'Spinners', component: Spinners },
  { path: '/base/tables', name: 'Tables', component: Tables },
  { path: '/base/tooltips', name: 'Tooltips', component: Tooltips },
  { path: '/buttons', name: 'Buttons', component: Buttons, exact: true },
  { path: '/buttons/buttons', name: 'Buttons', component: Buttons },
  { path: '/buttons/dropdowns', name: 'Dropdowns', component: Dropdowns },
  { path: '/buttons/button-groups', name: 'Button Groups', component: ButtonGroups },
  { path: '/charts', name: 'Charts', component: Charts },
  { path: '/forms', name: 'Forms', component: FormControl, exact: true },
  { path: '/forms/form-control', name: 'Form Control', component: FormControl },
  { path: '/forms/select', name: 'Select', component: Select },
  { path: '/forms/checks-radios', name: 'Checks & Radios', component: ChecksRadios },
  { path: '/forms/range', name: 'Range', component: Range },
  { path: '/forms/input-group', name: 'Input Group', component: InputGroup },
  { path: '/forms/floating-labels', name: 'Floating Labels', component: FloatingLabels },
  { path: '/forms/layout', name: 'Layout', component: Layout },
  { path: '/forms/validation', name: 'Validation', component: Validation },
  { path: '/icons', exact: true, name: 'Icons', component: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', component: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', component: Flags },
  { path: '/icons/brands', name: 'Brands', component: Brands },
  { path: '/notifications', name: 'Notifications', component: Alerts, exact: true },
  { path: '/notifications/alerts', name: 'Alerts', component: Alerts },
  { path: '/notifications/badges', name: 'Badges', component: Badges },
  { path: '/notifications/modals', name: 'Modals', component: Modals },
  { path: '/notifications/toasts', name: 'Toasts', component: Toasts },
  { path: '/widgets', name: 'Widgets', component: Widgets }, 
  { path: '/equipments',name : 'Equipments', component: AllEquipments, exact: true },
  { path: '/equipments/all-equipments',name : 'All Equipments', component: AllEquipments }, 
  { path: '/equipments/list-equipments',name : 'List Equipments', component: ListEquipments }, 
  { path: '/equipments/repairs',name : 'Repairs', component: Repairs },   
  { path: '/inventory/purchase',name : 'Repairs', component: Purchase },  
  { path: '/inventory/consumption',name : 'Repairs', component: Consumption },  
  { path: '/equipments/pending',name : 'Repairs', component: Pending }, 
  { path: '/equipments/add-new-equipments',name : 'Add Equipments', component: AddNewEquipments}, 
  { path: "/equipments/edit-equipments/:id?", name : 'Edit Equipments', component: EditEquipments,exact: true },
  { path: "/equipments/view-equipments/:id?", name : 'View Equipments', component: ViewEquipments,exact: true },
  { path: "/masters/hosp-name", name : 'Hospital Name', component: HospitalName,exact: true },
  { path: "/masters/equip-name", name : 'Equipment Name', component: EquipmentName,exact: true },
  { path: "/masters/dept-name", name : 'Department Name', component: DepartmentName,exact: true },
  { path: "/masters/category", name : 'Category', component: Category,exact: true },
  { path: "/masters/sub-category", name : 'Sub Category', component: SubCategory,exact: true },
  { path: "/masters/supplier", name : 'Supplier', component: Supplier,exact: true },
  { path: "/masters/status", name : 'Status', component: Status,exact: true },
  { path: "/masters/maint-period", name : 'Maint Periodicity', component: MaintPeriodicity,exact: true },
  //pages
  // { path: "/pages", name : 'login', component: Login,exact: true },
  { path: "/login", name : 'login', component: Login,exact: true },
   { path: "/login1", name : 'login1', component: Login1,exact: true },
  { path: "/register", name : 'Register', component: Register,exact: true }
 
]
export default routes
