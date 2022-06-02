export const generateUrlSearchParams = (data: any) => {
    let urlData = new URLSearchParams() 
    for (const key in data) {
        urlData.append(key, data[key])
    }

    return urlData
}