export type MenuListInterface = {
  name: string;
  navigationRouteName: string;
  icons: string;
  isParent: boolean;
  parentName: string;
  ChildComponents: any[];
};

export const MenuList: MenuListInterface = [
  {
    name: 'Application Setup',
    navigationRouteName: 'HomeScreen',
    icons: 'stream',
    isParent: false,
    parentName: 'none',
  },
  {
    name: 'Data Auto Exploration',
    navigationRouteName: 'HomeScreen',
    icons: 'project-diagram',
    isParent: true,
    parentName: 'none',
    ChildComponents: [
      {
        name: 'subs',
        navigationRouteName: 'HomeScreen',
        icons: 'project-diagram',
        isParent: false,
        parentName: 'none',
      },
      {
        name: 'Kanban',
        navigationRouteName: 'HomeScreen',
        icons: 'clipboard-list',
        isParent: false,
        parentName: 'none',
      },
      {
        name: 'Mene',
        navigationRouteName: 'HomeScreen',
        icons: 'none',
        isParent: false,
        parentName: 'none',
      },
    ],
  },
  {
    name: 'Kanban',
    navigationRouteName: 'HomeScreen',
    icons: 'clipboard-list',
    isParent: false,
    parentName: 'none',
  },
  {
    name: 'Procedures',
    navigationRouteName: 'HomeScreen',
    icons: 'route',
    isParent: false,
    parentName: 'none',
  },
  {
    name: 'Skills',
    navigationRouteName: 'none',
    icons: 'book',
    isParent: false,
    parentName: 'none',
  },
  {
    name: 'Schedule',
    navigationRouteName: 'none',
    icons: 'calendar-alt',
    isParent: false,
    parentName: 'none',
  },
  {
    name: 'History',
    navigationRouteName: 'none',
    icons: 'history',
    isParent: false,
    parentName: 'none',
  },
  {
    name: 'About',
    navigationRouteName: 'none',
    icons: 'info-circle',
    isParent: false,
    parentName: 'none',
  },
];
