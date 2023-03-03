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

export async function modifyUserPassword() {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user',
    {
      method: 'PUT',
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        oldPassword: document.querySelector('#oldPassword').value, // 기존 비밀번호
        newPassword: document.querySelector('.input_password').value, // 새로운 비밀번호
      }),
    }
  )
  const json = await res.json()
  return json
}

export async function modifyUserName() {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/user',
    {
      method: 'PUT',
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        displayName: document.querySelector('.input_name').value, // 새로운 표시 이름
      }),
    }
  )
  const json = await res.json()
  return json
}

export async function getUserInfo() {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',
    {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
  const json = await res.json()
  return json
}

export async function getBuyingList() {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/transactions/details',
    {
      method: 'GET',
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
    }
  )
  if (res.ok) {
    const json = await res.json()
    return json
  }
  return null
}

export async function getProduct(ID) {
  const res = await fetch(
    `https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/${ID}`,
    {
      method: 'GET',
      headers,
    }
  )
  const json = await res.json()
  return json
}

export async function setBuyingDone(ID) {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/ok',
    {
      method: 'POST',
      headers: {
        ...headers,
        Authorization: `Bearer ${localStorage.getItem('token')}`,
      },
      body: JSON.stringify({
        detailId: ID,
      }),
    }
  )
  const json = await res.json()
  return json
}

export async function validation(token) {
  const res = await fetch(
    'https://asia-northeast3-heropy-api.cloudfunctions.net/api/auth/me',
    {
      method: 'POST',
      headers: {
        "content-type": "application/json",
        "apikey": process.env.API_KEY,
        "username": process.env.USER_NAME,
        "Authorization": `Bearer ${token}`,
     },
    }
  )
  const json = await res.json()
  vailed(json)
  return json
}