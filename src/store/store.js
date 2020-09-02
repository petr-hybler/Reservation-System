import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
      companyName: 'vReserve',
      contacts: {
              phone: '+001 000 222 888',
              email: 'info@vreserve.com',
              address: 'Main Street 1, Big Town',
              map: '#',
      },
      skillset: [
        {id: 1, name: 'YoExperience', value: '26'},
        {id: 2, name: 'Specialists', value: '8'},
        {id: 3, name: 'Products', value: '305'},
        {id: 4, name: 'Countries', value: '10'},
        {id: 5, name: 'Rating', value: '4.7'},
      ],
      carousel: [
        {id: 1, title: 'First Slide Label', desc: 'Nulla vitae elit libero, a pharetra augue mollis interdum.', imgPath: './../../../src/assets/img/placeholder.png', active: true},
        {id: 2, title: 'Second Slide Label', desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.', imgPath: './../../../src/assets/img/placeholder.png', active: false},
        {id: 3, title: 'Third Slide Label', desc: 'Praesent commodo cursus magna, vel scelerisque nisl consectetur.', imgPath: './../../../src/assets/img/placeholder.png', active: false},
      ],
      services: [
        {id: 1, name: 'Service 1', slug: 'service-1', amount: '119', desc: 'Apharetra augue mollis interdum'},
        {id: 2, name: 'Service 2', slug: 'service-2', amount: '99', desc: 'Apharetra augue mollis interdum'},
        {id: 3, name: 'Service 3', slug: 'service-3', amount: '199', desc: 'Apharetra augue mollis interdum'},
        {id: 4, name: 'Service 4', slug: 'service-4', amount: '249', desc: 'Apharetra augue mollis interdum'},
        {id: 5, name: 'Service 5', slug: 'service-5', amount: '89', desc: 'Apharetra augue mollis interdum'},
        {id: 6, name: 'Service 6', slug: 'service-6', amount: '149', desc: 'Apharetra augue mollis interdum'},
      ],
      gallery: [
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.gif' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.png' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.gif' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.png' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.gif' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.png' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.gif' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.png' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.gif' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.png' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.gif' },
        { thumb: './../src/assets/img/placeholder_400_300.png', full: './../src/assets/img/placeholder.png' }
      ],
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  }
});

// helpers
