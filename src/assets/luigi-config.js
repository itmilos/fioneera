Luigi.setConfig({
  navigation: {
    nodes: () => [
      {
        pathSegment: 'welcome',
        label: 'Home',
        icon: 'home',
        viewUrl: '/angular.html#/welcome',
        children: [
          {
            icon: 'area-chart',
            pathSegment: 'finance',
            label: 'Finance',
            viewUrl: '/angular.html#/finance',
          },
          {
            icon: 'sales-order-item',
            pathSegment: 'insurance',
            label: 'Insurance',
            viewUrl: '/angular.html#/insurance'
          },

        ],

      }
    ],
    productSwitcher: {
      items: [{
        icon: 'https://www.sapfioneer.com/wp-content/uploads/2021/05/logo.svg',
        label: 'SAP Fioneer',
        externalLink: {
          url: 'https://www.sapfioneer.com/',
          sameWindow: true
        }
      }]
    }
  },

  routing: {
    /**
     * Development:
     * For path routing, set to false
     * For hash routing, set to true
     */
    useHashRouting: true
  },
  settings: {
    header: {
      title: 'Fioneera',
    },
    responsiveNavigation: 'semiCollapsible',
    burgerTooltip: {
      navExpanded: 'Collapse navigation',
      navCollapsed: 'Expand navigation'
    },
  }
});
// // You can now use ES6 syntax here
// Luigi.setConfig({
//   navigation: {
//     nodes: () => [
//       {
//         pathSegment: 'home',
//         label: 'Home',
//         children: [
//           {
//             pathSegment: 'hw',
//             label: 'Hello World!',
//             viewUrl: '/assets/basicMicroFrontend.html'
//           },
//           {
//             pathSegment: 'one',
//             label: 'Section one',
//             viewUrl: '/assets/basicMicroFrontend.html#one'
//           },
//           {
//             pathSegment: 'two',
//             label: 'Section two',
//             viewUrl: '/assets/basicMicroFrontend.html#two'
//           }
//         ]
//       }
//     ]
//   },
//   routing: {
//     /**
//      * Development:
//      * For path routing, set to false
//      * For hash routing, set to true
//      */
//     useHashRouting: true
//   },
//   settings: {
//     appLoadingIndicator: {
//       hideAutomatically: true
//     }
//   }
// });
