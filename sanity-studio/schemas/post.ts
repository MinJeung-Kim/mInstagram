import {Rule} from 'sanity'

export default {
  title: 'Post',
  name: 'post',
  type: 'document',
  fields: [
    {
      title: 'Author',
      name: 'author',
      type: 'reference',
      to: [{type: 'user'}],
    },
    {title: 'Photo', name: 'photo', type: 'image'},
    {
      title: 'Likes',
      name: 'likes',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'user'}],
        },
      ],
      validation: (Rule: Rule) => Rule.unique(),
    },
    {
      title: 'Comments',
      name: 'comments',
      type: 'array',
      of: [
        {
          title: 'Comments',
          name: 'comments',
          type: 'document',
          fields: [
            {title: 'Author', name: 'author', type: 'reference', to: [{type: 'user'}]},
            {title: 'Comments', name: 'comments', type: 'string'},
          ],
        },
      ],
    },
  ],
  preview: {
    select: {
      // comments 배열안에 0번째 item
      title: 'comments.0.comments',
      authorName: 'author.name',
      authorUsername: 'author.username',
      media: 'photo',
    },
    prepare(selecteion: any) {
      const {title, authorName, authorUsername, media} = selecteion
      return {
        title,
        subtitle: `by ${authorName} (${authorUsername})`,
        media,
      }
    },
  },
}
