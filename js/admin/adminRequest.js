//아이디:adminTEAM7 비밀번호: adminTEAM7!
const headers = {
  'content-type': 'application/json',
  apikey: 'FcKdtJs202301',
  username: 'KDT4_TEAM7',
  masterKey: 'true'
}
const API_URL =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products'

export async function addItem(item) {
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      title: item.title, // 제품 이름 (필수!)
      price: item.price, // 제품 가격 (필수!)
      description: item.description, // 제품 상세 설명 (필수!)
      tags: item.tags, // 제품 태그
      thumbnailBase64: item.thumbnailBase64, // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
    }),
  })
  return res
}

export async function searchAllItems() {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers,
  })
  const json = await res.json()

  return json
}

export async function removeItem(id) {
  const res = await fetch(`${API_URL}/${id}`, {
    method: 'DELETE',
    headers,
  })
  return res
}

export async function editItem(item) {
  const res = await fetch(`${API_URL}/${item.id}`, {
    method: 'PUT',
    headers,
    body: JSON.stringify({
      title: item.title, // 제품 이름
      price: item.price, // 제품 가격
      description: item.description, // 제품 상세 설명
      tags: item.tags, // 제품 태그
    }),
  })
  const json = await res.json()
  return json
}

export async function searchIndividualItem(item) {
  const res = await fetch(`${API_URL}/${item.id}`, {
    method: 'GET',
    headers,
    body: JSON.stringify({
      title: item.title, // 제품 이름
      price: item.price, // 제품 가격
      description: item.description, // 제품 상세 설명
      tags: item.tags, // 제품 태그
    }),
  })
  const json = await res.json()
  return json
}
