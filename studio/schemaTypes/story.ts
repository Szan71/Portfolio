const story = {
  name: 'story',
  type: 'document',
  title: 'Data Story',
  fields: [
    { name: 'title', type: 'string', title: 'Title' },
    { name: 'slug', type: 'slug', title: 'Slug', options: { source: 'title' } },
    { name: 'body', type: 'array', title: 'Content', of: [{ type: 'block' }] },
    { name: 'dataSourceUrl', type: 'url', title: 'API Data Source URL' },
  ],
}

export default story; // Ensure this line is at the bottom