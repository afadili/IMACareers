import { h } from 'hyperapp'
import ChartComponent from '../chartComponent'

export default (props) => {
  return (
    <main>
      <h2>
        Etudes
      </h2>
      <div className = 'dashboard'>
        <h3>Filieres</h3>
        {ChartComponent({title: 'Repartition de classe', info: props.fields, type: 'pie'})}
        <h3>International</h3>
        <div className = 'dashboard chart-group'>
          {ChartComponent({title: 'Ratio des IMAC qui étudient à l\'international', info: props.international.votes, type: 'doughnut'})}
          {ChartComponent({title: 'Domaine des étudiants qui sont partis à l\'international', info: props.international.fields, type: 'doughnut'})}
          {ChartComponent({title: 'Universites favorites des IMAC à l\'international', info: props.international.universities, type: 'horizontalBar'})}
        </div>
        <h3>Etudes post-IMAC</h3>
        <div className = 'dashboard chart-group'>
          {ChartComponent({title: 'Ratio des IMAC qui continuent les etudes', info: props.afterstudy.votes, type: 'doughnut'})}
          {ChartComponent({title: 'Domaine des étudiants qui poursuivent leurs etudes', info: props.afterstudy.fields, type: 'bar'})}
        </div>
      </div>
    </main>
  )
}
