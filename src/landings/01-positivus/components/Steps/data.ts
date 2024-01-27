export interface IStep {
    id: string
    title: string
    text: string
}

const text =
    'During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.'

export const steps: IStep[] = [
    {
        id: '01',
        title: 'Consultation',
        text: text,
    },
    {
        id: '02',
        title: 'Research and Strategy Development',
        text: text,
    },
    {
        id: '03',
        title: 'Implementation',
        text: text,
    },
    {
        id: '04',
        title: 'Monitoring and Optimization',
        text: text,
    },
    {
        id: '05',
        title: 'Reporting and Communication',
        text: text,
    },
    {
        id: '06',
        title: 'Continual Improvement',
        text: text,
    },
]
