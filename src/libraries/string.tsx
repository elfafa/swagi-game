export const upper = (text: string) => text.replace(/^\w/, c => c.toUpperCase())

export const purify = (text: string) => text.replace(/[_\-\.]/g, ' ').replace(/[^\w\s]/gi, '')