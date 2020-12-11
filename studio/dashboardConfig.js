export default {
  widgets: [
    {name: 'structure-menu'},
    {
      name: 'project-info',
      options: {
        __experimental_before: [
          {
            name: 'netlify',
            options: {
              description:
                'NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.',
              sites: [
                {
                  buildHookId: '5fd34b32bd4fb0fed86e5aa9',
                  title: 'Sanity Studio',
                  name: 'sanity-kitchen-sink-studio-c2bsdzzz',
                  apiId: '769782fd-f393-493b-8aac-f755bc213e98'
                },
                {
                  buildHookId: '5fd34b331c290ce5c144205d',
                  title: 'Blog Website',
                  name: 'sanity-kitchen-sink-web-g4j72ps5',
                  apiId: 'c6463fab-a235-45d6-8f7d-e7f7a48f6a18'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/septimiubloj/sanity-kitchen-sink',
            category: 'Code'
          },
          {title: 'Frontend', value: 'https://sanity-kitchen-sink-web-g4j72ps5.netlify.app', category: 'apps'}
        ]
      }
    },
    {name: 'project-users', layout: {height: 'auto'}},
    {
      name: 'document-list',
      options: {title: 'Recent blog posts', order: '_createdAt desc', types: ['post']},
      layout: {width: 'medium'}
    }
  ]
}
