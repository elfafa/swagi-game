export const upper = (text: string) => text.replace(/^\w/, (c) => c.toUpperCase())

export const purify = (text: string) => text.replace(/[_\-.]/g, ' ').replace(/[^\w\s]/gi, '')

export const formatDate = (date: any) => {
    date = new Date(date)
    const day = date.getDate().toString().padStart(2, '0')
    const month = (date.getMonth() + 1).toString().padStart(2, '0')
    const year = date.getFullYear()
    const hour = date.getHours().toString().padStart(2, '0')
    const minute = date.getMinutes().toString().padStart(2, '0')
    const second = date.getSeconds().toString().padStart(2, '0')

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`
}
