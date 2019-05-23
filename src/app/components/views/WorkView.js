import { h } from 'hyperapp'
import ChartComponent from '../chartComponent'
import MapComponent from '../mapComponent'
import TextComponent from '../textComponent'

export default (props) => {
  return (
    <main>
      <h2>
        Carrière
      </h2>
      <p>_</p>
      <div id = 'charts2' className = 'dashboard'>
        <div className = 'intro'>
          {TextComponent({content: 'L \'IMAC est une formation très polyvalente, elle regroupe les domaines du WEB, le monde de l\'audiovisuel mais aussi l\'univers passionnant de la 3D, les débouchés après l\'IMAC sont donc divers.'})}
        </div>
        <h3>Premier emploi</h3>
        <div className = 'dashboard chart-group'>
          {ChartComponent({title: 'Statut lors du premier emploi', info: props.work.statut, type: 'doughnut'})}
          {ChartComponent({title: 'Domaine du premier emploi', info: props.work.fields, type: 'horizontalBar'})}
          {ChartComponent({title: 'Taille de l\'entreprise', info: props.work.type, type: 'horizontalBar'})}
          {ChartComponent({title: 'Les entreprises préférées des IMAC', info: props.work.companies, type: 'bar'})}
          {MapComponent(props)}
        </div>
        <h3>Retour à IMAC</h3>
        <div className = 'dashboard chart-group'>
          <div className = 'box alumni'>
            {TextComponent({title: 'Les enseignants-alumnis', content: 'Eh oui ! Parce qu\'on aime tellement l\'IMAC, certains diplomés reviennent même pour porter la casquette de l\'enseignant, et le taux des IMACs qui reviennent augmentent de plus en plus.'})}
          </div>
          {ChartComponent({title: 'Etudiants revenus enseigner à l\'IMAC ?', info: props.teacher, type: 'doughnut'})}
        </div>
      </div>
    </main>
  )
}
