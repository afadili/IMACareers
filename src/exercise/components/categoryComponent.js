import { h } from 'hyperapp'
import taskComponent from './taskComponent'

export default (props) =>
  <li>
    <h2>{props.title}</h2>
    <ul>
      {
        props.tasks.map(task => taskComponent({
          ...task,
          actions: props.actions
        }))
      }
    </ul>
  </li>
