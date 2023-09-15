/*
*Students datq
*from
*Dannysnotepad
*/

anychart.onDocumentReady(() => {
  
  //setting the data
  let data = {
    header: ['Name', 'Age', 'Subject', 'Score'],
    rows: [
      ['Davis', 16, 'Math', 84],
      ['Steve', 19, 'Biology', 76],
      ['John', 11, 'Basic Science', 90],
      ['Lisa', 16, 'Art', 74],
      ['Smith', 18, 'Cultural Creativity', 89],
      ['Wilson', 14, 'Robotics', 79],
      ['Mary', 18, 'Mythology', 92],
      ['Rita', 19, 'Food Science', 82],
      ['Clarina', 13, 'Fabric Design', 70],
      ['Philip', 17, 'Reverse Thinking', 99],
      ['Dorcas', 20, 'Libary Managment', 88]
      ]
  }
  
  let chart = anychart.column()
  
  chart.data(data)
  
  chart.title('Gited Hands Coll Best Students of the Year')
  
  chart.container("container")
  chart.draw()
})
