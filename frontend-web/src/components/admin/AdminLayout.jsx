import { Outlet } from 'react-router-dom';
import SidebarNav from './SidebarNav';

import '../../assets/styles/admin.css';
const AdminLayout = () => (
  <div className="admin-container">
    <SidebarNav />
    <div className="admin-content">
      <Outlet /> {/* Aquí se renderizan las páginas admin */}
    </div>
  </div>
);