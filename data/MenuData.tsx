export type MenuListInterface = {
  name: string;
  navigationRouteName: string;
  icons: string;
  isParent: int;
  parentName: string;
};

export const MenuList: MenuListInterface = [
  {
    name: 'Menu Item One',
    navigationRouteName: 'HomeScreen',
    icons: 'none',
    isParent: 1,
    parentName: 'none',
  },
  {
    name: 'Menu Item Two',
    navigationRouteName: 'HomeScreen',
    icons: 'none',
    isParent: 1,
    parentName: 'none',
  },
  {
    name: 'Menu Item Three',
    navigationRouteName: 'HomeScreen',
    icons: 'none',
    isParent: 1,
    parentName: 'none',
  },
  {
    name: 'Menu Item Four',
    navigationRouteName: 'HomeScreen',
    icons: 'none',
    isParent: 1,
    parentName: 'none',
  },
  {
    name: 'Menu Item Five',
    navigationRouteName: 'none',
    icons: 'none',
    isParent: 1,
    parentName: 'none',
  },
  {
    name: 'Menu Item Six',
    navigationRouteName: 'none',
    icons: 'none',
    isParent: 1,
    parentName: 'none',
  },
];
