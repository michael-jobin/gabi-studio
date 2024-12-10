import { defineField, defineType } from 'sanity'
import { SparklesIcon } from '@sanity/icons'

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
 icon: SparklesIcon,
 fields: [
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
   type: 'number',
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
   title: 'Background Color',
   type: 'color',
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
           type: 'image',
           options: {
            hotspot: true,
           },
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
