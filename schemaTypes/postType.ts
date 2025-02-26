import { defineField, defineType } from 'sanity'
import { orderRankField, orderRankOrdering } from '@sanity/orderable-document-list'
// info column field
const columnFieldGroup = (prefix: string) => [
 defineField({
  name: `${prefix}Title`,
  title: 'Title',
  type: 'string',
 }),
 defineField({
  name: `${prefix}Link`,
  title: 'Is this a Link?',
  type: 'boolean',
  initialValue: false,
 }),
 defineField({
  name: `${prefix}Paragraph`,
  title: 'Paragraph',
  type: 'text',
  hidden: ({ parent }) => parent?.[`${prefix}Link`],
 }),
 defineField({
  name: `${prefix}LinkText`,
  title: 'Link Text',
  type: 'string',
  hidden: ({ parent }) => !parent?.[`${prefix}Link`],
 }),
 defineField({
  name: `${prefix}LinkUrl`,
  title: 'Link URL',
  type: 'string',
  hidden: ({ parent }) => !parent?.[`${prefix}Link`],
 }),
]

export const postType = defineType({
 name: 'works',
 title: 'Works',
 type: 'document',
 orderings: [orderRankOrdering],
 // icon: SparklesIcon,
 fields: [
  orderRankField({ type: "works" }),
  defineField({
   name: 'title',
   type: 'string',
   validation: (rule) => rule.required(),
  }),
  defineField({
   name: 'slug',
   type: 'slug',
   options: { source: 'title' },
   validation: (rule) => rule.required(),
  }),
  defineField({
   name: 'date',
   title: 'Date on the thumbnail',
   type: 'string',
  }),
  defineField({
   name: 'thumbnail',
   title: 'Thumbnail (472 x 472)',
   type: 'image',
  }),
  defineField({
   name: 'tags',
   type: 'array',
   of: [{ type: 'string' }],
   options: {
    layout: 'tags',
   },
  }),
  defineField({
   name: 'backgroundColor',
   title: 'Background Color (white by default) (if you set a background image, no need for a color)',
   type: 'color',
  }),
  defineField({
   name: 'backgroundColor2',
   title: 'If you already choose a background color, you can choose another one here to create a gradient',
   type: 'color',
   hidden: ({ parent }) => parent?.backgroundColor === undefined,
  }),
  defineField({
   name: 'darkBackground',
   title: 'click if the background is dark and you want white text',
   type: 'boolean',
   initialValue: false,
   hidden: ({ parent }) => parent?.backgroundColor === undefined,
  }),
  defineField({
   name: 'backgroundImage',
   title: 'Background Image (2880 x 1600)',
   type: 'image',
  }),
  defineField({
   name: 'tools',
   title: 'Tools',
   type: 'array',
   of: [{ type: 'string' }],
   options: {
    list: [
     'pencil',
     'pen',
     'wacom',
     'photoshop',
     'illustrator',
     'blender',
     'indesign',
     'aftereffect',
     'audition',
     'brush',
    ],
   },
  }),
  defineField({
   name: 'col1',
   title: 'Description Column 1',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: columnFieldGroup('col1'),
    },
   ],
  }),
  defineField({
   name: 'col2',
   title: 'Description Column 2',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: columnFieldGroup('col2'),
    },
   ],
  }),
  //gallery
  defineField({
   name: 'gallery',
   title: 'Gallery',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: [
      defineField({
       name: 'galleryType',
       title: 'Type',
       type: 'string',
       options: {
        list: ['image', 'video', 'slider', 'custom'],
        layout: 'radio',
       },
      }),
      defineField({
       name: 'galleryCustom',
       title: 'custom part name',
       type: 'string',
       hidden: ({ parent }) => parent?.galleryType !== 'custom',
      }),
      defineField({
       name: 'galleryImage',
       title: 'Image (2000 x free)',
       type: 'image',
       hidden: ({ parent }) => parent?.galleryType !== 'image',
      }),
      defineField({
       name: 'galleryMultiply',
       title: 'layer option multiply (optional)',
       type: 'boolean',
       initialValue: false,
       hidden: ({ parent }) => parent?.galleryType !== 'image',
      }),
      defineField({
       name: 'galleryFrame',
       title: 'Frame (optional)',
       type: 'boolean',
       initialValue: false,
       hidden: ({ parent }) => parent?.galleryType !== 'image',
      }),
      defineField({
       name: 'galleryBoxShadow',
       title: 'Box Shadow (optional)',
       type: 'boolean',
       initialValue: false,
       hidden: ({ parent }) => parent?.galleryType !== 'image',
      }),
      defineField({
       name: 'galleryMargin',
       title: 'Optional margin (ex: 1rem auto 2rem)',
       type: 'string',
       hidden: ({ parent }) => parent?.galleryType !== 'image',
      }),
      defineField({
       name: 'galleryWidth',
       title: 'Optional width (ex: 50rem)',
       type: 'string',
       hidden: ({ parent }) => parent?.galleryType !== 'image',
      }),
      defineField({
       name: 'galleryId',
       title: 'YouTube Video ID',
       type: 'string',
       hidden: ({ parent }) => parent?.galleryType !== 'video',
      }),
      defineField({
       name: 'galleryThumbnail',
       title: 'Video Thumbnail (1752 x 984)',
       type: 'image',
       hidden: ({ parent }) => parent?.galleryType !== 'video',
      }),
      defineField({
       name: 'galleryVideoTitle',
       title: 'Video Title (orange)',
       type: 'string',
       hidden: ({ parent }) => parent?.galleryType !== 'video',
      }),
      defineField({
       name: 'galleryVideoSubtitle',
       title: 'Video Subtitle',
       type: 'string',
       hidden: ({ parent }) =>
        parent?.galleryType !== 'video' || !parent?.galleryVideoTitle,
      }),
      defineField({
       name: 'galleryCaption',
       title: 'Video Caption',
       type: 'text',
       hidden: ({ parent }) => parent?.galleryType !== 'video',
      }),
      defineField({
       name: 'slider',
       title: 'Slider',
       type: 'object',
       hidden: ({ parent }) => parent?.galleryType !== 'slider',
       fields: [
        defineField({
         name: 'slides',
         title: 'Slides',
         type: 'array',
         of: [
          {
           name: 'slideImage',
           title: 'Image (1516 × 1284)',
           type: 'image',
           // options: {
           //  hotspot: true,
           // },
          },
         ],
        }),
        defineField({
         name: 'slideCaption1',
         title: 'Slide Caption 1',
         type: 'array',
         of: [{ type: 'string' }],
        }),
        defineField({
         name: 'slideCaption2',
         title: 'Slide Caption 2',
         type: 'array',
         of: [{ type: 'string' }],
        }),
       ],
      }),
     ],
    },
   ],
  }),
 ],
})
