import { h } from 'hyperapp'

export default (props) =>
  <li>
    <input type="checkbox" id="scales" name="scales" checked={ props.check } />
    <span>{props.value}</span>
    <button onclick={ () => props.actions.remove(props.id) }>x</button>
  </li>
