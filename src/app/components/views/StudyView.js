import { h } from 'hyperapp'
import ChartComponent from '../chartComponent'
import TextComponent from '../textComponent'
import MapComponent from '../mapComponent'

export default (props) => {
  return (
    <main>
      <h2>
        Etudes
      </h2>
      <div className = 'dashboard'>
        <div className = 'intro' >
          {TextComponent({content: 'Retrouvez les statistiques des études à l\'IMAC au niveau des filières choisies en 3ème année, mais aussi les départs à l\'étranger, et les doctorants !'})}
        </div>
        <h3>Filieres</h3>
        <div className = 'dashboard chart-group chart-group-md'>
          {ChartComponent({title: 'Repartition de classe', info: props.fields, type: 'bar'})}
          <div className = 'info-box'>
            {TextComponent({title: 'Web et Communication', content: 'les technologies web et mobile, le e-marketing, le data design, le cloud computing, ...'})}
            {TextComponent({title: 'Audiovisuel et Son', content: 'tout ce qui touche les domaines de la réalisation vidéo, le sound design, la scénographie, ...'})}
            {TextComponent({title: 'Programmation 3D', content: 'la programmation avancée autour de la réalité virtuelle, augmentée, ...'})}
          </div>
        </div>
        <h3>International</h3>
        {MapComponent(props)}
        <div className = 'dashboard chart-group'>
          <div className = 'box'>
            {TextComponent({title: 'IMAC Worldwide', content: 'En troisième année, les étudiants IMAC ont la possibilité d\'étudier à l\'étranger dans une université partenaire pendant un semestre, voire toute l\'année dans le cadre des coopérations bilatérales (Japon, USA, Canada, ...) et aussi dans les programmes ERASMUS (Allemage, Espagne, ...). Ces Universités partenaires proposent des formations qui sont similaires à celle de l\'IMAC.'})}
          </div>
          {ChartComponent({title: 'Ratio des IMAC qui étudient à l\'international', info: props.international.votes, type: 'doughnut'})}
          {ChartComponent({title: 'Domaine des étudiants qui sont partis à l\'international', info: props.international.fields, type: 'horizontalBar'})}
          {ChartComponent({title: 'Universites favorites des IMAC à l\'international', info: props.international.universities, type: 'horizontalBar'})}
        </div>
        <h3>Etudes post-IMAC</h3>
        <div className = 'dashboard chart-group'>
          {ChartComponent({title: 'Ratio des IMAC qui continuent les etudes', info: props.afterstudy.votes, type: 'doughnut'})}
          {ChartComponent({title: 'Domaine des étudiants qui poursuivent leurs etudes', info: props.afterstudy.fields, type: 'pie'})}
        </div>

      </div>
    </main>
  )
}
