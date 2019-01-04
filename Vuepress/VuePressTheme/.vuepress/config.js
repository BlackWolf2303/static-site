module.exports = {
  title: 'Hello world',
  description: 'explore the world',
  themeConfig: {
    activeHeaderLinks: false,
    nav:[
      { text:'Home', link: '/' },
      { text:'introduction', link: '/introduction/' },
      { text:'Contact', link: '/contact/' },
      { text:'Google', link: 'https://google.com' },
    ],
    sidebar:{
      '/introduction/' :[
        '',
        'frontend',
        'backend'
      ]
    },
      // search: true,
      // searchMaxSuggestions: 4
      algolia: {
        apiKey: '',
        indexName: ''
      },

  }

}