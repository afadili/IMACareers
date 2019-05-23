import { h } from 'hyperapp'
import Chart from 'chart.js'

function VerticalBarChart (props) {
  return h('canvas', {
    oncreate: (element) => {
      const ctx = element.getContext('2d')
      const data = props.data
      const labels = props.labels
      const title = props.title
      const type = props.type
      const options = props.options

      const myChart = new Chart(ctx, {
        type: type,
        data: {
          labels: labels,
          datasets: [
            {
              label: title,
              backgroundColor: ['#3e95cd', '#8e5ea2', '#3cba9f', '#e8c3b9', '#c45850'],
              data: data
            }
          ]
        },
        options: {
          title: {
            display: true,
            text: title,
            fontColor: 'white'
          },
          scales: {
            labels: {
              fontColor: 'white'
            }
          },
          ...options
        }
      })
    }
  })
}

function ChooseOptions (type) {
  if (type === 'horizontalBar') {
    return {
      scales: {
        xAxes: [{
          ticks: {
            stepSize: 1,
            min: 0
          }
        }]
      },
      legend: { display: false }
    }
  } else if (type === 'doughnut' || type === 'pie') {
    return {
      legend: {
        display: true,
        labels: {
          fontColor: 'white'
        }
      },
      elements: {
        arc: {
          borderWidth: 0
        }
      }
    }
  } else if (type === 'bar') {
    return {
      scales: {
        yAxes: [{
          ticks: {
            stepSize: 1,
            min: 0
          }
        }]
      },
      legend: { display: false }
    }
  } else {
    return { }
  }
}

export default (props) =>
  h('div', { className: 'box' },
    h('div', { className: 'chart' }, [
      VerticalBarChart({
        type: props.type,
        title: props.title,
        data: props.info.map(element => element.value),
        labels: props.info.map(element => element.label),
        options: ChooseOptions(props.type)
      })
    ])
  )
