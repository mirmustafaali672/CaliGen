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
    navigationRouteName: 'ApplicationSetupMainScreen',
    icons: 'stream',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Application Setup"
  },
  {
    name: 'Execution',
    navigationRouteName: 'HomeScreen',
    icons: 'file',
    isParent: true,
    parentName: 'none',
    ChildComponents: [
      {
        name: 'Files',
        navigationRouteName: 'FilesMainScreen',
        icons: 'project-diagram',
        isParent: false,
        parentName: 'none',
      },
      {
        name: 'Data Visualization',
        navigationRouteName: 'DataVisualizationMainScreen',
        icons: 'project-diagram',
        isParent: false,
        parentName: 'none',
      },
      {
        name: 'Auto Data Visualization',
        navigationRouteName: 'AutoDataVisualizationMainScreen',
        icons: 'project-diagram',
        isParent: false,
        parentName: 'none',
      }
    ],
    key: "Execution"
  },
  {
    name: 'Data Auto Exploration',
    navigationRouteName: 'HomeScreen',
    icons: 'project-diagram',
    isParent: true,
    parentName: 'none',
    ChildComponents: [
      {
        name: 'Subs',
        navigationRouteName: 'SubsMainScreen',
        icons: 'project-diagram',
        isParent: false,
        parentName: 'none',
      }
    ],
    key: "Data Auto Exploration"
  },
  {
    name: 'Kanban',
    navigationRouteName: 'KanbanMainScreen',
    icons: 'clipboard-list',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Kanban"
  },
  {
    name: 'Procedures',
    navigationRouteName: 'ProceduresMainScreen',
    icons: 'route',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Procedures"
  },
  {
    name: 'Skills',
    navigationRouteName: 'SkillsMainScreen',
    icons: 'book',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Skills"
  },
  {
    name: 'Schedule',
    navigationRouteName: 'ScheduleMainScreen',
    icons: 'calendar-alt',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Schedule"
  },
  {
    name: 'History',
    navigationRouteName: 'HistoryMainScreen',
    icons: 'history',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "History"
  },
  {
    name: 'About',
    navigationRouteName: 'AboutMainScreen',
    icons: 'info-circle',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "About"
  },
  {
    name: 'Saas',
    navigationRouteName: 'SaasMainScreen',
    icons: 'info-circle',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "saas"
  },
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
