import { defineField, defineType } from "sanity";

export const homePageHero = defineType({
    name: 'homepagehero',
    title: 'Homepage Hero',
    type: 'document',
    fields: [
        defineField({
            name: 'headline',
            title: 'Headline',
            type: 'string'
        }),
        defineField({
            name: 'subheadline',
            title: 'Sub Headline',
            type: 'string'
        }),
        defineField({
            name: 'heroImage',
            title: 'Hero Background Image',
            type: 'image'
        }),
    ]
})