import { h } from 'hyperapp'
import ChartComponent from '../chartComponent'

export default (props) => {
  return (
    <main>
      <h2>
        Carrière
      </h2>
      <p className='info'>
        Info sur les débouchés après IMAC
      </p>
      <div id = 'charts2' className = 'dashboard'>
        <h3>Premier emploi</h3>
        <div className = 'dashboard chart-group'>
          {ChartComponent({title: 'Statut lors du premier emploi', info: props.work.statut, type: 'doughnut'})}
          {ChartComponent({title: 'Domaine du premier emploi', info: props.work.fields, type: 'horizontalBar'})}
          {ChartComponent({title: 'Taille de l\'entreprise', info: props.work.type, type: 'horizontalBar'})}
          {ChartComponent({title: 'Les entreprises préférées des IMAC', info: props.work.companies, type: 'horizontalBar'})}
        </div>
        <h3>Retour à IMAC</h3>
        {ChartComponent({title: 'Etudiants revenus enseigner à l\'IMAC ?', info: props.teacher, type: 'doughnut'})}
      </div>
    </main>
  )
}
