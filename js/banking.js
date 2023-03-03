//test@test.com
//test1234!

const headers = {
  'content-type': 'application/json',
  apikey: process.env.API_KEY,
  username: process.env.USER_NAME,
  Authorization: `${localStorage.getItem('token')}`
}
const API_URL =
  'https://asia-northeast3-heropy-api.cloudfunctions.net/api/account'
const API_URL_PRODUCT = 'https://asia-northeast3-heropy-api.cloudfunctions.net/api/products'

export async function buy(item, key) {
  const res = await fetch(API_URL_PRODUCT + "/buy", {
    method: 'POST',
    headers,
    body: JSON.stringify({
      productId: item.id, // 거래할 제품 ID (필수!)
      accountId: key // 결제할 사용자 계좌 ID (필수!)
    }) 
  })

  return res.json()
}
export async function checkBankList() {
  const res = await fetch(API_URL + "/banks", {
    method: 'GET',
    headers
  })

  return res.json()
}


export async function checkAccountBalance() {
  const res = await fetch(API_URL, {
    method: 'GET',
    headers,

  })
  return res.json()
}


export async function addAccount(newAcc) {
  console.log(newAcc)
  const res = await fetch(API_URL, {
    method: 'POST',
    headers,
    body: JSON.stringify({
      bankCode: newAcc.bankCode, // 연결할 은행 코드 (필수!)
      accountNumber: newAcc.accountNumber, // 연결할 계좌번호 (필수!)
      phoneNumber: newAcc.phoneNumber, // 사용자 전화번호 (필수!)
      signature: newAcc.signature // 사용자 서명 (필수!)
    }),
  })
  return res.json()
}


export async function deleteAccount(account) {
  const res = await fetch(API_URL, {
    method: 'DELETE',
    headers,
    body: JSON.stringify({
      accountId: account.id,
      signature: true
    })
  })
  return res
}