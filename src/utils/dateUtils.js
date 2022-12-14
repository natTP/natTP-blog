export const dateTimeStringToLocaleDateString = (
    dateTimeString,
    options = {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long',
        calendar: 'gregory',
    }
) => {
    const date = new Date(dateTimeString)
    return date.toLocaleDateString('th-TH', options)
}

export const dateStringToYear = (dateString) => {
    const date = new Date(dateString)
    return date.getFullYear()
}
