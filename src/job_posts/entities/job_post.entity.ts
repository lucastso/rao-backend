export class JobPost {
    id: number
    name: string
    position: string
    contractType: string
    level: string
    primaryTag: string
    tags: string[]
    logo: string
    highlightColor: string
    salaryMin: number
    salaryMax: number
    description: string
    benefits: string[]
    howToApply: string
    applyUrl: string
    email: string
    approved: boolean
    applicants: number
    addonShowLogo: boolean
    addonShowToEmailSubscribers: boolean
    addonCreateQRCodeLink: boolean
    addonYellowHighlight: boolean
    addonStickFor24Hours: boolean
    addonStickFor7Days: boolean
    addonStickFor30Days: boolean
    createdAt: string
}
