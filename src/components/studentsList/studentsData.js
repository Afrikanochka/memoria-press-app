export const studentsData = [
    { field: 'name', name: 'Name', sort: true },
    { field: 'id', name: 'ID' },
    { field: 'class', name: 'Class', sort: true },
    { field: 'score', name: 'Av. Score, %', sort: true },
    { field: 'speed', name: 'Av. Speed', sort: true },
    { field: 'parents', name: 'Parents' },
  ];
  
  export const scoreColor = {
    '100%': 'blue',
    '90%': 'blue',
    '80%': 'green',
    '70%': 'yellow',
    '60%': 'yellow',
    '50%': 'red',
  };
  
  export const expectColor = {
    'Below Expected': 'red',
    'As Expected': 'green',
    'Above Expected': 'blue',
  };