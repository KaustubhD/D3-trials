d3.csv('2015_16_Statewise_Secondary.csv', function(d){
  // console.log('here')
  return {
    state: d.statename,
    id: d.stateid,
    literacy_rate: d.literacy_rate
  }
}, function(data){

  const map = new Datamap({
    scope: 'ind',
    element: document.getElementById('map1'),
    projection: 'mercator',
    responsive: true,
    geographyConfig: {
      highlightOnHover: false,
      popupTemplate: function(geo){
        function findStates(states){
          return states.state.toLowerCase() === geo.properties.name.toLowerCase()
        }
        return `<div class="hover-info" style="color: #fff;"><strong>${geo.properties.name} : ${data.find(findStates).literacy_rate}%</strong></div>` 
      }
    },
    setProjection: function(element){
      let projection = d3.geo.mercator().center([71.9629, 23.5937]).scale(1000)
      let path = d3.geo.path().projection(projection)
      return { path: path, projection: projection }
    }
  })



  for(let i of data){
    // console.log(`[class*="${i.id}"]`)
    d3.select(`[class*="${i.id}"]`).style('fill', `rgb(${changeRange(i.literacy_rate, 0, 100, 0, 255)}, 80, 120)`)
  }
  // d3.select('#map1').style('height', '700px')
  d3.select(window).on('resize', function(){
    map.resize()
  })
  // console.log('2')
})

function changeRange(val, inputLow, inputHigh, outputLow, outputHigh){
  return ((val - inputLow) / (inputHigh - inputLow)) * (outputHigh - outputLow) + outputLow
}

// console.log('1')


// const COLOR = []