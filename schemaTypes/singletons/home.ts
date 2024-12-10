import { defineField, defineType } from 'sanity'

export default defineType({
 name: 'home',
 title: 'Home Page',
 type: 'document',
 fields: [
  defineField({
   name: 'title',
   title: 'Title SEO',
   type: 'string',
   validation: (rule) => rule.required(),
  }),
  defineField({
   name: 'description',
   title: 'Description SEO',
   type: 'string',
   validation: (rule) => rule.required(),
  }),
  defineField({
   name: 'mv',
   title: 'Main Visual Images',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: [
      defineField({
       name: 'mvImagePc',
       title: 'Pc image (2880 x 1600)',
       type: 'image',
      }),
      defineField({
       name: 'mvImageSp',
       title: 'Mobile image (750 x 1624)',
       type: 'image',
      })
     ]
    }
   ]
  }),
  defineField({
   name: 'tags',
   title: 'Tag list that can be selected',
   type: 'array',
   of: [{ type: 'string' }],
   options: {
    layout: 'tags',
   },
  }),
 ]
})