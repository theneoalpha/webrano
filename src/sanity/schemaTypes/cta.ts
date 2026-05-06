export default {
  name: 'cta',
  title: 'CTA Section',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'subtitle',
      title: 'Subtitle',
      type: 'text',
    },
    {
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    },
    {
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text (Optional)',
      type: 'string',
    },
  ],
}
