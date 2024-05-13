import { defineField } from "sanity";

const booking = {
    name: "booking",
    title: "booking",
    type: "document",
    fields: [
        defineField({
            name: "user",
            title: "User",
            type: "reference",
            to: [{ type: "user" }],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "hotelRoom",
            title: "Hotel Room",
            type: "reference",
            to: [{type: "hotelRoom"}],
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "checkingDate",
            title: "Check-in Date",
            type: "date",
            validation: Rule => Rule.required(),
        }),
        defineField({
            name: "checkoutDate",
            title: "Check-out Date",
            type: "date",
            validation: Rule => Rule.required(),
        }),
    ]
}

export default booking;