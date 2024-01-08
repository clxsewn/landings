interface ITestimonial {
    id: number
    author: string
    position: string
    text: string
}

const text =
    'We have been working with Positivus for the past year and have seen a significant increase in website traffic and leads as a result of their efforts. The team is professional, responsive, and truly cares about the success of our business. We highly recommend Positivus to any company looking to grow their online presence.'

export const testimonials: ITestimonial[] = [
    {
        id: 0,
        author: 'John Smith #1',
        position: 'Marketing Director at XYZ Corp #1',
        text: text,
    },
    {
        id: 1,
        author: 'John Smith #2',
        position: 'Marketing Director at XYZ Corp #2',
        text: text,
    },
    {
        id: 2,
        author: 'John Smith #3',
        position: 'Marketing Director at XYZ Corp #3',
        text: text,
    },
    {
        id: 3,
        author: 'John Smith #4',
        position: 'Marketing Director at XYZ Corp #4',
        text: text,
    },
    {
        id: 4,
        author: 'John Smith #5',
        position: 'Marketing Director at XYZ Corp #5',
        text: text,
    },
]
