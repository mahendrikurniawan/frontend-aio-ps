import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    id: 1,
    label: 'Menu',
    category: 'can',
    subCategory: 'maintenance',
    isTitle: true
  },
  {
    id: 2,
    label: 'Top Menu',
    icon: 'home',
    category: 'can',
    subCategory: 'maintenance',
    link: '/top-menu'
  },
  {
    id: 3,
    label: 'Back',
    icon: 'home',
    category: 'can',
    subCategory: 'maintenance',
    link: '/sec-menu'
  },
  {
    id: 4,
    label: 'Maintenance',
    isTitle: true,
    category: 'can',
    subCategory: 'maintenance',
  },
  {
    id: 5,
    label: 'Gateway',
    link: '/gateway',
    category: 'can',
    subCategory: 'maintenance',
  },
  {
    id: 6,
    label: 'Master Plan',
    category: 'can',
    subCategory: 'maintenance',
    subItems: [
      {
        id: 7,
        label: 'Preparation',
        parentId: 6,
        subItems: [
          {
            id: 8,
            label: 'Mechanical',
            parentId: 7,
            subItems: [
              {
                id: 9,
                label: 'Preventive',
                link: '/preparation/mechanical/preventive',
                parentId: 8,
              },
              {
                id: 10,
                label: 'Corective',
                link: '/preparation/mechanical/corective',
                parentId: 8,
              },
              {
                id: 11,
                label: 'Over haul',
                link: '/preparation/mechanical/over-haul',
                parentId: 8,
              }
            ]
          },
          {
            id: 12,
            label: 'Electrical',
            parentId: 7,
            subItems: [
              {
                id: 13,
                label: 'Preventive',
                link: '/preparation/electrical/preventive',
                parentId: 12,
              },
              {
                id: 14,
                label: 'Corective',
                link: '/preparation/electrical/corective',
                parentId: 12,
              },
              {
                id: 15,
                label: 'Over haul',
                link: '/preparation/electrical/over-haul',
                parentId: 12,
              }
            ]
          }
        ]
      },
      {
        id: 16,
        label: 'Filing',
        parentId: 6,
        subItems: [
          {
            id: 17,
            label: 'Mechanical',
            parentId: 16,
            subItems: [
              {
                id: 18,
                label: 'Preventive',
                link: '/filling/mechanical/preventive',
                parentId: 16,
              },
              {
                id: 19,
                label: 'Corective',
                link: '/filling/mechanical/corective',
                parentId: 16,
              },
              {
                id: 20,
                label: 'Over haul',
                link: '/filling/mechanical/over-haul',
                parentId: 16,
              }
            ]
          },
          {
            id: 21,
            label: 'Electrical',
            parentId: 16,
            subItems: [
              {
                id: 22,
                label: 'Preventive',
                link: '/filling/electrical/preventive',
                parentId: 21,
              },
              {
                id: 23,
                label: 'Corective',
                link: '/filling/electrical/corective',
                parentId: 21,
              },
              {
                id: 24,
                label: 'Over haul',
                link: '/filling/electrical/over-haul',
                parentId: 21,
              }
            ]
          }
        ]
      },
      {
        id: 25,
        label: 'Packing',
        parentId: 6,
        subItems: [
          {
            id: 26,
            label: 'Mechanical',
            parentId: 21,
            subItems: [
              {
                id: 27,
                label: 'Preventive',
                link: '/packing/mechanical/preventive',
                parentId: 26,
              },
              {
                id: 28,
                label: 'Corective',
                link: '/packing/mechanical/corective',
                parentId: 26,
              },
              {
                id: 29,
                label: 'Over haul',
                link: '/packing/mechanical/over-haul',
                parentId: 26,
              }
            ]
          },
          {
            id: 30,
            label: 'Electrical',
            parentId: 21,
            subItems: [
              {
                id: 31,
                label: 'Preventive',
                link: '/packing/electrical/preventive',
                parentId: 30,
              },
              {
                id: 32,
                label: 'Corective',
                link: '/packing/electrical/corective',
                parentId: 30,
              },
              {
                id: 33,
                label: 'Over haul',
                link: '/packing/electrical/over-haul',
                parentId: 30,
              }
            ]
          }
        ]
      },
    ]
  },
  {
    id: 30,
    label: 'Continous Improvement',
    category: 'can',
    subCategory: 'maintenance',
    parentId:10,
    subItems: [
      {
        id: 31,
        label: 'Autonomous Maintenance',
        link: 'continous/auto-maintenance',
        parentId: 30,
      },
      {
        id: 32,
        label: 'Weekly Care',
        link: 'continous/weekly-care',
        parentId: 30,
        subItems: [
          {
            id: 33,
            label: 'Preparation',
            parentId: 30,
            subItems: [
              {
                id: 33,
                label: 'Sugar Dissolver',
                parentId: 30,
              },
              {
                id: 33,
                label: 'TC1 & TC2',
                parentId: 30,
              },
              {
                id: 33,
                label: 'HWT & NAOH TNK',
                parentId: 30,
              },
            ]
          },
          {
            id: 33,
            label: 'Filling',
            parentId: 30,
            subItems:[
              {
                id: 33,
                label: 'Conveyor M3-M56',
                parent: 30
              },
              {
                id: 33,
                label: 'Filler - Seamer',
                parent: 30
              },
              {
                id: 33,
                label: 'Conveyor M12-CPDA-M19',
                parent: 30
              },
              {
                id: 33,
                label: 'Can Cooller',
                parent: 30
              },
              {
                id: 33,
                label: 'M48-BLOWER-IJP-CAM-CPD2-M56',
                parent: 30
              },
              {
                id: 33,
                label: 'Heating Unit-Deaerator',
                parent: 30
              },
            ]
          },
          {
            id: 33,
            label: 'Packing',
            parentId: 30,
            subItems: [
              {
                id: 33,
                label: 'Accumulator-Caser-Weight Checker-CAM',
                parent: 30
              },
              {
                id: 33,
                label: 'Depalletizer',
                parent: 30
              },
            ]
          },
        ]
      },
      {
        id: 33,
        label: 'Improvement',
        link: 'continous/improvement',
        parentId: 30,
      },
    ]
  },
  {
    id: 34,
    label: 'Schedule Maintenance',
    icon: 'home',
    category: 'can',
    subCategory: 'maintenance',
    subItems: [
      {
        id: 35,
        label: 'Mechanical',
        parentId: 34,
        subItems: [
          {
            id: 36,
            label: 'Monthly',
            link: 'schedule/mecha/monthly',
            parentId: 35,
          },
          {
            id: 37,
            label: 'Weekly',
            link: 'schedule/mecha/weekly',
            parentId: 35,
          },
          {
            id: 38,
            label: 'Daily',
            link: 'schedule/mecha/daily',
            parentId: 35,
          }
        ]
      },
      {
        id: 39,
        label: 'Electrical',
        parentId: 34,
        subItems: [
          {
            id: 40,
            label: 'Monthly',
            link: 'schedule/elec/monthly',
            parentId: 39,
          },
          {
            id: 41,
            label: 'Weekly',
            link: 'schedule/elec/weekly',
            parentId: 39,
          },
          {
            id: 42,
            label: 'Daily',
            link: 'schedule/elec/daily',
            parentId: 39,
          }
        ]
      },
      {
        id: 43,
        label: 'Continous Improvement',
        parentId: 34,
        subItems: [
          {
            id: 44,
            label: 'Monthly',
            link: 'schedule/conti/monthly',
            parentId: 43,
          },
          {
            id: 45,
            label: 'Weekly',
            link: 'schedule/conti/weekly',
            parentId: 43,
          },
          {
            id: 46,
            label: 'Daily',
            link: 'schedule/conti/daily',
            parentId: 43,
          }
        ]
      },
    ]
  },
  {
    id: 47,
    label: 'Report',
    icon: 'home',
    category: 'can',
    subCategory: 'maintenance',
    subItems: [
      {
        id: 48,
        label: 'Daily',
        link: 'report/daily',
        parentId: 47,
      },
      {
        id: 49,
        label: 'Weekly',
        link: 'report/weekly',
        parentId: 47,
      },
      {
        id: 50,
        label: 'Monthly',
        link: 'report/monthly',
        parentId: 47,
      }
    ]
  },
];
