import { defineField, defineType } from 'sanity'

export default defineType({
 name: 'about',
 title: 'About Page',
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
   name: 'introduction',
   title: 'Introduction in English',
   type: 'array',
   of: [{ type: 'block' }]
  }),
  defineField({
   name: 'introductionJp',
   title: 'Introduction in Japanese',
   type: 'array',
   of: [{ type: 'block' }]
  }),
  defineField({
   name: 'profilePic',
   title: 'Profile Picture (546 x 848)',
   type: 'image',
  }),
  defineField({
   name: 'hobbies',
   type: 'string',
  }),
  defineField({
   name: 'career',
   title: 'Career',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: [
      defineField({
       name: 'year',
       title: 'Year',
       type: 'string',
      }),
      defineField({
       name: 'position',
       title: 'Position',
       type: 'string',
      }),
      defineField({
       name: 'place',
       title: 'School, Company Name',
       type: 'string',
      }),
      defineField({
       name: 'flag',
       title: 'Flag',
       type: 'string',
       options: {
        list: ['Japan', 'Argentina'],
        layout: 'radio',
       },
      }),
     ],
    }
   ]
  }),
  defineField({
   name: 'exhibitions',
   title: 'Exhibitions / Events',
   type: 'array',
   of: [
    {
     type: 'object',
     fields: [
      defineField({
       name: 'year',
       title: 'Year',
       type: 'string',
      }),
      defineField({
       name: 'title',
       title: 'Title',
       type: 'string',
      }),
      defineField({
       name: 'city',
       title: 'City',
       type: 'string',
      }),
     ],
    }
   ]
  }),
 ]
})