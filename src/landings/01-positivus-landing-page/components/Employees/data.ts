export const employees: TEmployee[] = [
    {
        name: 'John Smith',
        position: 'CEO and Founder',
        experience:
            '10+ years of experience in digital marketing. Expertise in SEO, PPC, and content strategy',
        img: '',
        linkedin: '#',
    },
    {
        name: 'Jane Doe',
        position: 'Director of Operations',
        experience:
            '7+ years of experience in project management and team leadership. Strong organizational and communication skills',
        img: '',
        linkedin: '#',
    },
    {
        name: 'Michael Brown',
        position: 'Senior SEO Specialist',
        experience:
            '5+ years of experience in SEO and content creation. Proficient in keyword research and on-page optimization',
        img: '',
        linkedin: '#',
    },
    {
        name: 'Emily Johnson',
        position: 'PPC Manager',
        experience:
            '3+ years of experience in paid search advertising. Skilled in campaign management and performance analysis',
        img: '',
        linkedin: '#',
    },
    {
        name: 'Brian Williams',
        position: 'Social Media Specialist',
        experience:
            '4+ years of experience in social media marketing. Proficient in creating and scheduling content, analyzing metrics, and building engagement',
        img: '',
        linkedin: '#',
    },
    {
        name: 'Sarah Kim',
        position: 'Content Creator',
        experience:
            '2+ years of experience in writing and editing\n' +
            'Skilled in creating compelling, SEO-optimized content for various industries',
        img: '',
        linkedin: '#',
    },
]

export interface TEmployee {
    name: string
    position: string
    experience: string
    img: string
    linkedin: string
}
