export const dateTimeStringToLocaleDateString = (dateTimeString) => {
    const date = new Date(dateTimeString)
    return date.toLocaleDateString('th-TH', {
        year: 'numeric',
        month: 'short',
        day: 'numeric',
        weekday: 'long',
    })
}
