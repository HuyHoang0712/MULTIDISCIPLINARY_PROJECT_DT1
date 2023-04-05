import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { HomePage } from "../screens";
import { icons, COLORS } from "../constants";
const Drawer = createDrawerNavigator();

const DrawerNav = () => {
    return (
      <Drawer.Navigator drawerContent={() => <DrawerContent />}>
        <Drawer.Screen name="Home" component={HomePage} />
      </Drawer.Navigator>
    );
};

export default DrawerNav;
