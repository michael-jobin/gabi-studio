import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'
import { schemaTypes } from './schemaTypes'
import { colorInput } from '@sanity/color-input'
import { structure } from './structure'

export default defineConfig({
  name: 'default',
  title: 'Gabi',

  projectId: 'oi0khzzz',
  dataset: 'production',

  plugins: [structureTool({ structure }), visionTool(), colorInput()],

  schema: {
    types: schemaTypes,
  },
})
