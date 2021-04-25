export const dateStrToDate = (dateString: string): Date => {
    let dateSplit = dateString.split('/')
    // 10/08/2018
    return new Date(dateSplit[2], dateSplit[1] - 1, dateSplit[0])
}