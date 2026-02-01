import type {Rule} from '@sanity/types'

export default {
  name: 'blog',
  type: 'document',
  title: 'Blog',

  fields: [
    {
      name: 'title',
      type: 'string',
      title: 'Title of blog article',
      validation: (Rule: Rule) =>
        Rule.required().error('Please enter a title for the blog article'),
    },
    {
      name: 'category',
      type: 'string',
      title: 'Category of blog article',
      options: {
        list: [
          {title: 'Cognitive Wellness', value: 'Cognitive Wellness'},
          {title: 'Emotional Regulation', value: 'Emotional Regulation'},
          {title: 'Rest and Recovery', value: 'Rest and Recovery'},
        ],
      },
      validation: (Rule: Rule) =>
        Rule.required().error('Please select a category for the blog article'),
    },
    {
      name: 'slug',
      type: 'slug',
      title: 'Slug of your blog article',
      options: {
        source: 'title',
      },
      validation: (Rule: Rule) => Rule.required().error('A slug is required to publish this blog'),
    },

    {
      name: 'firstImage',
      type: 'image',
      title: 'First Title image',
      validation: (Rule: Rule) => Rule.required().error('Please upload a title image'),
    },

    {
      name: 'firstImageDescription',
      type: 'string',
      title: 'First image description',
      validation: (Rule: Rule) => Rule.required().error('Please provide description'),
    },

    // questions
    {
      name: 'firstQuestion',
      type: 'string',
      title: 'First question',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(5)
          .max(35)
          .error('Please provide a question between 5 and 35 characters'),
    },
    {
      name: 'secondQuestion',
      type: 'string',
      title: 'Second question',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(5)
          .max(35)
          .error('Please provide a question between 5 and 35 characters'),
    },
    {
      name: 'thirdQuestion',
      type: 'string',
      title: 'Third question',
      validation: (Rule: Rule) =>
        Rule.required()
          .min(5)
          .max(35)
          .error('Please provide a question between 5 and 35 characters'),
    },

    {
      name: 'firstContent',
      type: 'array',
      title: 'First Content',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required().error('Blog content cannot be empty'),
    },
    {
      name: 'secondImage',
      type: 'image',
      title: 'Second Title image',
      validation: (Rule: Rule) => Rule.required().error('Please upload a title image'),
    },

    {
      name: 'secondImageDescription',
      type: 'string',
      title: 'Second image description',
      validation: (Rule: Rule) => Rule.required().error('Please provide description'),
    },
    {
      name: 'secondContent',
      type: 'array',
      title: 'Second Content',
      of: [{type: 'block'}],
      validation: (Rule: Rule) => Rule.required().error('Blog content cannot be empty'),
    },
    {
      name: 'tags',
      type: 'array',
      title: 'Tags',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Wellness', value: 'wellness'},
          {title: 'Mental Health', value: 'mental-health'},
          {title: 'Mindfulness', value: 'mindfulness'},
        ],
      },
      validation: (Rule: Rule) =>
        Rule.required().min(1).max(2).error('Please select one or two tags'),
    },

    {
      name: 'author',
      type: 'string',
      title: 'Author',
      validation: (Rule: Rule) => Rule.required().error('Please provide the author'),
    },
    {
      name: 'publishedAt',
      type: 'datetime',
      title: 'Publication date',
      validation: (Rule: Rule) => Rule.required().error('Please set a publication date'),
    },
  ],
}
