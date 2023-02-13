### 제품 추가

- 관리자 전용 API입니다.
- 파일(사진)은 Base64로 요청해야 합니다.
- 제품 썸네일 사진은 1MB 이하여야 합니다.
- 제품 상세 사진은 4MB 이하여야 합니다.
- 제품 할인율(`discountRate`)은 제품 가격과 직접 관계가 없는 단순 메모 속성입니다.
- 제품 할인율은 `0`~`99` 사이 숫자를 입력하세요. 만약 할인율이 '20%'인 경우, `20`으로 입력해야 합니다.
- 제품 할인율을 입력하지 않으면, `0`으로 적용됩니다.

```js
// 할인 전 가격을 계산!
const priceBeforeDiscount = price * 100 / (100 - discountRate)
```

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products 
  \ -X 'POST'
  \ -H 'masterKey: true'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title: string // 제품 이름 (필수!)
  price: number // 제품 가격 (필수!)
  description: string // 제품 상세 설명 (필수!)
  tags?: string[] // 제품 태그
  thumbnailBase64?: string // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
  photoBase64?: string // 제품 상세 사진(base64) - jpg, jpeg, webp, png, gif, svg
  discountRate?: number // 제품 할인율
}
```

```json
{
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성능과 놀라운 배터리 사용 시간을 자랑하죠. 여기에 시선을 사로잡는 Liquid Retina XDR 디스플레이, Mac 노트북 사상 최고의 카메라 및 오디오 그리고 더할 나위 없이 다양한 포트까지. 기존 그 어떤 카테고리에도 속하지 않는 노트북. 새로운 MacBook Pro는 그야말로 야수입니다.",
  "tags": [
    "가전",
    "노트북",
    "컴퓨터"
  ],
  "thumbnailBase64": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUg...(생략)"
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue { // 추가한 제품의 상세 내용
  id: string // 제품 ID
  title: string // 제품 이름
  price: number // 제품 가격
  description: string // 제품 상세 설명
  tags: string[] // 제품 태그
  thumbnail: string | null // 제품 썸네일 이미지(URL)
  photo: string | null // 제품 상세 이미지(URL)
  isSoldOut: boolean // 제품 매진 여부
  discountRate: number // 제품 할인율
}
```

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성능과 놀라운 배터리 사용 시간을 자랑하죠. 여기에 시선을 사로잡는 Liquid Retina XDR 디스플레이, Mac 노트북 사상 최고의 카메라 및 오디오 그리고 더할 나위 없이 다양한 포트까지. 기존 그 어떤 카테고리에도 속하지 않는 노트북. 새로운 MacBook Pro는 그야말로 야수입니다.",
  "tags": [
    "가전",
    "노트북",
    "컴퓨터"
  ],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false,
  "discountRate": 0
}
```

### 제품 수정

- 관리자 전용 API입니다.
- 사용자의 구매 내역 확인을 위해, 제품을 실제로는 삭제하지 않고 매진(Sold Out) 처리해야 합니다.
- 매진은 다시 해제할 수 있습니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'PUT'
  \ -H 'masterKey: true'
```

요청 데이터 타입 및 예시:

```ts
interface RequestBody {
  title?: string // 제품 이름
  price?: number // 제품 가격
  description?: string // 제품 상세 설명
  tags?: string[] // 제품 태그
  thumbnailBase64?: string // 제품 썸네일(대표) 사진(base64) - jpg, jpeg, webp, png, gif, svg
  photoBase64?: string // 제품 상세 사진(base64) - jpg, jpeg, webp, png, gif, svg
  isSoldOut?: boolean // 제품 매진 여부
  discountRate?: number // 제품 할인율
}
```

```json
{
  "price": 1500
}
```

응답 데이터 타입 및 예시:

```ts
interface ResponseValue { // 수정한 제품의 상세 내용
  id: string // 제품 ID
  title: string // 제품 이름
  price: number // 제품 가격
  description: string // 제품 상세 설명
  tags: string[] // 제품 태그
  thumbnail: string | null // 제품 썸네일 이미지(URL)
  photo: string | null // 제품 상세 이미지(URL)
  isSoldOut: boolean // 제품 매진 여부 
  discountRate: number // 제품 할인율
}
```

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 1500,
  "description": "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성능과 놀라운 배터리 사용 시간을 자랑하죠. 여기에 시선을 사로잡는 Liquid Retina XDR 디스플레이, Mac 노트북 사상 최고의 카메라 및 오디오 그리고 더할 나위 없이 다양한 포트까지. 기존 그 어떤 카테고리에도 속하지 않는 노트북. 새로운 MacBook Pro는 그야말로 야수입니다.",
  "tags": [
    "가전",
    "노트북",
    "컴퓨터"
  ],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false,
  "discountRate": 0
}
```

### 제품 삭제

- 관리자 전용 API입니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'DELETE'
  \ -H 'masterKey: true'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
type ResponseValue = true // 제품 삭제 처리 상태
```

### 단일 제품 상세 조회

- 공용 API입니다.

```curl
curl https://asia-northeast3-heropy-api.cloudfunctions.net/api/products/:productId
  \ -X 'GET'
```

요청 데이터 타입 및 예시:

- 없음

응답 데이터 타입 및 예시:

```ts
interface ResponseValue { // 제품의 상세 내용
  id: string // 제품 ID
  title: string // 제품 이름
  price: number // 제품 가격
  description: string // 제품 상세 설명
  tags: string[] // 제품 태그
  thumbnail: string | null // 제품 썸네일 이미지(URL)
  photo: string | null // 제품 상세 이미지(URL)
  isSoldOut: boolean // 제품 매진 여부 
  reservations: Reservation[] // 제품의 모든 예약 정보 목록
  discountRate: number // 제품 할인율
}

interface Reservation {
  start: string // 예약 시작 시간
  end: string // 예약 종료 시간
  isCanceled: boolean // 예약 취소 여부
  isExpired: boolean // 예약 만료 여부
}
```

```json
{
  "id": "nbqtQvEivYwEXTDet7YM",
  "title": "MacBook Pro 16",
  "price": 3360000,
  "description": "역대 가장 강력한 MacBook Pro가 등장했습니다. 최초의 프로용 Apple Silicon인 M1 Pro 또는 M1 Max 칩을 탑재해 쏜살같이 빠른 속도는 물론, 획기적인 성능과 놀라운 배터리 사용 시간을 자랑하죠. 여기에 시선을 사로잡는 Liquid Retina XDR 디스플레이, Mac 노트북 사상 최고의 카메라 및 오디오 그리고 더할 나위 없이 다양한 포트까지. 기존 그 어떤 카테고리에도 속하지 않는 노트북. 새로운 MacBook Pro는 그야말로 야수입니다.",
  "tags": [
    "가전",
    "노트북",
    "컴퓨터"
  ],
  "thumbnail": "https://storage.googleapis.com/heropy-api/vIKMk_jy4Yv195256.png",
  "photo": "https://storage.googleapis.com/heropy-api/voihKb3NLGcv195257.png",
  "isSoldOut": false,
  "reservations": [],
  "discountRate": 0
}
```

예약 정보(`reservation`)가 있는 경우:

```json
{
  "reservations": [
    {
      "reservation": {
        "start": "2021-11-12T06:00:00.000Z",
        "end": "2021-11-12T07:00:00.000Z",
        "isCanceled": false,
        "isExpired": true
      }
    }
  ] 
}
```