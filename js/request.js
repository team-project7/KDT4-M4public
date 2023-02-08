const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202301',
  username: 'KDT4_TEAM7',
}

export async function createUser(id, pw, displayname) {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/signup',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: id,
        password: pw,
        displayName: displayname,
      }),
    }
  )
  return res.json()
}

export async function login(id, pw) {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/login',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        email: id,
        password: pw,
      }),
    }
  )
  return res.json()
}

export async function logout(token) {
  headers.Authorization = `Bearer ${token}`
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/logout',
    {
      method: 'POST',
      headers,
    }
  )
  return res.json()
}
