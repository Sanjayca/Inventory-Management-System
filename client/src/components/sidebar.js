import { Link as RouterLink, matchPath, useLocation, useNavigate } from 'react-router-dom';
import { Drawer, List, ListItem, ListItemIcon, ListItemText, Button } from '@material-ui/core';
import { Home as HomeIcon } from '../icons/home';
import 'font-awesome/css/font-awesome.min.css';
import { EOQ as EOQIcon } from '../icons/eoq';
import { Sales as SalesIcon } from '../icons/sales';
import { Department as DepartmentIcon } from '../icons/department';
import { Employee as EmployeeIcon } from '../icons/employee';
import { Supplier as SupplierIcon } from '../icons/supplier';
import { Vendor as VendorIcon } from '../icons/vendor';
import { Store as StoreIcon } from '../icons/store';
import { Item as ItemIcon } from '../icons/item';




const items = [
  {
    href: '/dashboard',
    icon: HomeIcon,
    label: 'Home'
  },
  {
    href: '/eoq',
    icon: EOQIcon,
    label: 'EOQ'
  },
  {
    href:'/sales',
    icon: SalesIcon,
    label: 'Sales'
  },
  {
    href:'/department',
    icon: DepartmentIcon,
    label: 'Department'
  },
   {
    href:'/employee',
    icon: EmployeeIcon,
    label: 'Employee'
  },
  {
    href:'/supplier',
    icon: SupplierIcon,
    label: 'Supplier'
  },
  {
    href:'/vendor',
    icon: VendorIcon,
    label: 'Vendor'
  },
  {
    href:'/store',
    icon: StoreIcon,
    label: 'Store'
  },
  {
    href:'/item',
    icon: ItemIcon,
    label: 'Item'
  },



];


export const Sidebar = () => {
  const location = useLocation();

  return (
    <Drawer
      open
      sx={{ zIndex: 1000 }}
      variant="permanent"
      PaperProps={{
        sx: {
          backgroundColor: 'background.paper',
          display: 'flex',
          flexDirection: 'column',
          height: 'calc(100% - 64px)',
          p: 1,
          top: 64,
          width: 100,
        }
      }}
    >
      <List sx={{ width: '100%' }}>
        {items.map(({ href, icon: Icon, label }) => {
          const active = matchPath({ path: href, end: true }, location.pathname);

          return (
            <ListItem
              disablePadding
              component={RouterLink}
              key={href}
              to={href}
              sx={{
                flexDirection: 'column',
                color: active ? 'primary.main' : 'text.secondary',
                px: 2,
                py: 1.5,
                '&:hover': {
                  color: 'primary.main'
                }
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 'auto',
                  color: 'inherit'
                }}
              >
                <Icon />
              </ListItemIcon>
              <ListItemText
                primary={label}
                primaryTypographyProps={{
                  sx: {
                    pb: 0,
                    pt: 1.25
                  },
                  variant: 'caption'
                }}
              />
            </ListItem>
          );
        })}
      </List>
    
    </Drawer >
  );
};
