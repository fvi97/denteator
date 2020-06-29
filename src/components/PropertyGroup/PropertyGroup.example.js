import PropertyGroup from './PropertyGroup';

const exampleOptions = [
  {
    key: 'dental_implant',
    label: 'Dental implant',
  },
  {
    key: 'cosmetic_dentistry',
    label: 'Cosmetic dentistry',
  },
  {
    key: 'ortodontics',
    label: 'Ortodontics / Braces',
  },
  {
    key: 'radiology',
    label: 'Radiology',
  },
];

export const WithSomeSelected = {
  component: PropertyGroup,
  props: {
    id: 'amenities',
    options: exampleOptions,
    selectedOptions: ['towels', 'bathroom', 'barbeque'],
    twoColumns: true,
  },
  group: 'misc',
};
