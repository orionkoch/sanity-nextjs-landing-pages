export default {
  widgets: [
    // {
    //   name: 'sanity-tutorials',
    //   options: {
    //     templateRepoId: 'sanity-io/sanity-template-nextjs-landing-pages'
    //   }
    // },
    { name: 'structure-menu' },
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
                  buildHookId: '62170caefd0c423f35ff1f49',
                  title: 'Sanity Studio',
                  name: 'sanity-nextjs-landing-pages-studio-yndxhn2h',
                  apiId: 'e4a66df1-0caa-412a-beba-6e3cbd8cd139'
                },
                {
                  buildHookId: '62170cae1621a83f56d5de9c',
                  title: 'Landing pages Website',
                  name: 'sanity-nextjs-landing-pages-web-6qiibt4t',
                  apiId: 'a1e74e5c-30cb-4df2-a837-33d47e6ca6e7'
                }
              ]
            }
          }
        ],
        data: [
          {
            title: 'GitHub repo',
            value: 'https://github.com/orionkoch/sanity-nextjs-landing-pages',
            category: 'Code'
          },
          { title: 'Frontend', value: 'https://sanity-nextjs-landing-pages-web-6qiibt4t.netlify.app', category: 'apps' }
        ]
      }
    },
    {
      name: 'document-list',
      options: { title: 'Recently edited', order: '_updatedAt desc', limit: 10, types: ['page'] },
      layout: { width: 'medium' }
    },
    { name: 'project-users', layout: { height: 'auto' } }
  ]
}
