var map = new Datamap({
  element: document.getElementById('map'),
  geographyConfig: {
    highlightOnHover: false,
    popupOnHover: true
  },
  fills: {
    defaultFill: '#D3D3D3',
    traveledTo: '#0072bc'
  },
  data: {
    USA: {
      fillKey: 'traveledTo'
    },
    MEX: {
      fillKey: 'traveledTo'
    },
    BEL: {
      fillKey: 'traveledTo'
    },
    COD: {
      fillKey: 'traveledTo'
    },
    FRA: {
      fillKey: 'traveledTo'
    },
    DEU: {
      fillKey: 'traveledTo'
    },
    CHN: {
      fillKey: 'traveledTo'
    },
    SGP: {
      fillKey: 'traveledTo'
    }
  }
});