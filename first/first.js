let sample = [
  {name: 'Ireland', income: 53000, pop: 3000, life: 60, color: 'green'},
  {name: 'USA', income: 73000, pop: 8000, life: 50, color: 'red'},
  {name: 'India', income: 43000, pop: 12000, life: 90, color: 'blue'},
  {name: 'Africa', income: 1000, pop: 1000, life: 100, color: 'brown'},
  {name: 'Germany', income: 23000, pop: 5000, life: 77, color: 'purple'},
]

let svg = d3.select('#div1').append('svg')
  .attr('width', 500)
  .attr('height', 500)
  .style('background-color', '#bbb')

svg.selectAll('circle').data(sample).enter().append('circle')
  .attr('id', function(d){ return d.name })
  .attr('cx', function(d){ return d.income / 200 })
  .attr('cy', function(d){ return d.life * 3 })
  .attr('r', function(d){ return d.pop / (100 * 3) })
  .attr('fill', function(d){ return d.color })
  .attr('fill', function(d){ return d.color })
  .append('svg:title').text(function(d){ return `Country ${d.name}` })