// ./structure/index.ts

import type { StructureResolver } from 'sanity/structure'
import { orderableDocumentListDeskItem } from '@sanity/orderable-document-list'

export const structure: StructureResolver = (S, context) =>
  S.list()
    .title('Website Content')
    .items([
      orderableDocumentListDeskItem({ type: 'works', S, context }),
      // ...S.documentTypeListItems().filter(
      //   (listItem: any) => !['home', 'about'].includes(listItem.getId()),
      // ),
      S.divider(),
      S.listItem()
        .title('Home Page')
        .child(S.document().schemaType('home').documentId('homePageSettings')),
      S.listItem()
        .title('About Page')
        .child(S.document().schemaType('about').documentId('aboutPageSettings')),
    ])