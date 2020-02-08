export const upper = (text: string) => text.replace(/^\w/, c => c.toUpperCase())

export const purify = (text: string) => text.replace(/[_\-\.]/g, ' ').replace(/[^\w\s]/gi, '')

export const formatDate = (date: any) => {
    date = new Date(date)
    let day = date.getDate().toString().padStart(2, '0')
    let month = (date.getMonth()+1).toString().padStart(2, '0')
    let year = date.getFullYear()
    let hour = date.getHours().toString().padStart(2, '0')
    let minute = date.getMinutes().toString().padStart(2, '0')
    let second = date.getSeconds().toString().padStart(2, '0')

    return `${day}/${month}/${year} ${hour}:${minute}:${second}`
}