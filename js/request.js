import { searchList } from './search'
import { vailed } from './header'

const headers = {
  'content-type': 'application/json',
  apikey: process.env.API_KEY,
  username: process.env.USER_NAME,
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

export async function searchAll(searchtext) {
  headers.masterKey = true
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products',
    {
      method: 'GET',
      headers,
    }
  )
  let json = await res.json()
  let newseartext = searchtext
  searchList(json, newseartext)
  return json
}
console.log(searchAll())
export async function searchByName(searchText) {
  headers.masterKey = true
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        searchText: searchText,
      }),
    }
  )

  return res.json()
}

export async function searchByTag(tags) {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/search',
    {
      method: 'POST',
      headers,
      body: JSON.stringify({
        searchTags: [tags],
      }),
    }
  )
  return res.json()
}

export async function validation(token) {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        apikey: process.env.API_KEY,
        username: process.env.USER_NAME,
        Authorization: `Bearer ${token}`,
      },
    }
  )
  let json = await res.json()
  vailed(json)
  return json
}

export async function searchById(id) {
  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${id}`,
    {
      method: 'GET',
      headers,
    }
  )
  return res.json()
}

// export async function getProduct() {
//   const res = await fetch(`https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${productName}`, {
//     method: 'GET',
//     headers
//   })

//   const json = await res.json()
//   console.log(json)

//   return json
// }
