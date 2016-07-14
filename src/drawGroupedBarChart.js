import { plot } from 'grouped-bar-chart';
import d3 from 'd3';

export function drawGroupedBarChart() {
  const options = {
    groupByVariable: 'value',
    barColors: ['#a6cee3','#1f78b4','#b2df8a','#33a02c','#fb9a99','#e31a1c','#fdbf6f']
  }

  d3.json('src/response-distribution.json', function(error, data) {
    data.forEach(d => {
      if (d.type === 'numeric') {
        d.responseCounts.forEach(e => {
          e.value = `${e.x0} to ${e.x1}`;
          delete e.x0;
          delete e.x1;
        })
      }
    })

    data.forEach((d, i) => {
      d3.select('#root').append('h4')
        .text(data[i].column);

      plot('#root', data[i].responseCounts, options)
    })
  })
}