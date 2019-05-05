import { h } from 'hyperapp'
import Chart from 'chart.js'

function VerticalBarChart (props) {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const data = props.data
      const labels = props.labels
      const title = props.title

      const myChart = new Chart(ctx, {
        type: 'pie',
        data: {
          labels: labels,
          datasets: [{
            label: title,
            backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
            data: data
          }]
        },
        options: {
          title: {
            display: true,
            text: title
          }
        }
      })
    }
  })
}

export default () =>
  h('div', {}, [
    VerticalBarChart({
      title: 'Repartition IMAC',
      data: [2478, 1267, 734, 784, 433],
      labels: ['Africa', 'Asia', 'Europe', 'Latin America', 'North America']
    })
  ])
