export interface MenuListInterface  {
  name: string,
  navigationRouteName: string,
  icons: string,
  isParent: boolean,
  parentName: string,
  ChildComponents: any[],
  key: string
};

export const MenuList: MenuListInterface[] = [
  {
    name: 'Application Setup',
    navigationRouteName: 'HomeScreen',
    icons: 'stream',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Application Setup"
  },
  // {
  //   name: 'Data Auto Exploration',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'project-diagram',
  //   isParent: true,
  //   parentName: 'none',
  //   ChildComponents: [
  //     {
  //       name: 'subs',
  //       navigationRouteName: 'HomeScreen',
  //       icons: 'project-diagram',
  //       isParent: false,
  //       parentName: 'none',
  //     },
  //     {
  //       name: 'Kanban',
  //       navigationRouteName: 'HomeScreen',
  //       icons: 'clipboard-list',
  //       isParent: false,
  //       parentName: 'none',
  //     },
  //     {
  //       name: 'Mene',
  //       navigationRouteName: 'HomeScreen',
  //       icons: 'none',
  //       isParent: false,
  //       parentName: 'none',
  //     },
  //   ],
  // },
  // {
  //   name: 'Kanban',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'clipboard-list',
  //   isParent: false,
  //   parentName: 'none',
  // },
  // {
  //   name: 'Procedures',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'route',
  //   isParent: false,
  //   parentName: 'none',
  // },
  // {
  //   name: 'Skills',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'book',
  //   isParent: false,
  //   parentName: 'none',
  // },
  // {
  //   name: 'Schedule',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'calendar-alt',
  //   isParent: false,
  //   parentName: 'none',
  // },
  // {
  //   name: 'History',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'history',
  //   isParent: false,
  //   parentName: 'none',
  // },
  // {
  //   name: 'About',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'info-circle',
  //   isParent: false,
  //   parentName: 'none',
  // },
  // {
  //   name: 'saas',
  //   navigationRouteName: 'HomeScreen',
  //   icons: 'info-circle',
  //   isParent: false,
  //   parentName: 'none',
  // },
  {
    name: 'Admin',
    navigationRouteName: 'null',
    icons: 'user',
    isParent: true,
    parentName: 'none',
    key: "Admin",
    ChildComponents: [
      {
        name: 'Users',
        navigationRouteName: 'UsersScreen',
        icons: '',
        isParent: false,
        parentName: 'none',
        key: "Users"
      },
      {
        name: 'Roles',
        navigationRouteName: 'RolesScreen',
        icons: '',
        isParent: false,
        parentName: 'none',
        key: "Roles"
      },
      {
        name: 'Permission',
        navigationRouteName: 'PermissionMainScreen',
        icons: '',
        isParent: false,
        parentName: 'none',
        key: "Permission"
      }
    ],
  },
];
