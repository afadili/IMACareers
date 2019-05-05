import { h } from 'hyperapp'
import ChartComponent from '../chartComponent'
import StudyView from './StudyView'
import WorkView from './WorkView'

export default (state, actions) => {
  return (
    <div id='container'>
      <header className='turquoise'>
        <div className='wrap'>
          <img src='assets/logoIMAC.png' />
        </div>
        <div className='wrap'>
          <h1>IMACareers</h1>
        </div>
        <nav>
          <ul id='menu'>
            <li className= { state.category ? 'active' : ''}> <button onclick= { () => actions.changeMenu(true) } > Etudes </button> </li>
            <li className= { state.category ? '' : 'active'}> <button onclick= { () => actions.changeMenu(false) } >Carrieres </button> </li>
          </ul>
        </nav>
      </header>
      { state.category ? StudyView(state) : WorkView(state)}
      <footer>
      </footer>
    </div>
  )
}
