export default {
  logEvent: (value) => state => {
    console.log(value.name, value.event)
    return state
  },
  exampleSet: value => state => ({...state, input: {...state.input, value}}),

  test: (value) => state => {
    console.log(value.name, value.event)
    return state
  },

  updateValue: value => state => {
    const updated = {
      value: value,
      category: state.input.category,
      newCategory: state.input.newCategory
    }

    return {...state, input: updated}
  },

  updateNewCategory: value => state => {
    const updated = {
      value: state.input.value,
      category: state.input.category,
      newCategory: value
    }

    return {...state, input: updated}
  },

  updateCategory: value => state => {
    const updated = {
      value: state.input.value,
      category: parseInt(value, 10),
      newCategory: state.input.newCategory
    }

    return {...state, input: updated}
  },

  remove: id => state => {
    const updated = state.tasks.filter(task => task.id !== id)
    console.log(id)
    return {...state, tasks: updated}
  },

  addCategory: () => state => {
    const newCategory = {
      id: state.categories.length,
      title: state.input.newCategory
    }

    const updatedNewCategory = [...state.categories, newCategory]

    const resetInput = {
      value: state.input.value,
      category: state.input.category,
      newCategory: ''
    }

    return {...state, categories: updatedNewCategory, input: resetInput}
  },

  addTask: () => state => {
    const newTask = {
      id: state.tasks.length,
      value: state.input.value,
      check: false,
      category_id: state.input.category
    }

    const updatedTask = [
      ...state.tasks, newTask
    ]

    const resetInput = {
      value: '',
      category: state.input.category,
      newCategory: state.input.newCategory
    }

    return {...state, tasks: updatedTask, input: resetInput}
  }
}
