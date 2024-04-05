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
    icons: 'view-stream',
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
        icons: 'resistor-nodes',
        isParent: false,
        parentName: 'none',
      },
      {
        name: 'Data Visualization',
        navigationRouteName: 'DataVisualizationMainScreen',
        icons: 'resistor-nodes',
        isParent: false,
        parentName: 'none',
      },
      {
        name: 'Auto Data Visualization',
        navigationRouteName: 'AutoDataVisualizationMainScreen',
        icons: 'resistor-nodes',
        isParent: false,
        parentName: 'none',
      }
    ],
    key: "Execution"
  },
  {
    name: 'Data Auto Exploration',
    navigationRouteName: 'HomeScreen',
    icons: 'resistor-nodes',
    isParent: true,
    parentName: 'none',
    ChildComponents: [
      {
        name: 'Subs',
        navigationRouteName: 'SubsMainScreen',
        icons: 'resistor-nodes',
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
    icons: 'routes',
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
    icons: 'calendar',
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
    icons: 'information',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "About"
  },
  {
    name: 'Saas',
    navigationRouteName: 'SaasMainScreen',
    icons: 'information',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "saas"
  },
  {
    name: 'Admin',
    navigationRouteName: 'null',
    icons: 'security',
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
  {
    name: 'Scanner',
    navigationRouteName: 'QRScannerMainScreen',
    icons: 'qrcode-scan',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "Scanner"
  },
  {
    name: 'Settings',
    navigationRouteName: 'SettingsMainScreen',
    icons: 'settings-helper',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "saas"
  },
  {
    name: 'Development',
    navigationRouteName: 'DevelopmentMainScreen',
    icons: 'file-code',
    isParent: false,
    parentName: 'none',
    ChildComponents: [],
    key: "saas"
  },
];
