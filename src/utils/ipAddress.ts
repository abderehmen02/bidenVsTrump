
export const getIpAddressInfo = async  (ipAddress : string ) : Promise<{country : string }>=>{

    const apiData = await fetch(`https://ipinfo.io/${ipAddress}/json`)
    const data = await apiData.json()
    return data }


