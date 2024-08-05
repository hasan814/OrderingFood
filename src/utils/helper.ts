export const getShortName = (fullName: string): string => {
    const nameParts = fullName.split(' ')
    if (nameParts.length < 2) return fullName

    const firstName = nameParts[0].charAt(0).toUpperCase() + nameParts[0].slice(1).toLowerCase()
    const lastName = nameParts[nameParts.length - 1].charAt(0).toUpperCase() + nameParts[nameParts.length - 1].slice(1).toLowerCase()

    return `${firstName} ${lastName}`
}
