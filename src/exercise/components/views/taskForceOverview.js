import { h } from 'hyperapp'
import Category from '../categoryComponent'
import CategoryList from '../categoryListComponent'

export default (state, actions) =>
  <main>
    <div>
      <input
        oninput={ (e) => actions.updateValue(e.target.value)}
        value={state.input.value} />
      <select
        onchange={ (e) => actions.updateCategory(e.target.value)}
        name="cars">
        {
          state.categories.map(category => CategoryList(category))
        }
      </select>
      <button onclick={ () => actions.addTask()}>click me</button>
    </div>
    <ul>
      {
        state.categories.map(category => Category({
          ...category,
          actions,
          tasks: state.tasks.filter(task => task.category_id === category.id)
        }))
      }
    </ul>
    <input
      oninput={ (e) => actions.updateNewCategory(e.target.value)}
      value={state.input.newCategory} />
    <button onclick={ () => actions.addCategory('Nouvelle catégorie')}>Ajouter catégorie</button>
  </main>
