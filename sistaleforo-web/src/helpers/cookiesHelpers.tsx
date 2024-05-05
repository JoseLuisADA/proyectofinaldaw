const getCookie = (name: string) => {
    const cookies = document.cookie.split(';')
    for (let cookie of cookies) {
      const [cookieName, cookieValue] = cookie.trim().split('=')
      if (cookieName === name) {
        return cookieValue
      }
    }
    return null
  }
  
  const deleteCookie = (name: string) => {
    document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`
  }
  
  const setCookie = async (name: string, value: string, days: number) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    expires.toUTCString()
  
    fetch('/api/set-cookie', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, value, expires }),
    })
      .then((response) => {
        if (response.ok) {
          console.log('Cookie establecida correctamente')
        } else {
          console.error('Error al establecer la cookie')
        }
      })
      .catch((error) => {
        console.error('Error al establecer la cookie:', error)
      })
  }
  
  export { setCookie, getCookie, deleteCookie }