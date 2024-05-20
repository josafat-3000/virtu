import React from 'react';
import { List, ListItem, ListItemText, ListItemIcon } from '@mui/material';
import { Home, People, Lock, Notifications, Event, Settings, Support } from '@mui/icons-material';
import { Link } from 'react-router-dom';

const menuItems = [
  { text: 'Principal', icon: <Home />, path: '/home' },
  { text: 'Personas', icon: <People />, path: '/profile' },
  { text: 'Puertas', icon: <Lock />, path: '/doors' },
  { text: 'Acceso', icon: <Lock />, path: '/access' },
  { text: 'Notificaciones', icon: <Notifications />, path: '/notifications' },
  { text: 'Eventos', icon: <Event />, path: '/events' },
  { text: 'Sistema', icon: <Settings />, path: '/system' },
  { text: 'Soporte', icon: <Support />, path: '/support' },
];

function Sidebar() {
  return (
    <List>
      {menuItems.map((item, index) => (
        <ListItem button key={index} component={Link} to={item.path}>
          <ListItemIcon>{item.icon}</ListItemIcon>
          <ListItemText primary={item.text} />
        </ListItem>
      ))}
    </List>
  );
}

export default Sidebar;
