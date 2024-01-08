export interface IStep {
    id: string
    title: string
    text: string
}

const text =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."

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
