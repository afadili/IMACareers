export default {
  input: {
    value: '',
    category: 0,
    newCategory: ''
  },

  'tasks': [
    {
      id: 0,
      value: 'Faire des crêpes',
      check: true,
      category_id: 0
    },
    {
      id: 1,
      value: 'Verser la farine',
      check: false,
      category_id: 0
    },
    {
      id: 2,
      value: 'Rajouter les oeufs',
      check: false,
      category_id: 2
    },
    {
      id: 3,
      value: 'Melanger avec un fouet',
      check: false,
      category_id: 1
    },
    {
      id: 4,
      value: 'rajouter le lait',
      check: false,
      category_id: 2
    },
    {
      id: 5,
      value: 'bien melanger et laisser reposer',
      check: false,
      category_id: 0
    }
  ],
  'categories': [
    {
      id: 0,
      title: 'Important'
    },
    {
      id: 1,
      title: 'Urgent'
    },
    {
      id: 2,
      title: 'Facultatif'
    }
  ]
}
