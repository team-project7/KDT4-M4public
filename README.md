<div align='center'>
<img src ="https://kream.co.kr/_nuxt/img/login_title.9f9ccc8.png" width="500">
<h2>Kream 사이트 클론 코딩하기</h2>
4차 팀과제 7조

<a href="https://github.com/jyc-coder">정영찬</a>　|　
<a href="https://github.com/whansoo">신환수</a>　|　
<a href="https://github.com/wooseongjeon">전우성</a>　|　
<a href="https://github.com/sung34">임성열</a>　|　
<a href="https://github.com/yong8048">이승용</a>

</div>

<div align="center">
  <img src="https://img.shields.io/badge/node-16.13.1-339933?logo=node.js"> 
</div>

## 소개

주어진 API를 분석해 자유롭게 프로젝트를 진행하는 과제에서 저희는 현재 신발,의류 및 다양한 제품을 판매하는 Kream 사이트를 클론코딩 해보기로 했습니다.

pr 기록 확인은 : https://github.com/team-project7/KDT4-M4public 이곳을 참조해주세요

## 배포 사이트 : https://kdt4-team7--hilarious-kleicha-d49179.netlify.app/

<div align="center">
<table>
<tr>
    <th>
      <div >
        <img src="https://user-images.githubusercontent.com/56331400/222455424-a3fbbd8d-5936-4c43-bad2-3f51454e5747.gif" width="400" height="270">
      </div>
      <div align="center">
      메인페이지
      </div>
    </th>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/56331400/222457535-a209af80-d251-4886-9397-2c8f49dbb730.gif" width="400" height="270">
      </div>
     <div align="center">
      상점 페이지
      </div>
    </th>
  </tr>
  <tr>
    <th>
      <div>
        <img src="https://user-images.githubusercontent.com/56331400/222487198-d125f96d-db74-4b09-aecb-e6b6499e2532.gif" width="400" height="270">
      </div>
      <div align="center">
      관리자 페이지
      </div>
    </th>
    <th>
      <div>
       <div>
        <img src="https://user-images.githubusercontent.com/56331400/222461250-308adb76-e7c8-40b7-afb8-846bb9fca287.gif" width="400" height="270">
      </div>
      </div>
      <div align="center">
      로그인 페이지
      </div>
    </th>
  </tr>
</table>
</div>

<details>
<summary> 👞 구현 기능 목록</summary>
<br>
  
**메인 페이지**
- 헤더, 배너, 숏컷, 브랜드 포커스, 제품 목록, 푸터로 구성되어있습니다.
- 배너 : 해당 테마와 관련된 제품을 보여주는 exhibition 페이지로 이동합니다.
- 숏컷 : 해당 테마와 관련된 제품을 보여주는 exhibition 페이지로 이동합니다.
- 브랜드 포커스 : 클릭시 해당 브랜드 제품을 검색결과로 하는 상점 페이지로 이동합니다.
- 제품 아이템 : 클릭하면 해당 제품 구매를 위해서 상세 페이지로 이동합니다.
  - 찜 목록 추가 : 우측 하단 아이콘을 클릭하면 아이콘의 색이 변하면서 찜목록에 추가. 만약 로그인 되지 않았을 경우 알림창이 나타납니다.

**마이 페이지**

- 구매 내역 : 사용자가 구매했던 제품 내역을 제품 이름과 함께 보여줍니다.
- 관심 상품 : 사용자가 찜목록에 추가한 제품을 보여줍니다.
- 프로필 정보 : 현재 사용자의 정보를 보여줍니다.

**상점 페이지**

- 검색 필터, 제품 목록, 서치 modal 로 구성되어있습니다.
- 검색 필터: 사용자가 원하는 제품의 태그를 선택하면 해당 태그와 관련된 제품의 목록이 우측에 렌더링됩니다.
  - 검색 필터 목록
    - 카테고리 : 신발, 의류, 패션잡화, 라이프, 테크
    - 성별: 남성, 여성, 키즈
    - 가격 : 10만원 이하, 10만원-30만원 이하, 30만원-50만원 이하, 50만원 이상
    - 브랜드 : 현재 추가되어있는 전체 데이터의 브랜드 항목이 추가되어있습니다.
- 서치 modal : 상단에 위치한 돋보기 모양의 아이콘을 클릭하면 제품을 검색할수 있는 검색창이 팝업됩니다.
  - 최근 검색어: 사용자가 최근에 검색한 키워드를 보여줍니다. 지우기를 누르면 전체 항목이 제거됩니다.
  - 추천 검색어: 사용자가 원하는 키워드를 클릭하면 해당 태그와 관련된 제품을 보여주는 상점페이지가 나타납니다.
  - 카테고리 : 추천검색어와 마찬가지로 원하는 제품 종류를 클릭하면 필터링된 제품 목록을 보여줍니다.
  - 인기 브랜드 : 원하는 브랜드를 클릭하면 해당 브랜드 제품을 보여줍니다.

**상세 페이지**

- 사용자가 원하는 물건을 구입하고 싶을 때 제품 목록중 하나를 클릭하면 제품의 상세 정보를 보여주고 결제의사에 따라 결제 페이지로 이동합니다.

- 하단에는 선택된 제품과 같은 브랜드의 제품 목록을 보여줍니다.

**결제 페이지**

- 상세 페이지에서 결제 버튼을 누르면 이동하는 페이지 입니다.
- 제품의 정보와 이미지를 간략하게 보여주고, 계좌를 선택하여 결제를 진행합니다. 만약 계좌가 존재하지 않으면 계좌를 새로 생성하여 결제를 진행하게 됩니다.

**관리자 페이지**

- 관리자의 계정으로만 들어갈수 있는 페이지입니다. 현재 등록된 상품 데이터를 crud 할 수 있으며 데이터 검색, 현재 회원가입한 모든 사용자들을 조회할수 있습니다.

- 특정 id로 로그인하지 않으면 들어갈수 없게 설정하여 보안을 강화했습니다.

**로그인 페이지**

- 사용자가 로그인을 하려고 할때 이동하는 페이지로, 회원이 아닐 경우 회원가입을 할수 있도록 회원 가입 버튼을 클릭하면 회원가입 페이지로 이동합니다.

- 각각의 id,pw 조건을 만족하지 않으면 로그인 버튼이 활성화되지 않습니다 (id: 이메일 양식, pw: 영어,숫자,특수문자를 포함한 8~16자 )

- 아래와 같은 상황일때 로그인 페이지로 이동합니다.
  - 로그인 한지 24시간 경과한경우
  - 로그인 하지 않은 상태에서 찜목록 아이콘을 클릭한 경우
  - 상세 페이지에서 결제를 시도할 때
  - 로그인 하지 않은 상태에서 메인 페이지의 헤더에 관심품목을 들어가려고 할 때

</details>
<br>
<br>

## 조원별 업무

<div align="center">

  | FE_정영찬 | FE_신환수 | FE_임성열 | FE_전우성 | FE_이승용 |
  |:--------:|:--------:|:--------:|:--------:|:--------:|
  | ![img](https://avatars.githubusercontent.com/u/56331400?width=200px&height=200px) | ![img](https://avatars.githubusercontent.com/u/98297436?width=200px&height=200px) | ![img](https://avatars.githubusercontent.com/u/120437898?width=200px&height=200px) | ![img](https://avatars.githubusercontent.com/u/120362689?width=200px&height=200px)|![img](https://avatars.githubusercontent.com/u/61074759?width=200px&height=200px)|
  |<sup>- 로그인 input 구현</sup><br><sup>- 회원가입 input 구현</sup><br><sup>- 제품 아이템 구현</sup><br><sup>- 찜목록 기능 구현</sup><br><sup>- 상점 검색필터 구현</sup><br><sup>- 상점 페이지 전용 제품 <br>아이템 구현</sup><br><sup>- 오류페이지 구현</sup><br>|<sup>- 헤더 컴포넌트 구현</sup><br><sup>- 배너 컴포넌트 구현</sup><br><sup>- exhibition 페이지 구현</sup><br><sup>- 상점 검색 모달 컴포넌트 구현</sup><br><sup>- 메인 페이지 숏컷 링크 연결 및 <br>- 태그별 페이지 구현(남자, 여자, 브랜드)</sup><br>|<sup>- 관리자 페이지 구현</sup><br><sup>- 제품 데이터 관리</sup><br><sup>- 결제화면 컴포넌트 구현</sup><br><sup>- 결제 완료 페이지 구현</sup><br><sup>- 계정 인증 기능 구현</sup><br>|<sup>- 브랜드 포커스 컴포넌트 구현</sup><br><sup>- 메인 페이지 태그별 <br>브랜드 포커스 렌더링</sup><br><sup>- 제품 상세 페이지 구현</sup><br><sup>- 상세 페이지 경고 주의사항 구현</sup><br><sup>- 상세 페이지 안내사항 구현</sup><br>|<sup>- 마이페이지 구현</sup><br><sup>- 숏컷 컴포넌트 구현</sup><br><sup>- 찜 목록 표시 기능 구현</sup><br><sup>- 프로필 수정 기능 구현</sup><br><sup>- 구매 목록 조회 기능 구현</sup><br>|

  
  </div>

  
## 💹 사이트맵

<img src="https://user-images.githubusercontent.com/56331400/222495640-a967324b-5de8-4ac4-bd08-cd554a62e526.jpg" >

## 플로우 차트

<div align="center">
<img src="https://user-images.githubusercontent.com/56331400/222724165-3b2dfabe-47bf-4f98-a568-567bf8f85456.png">
</div>

## 🗺️ 구현 전략

<details>
<summary> 역할분담 : 페이지보다는 컴포넌트로!  </summary>
<br>

- 처음 역할 분담을 정할 때 페이지 별이 아닌 페이지를 구성하는 컴포넌트 별로 역할 분담을 진행하여 컴포넌트가 구현이 되면 페이지를 조립해서 만드는 방식으로 접근했습니다.

- 각각의 컴포넌트를 구현&고도화를 진행하는 방식으로 프로젝트를 진행하면서, 오류가 발생했을때 "어느 페이지" 가 아닌 "어느 컴포넌트" 에서 발생했는지로 문제 해결 접근이 가능하여 유지/보수가 수월했습니다.

</details>

<details>
<summary> 초기에 관리자 페이지 생성을 통한 수월한 데이터 관리</summary>
<br>

- 프로젝트 시작 초기에 제품 데이터 crud를 하는 시간을 줄이기 위해서 관리자 페이지를 제작했습니다.

- 초기에 필요한 데이터를 추가한 다음, 추후에 발생할 데이터 수정/추가가 편리해지면서 프로젝트 진행 속도가 쳐지는 것을 막아보려고 했습니다

</details>

<details>
<summary>단 하나의 html파일, 여러개의 js모듈 </summary>
<br>

- 저희는 하나의 html파일 내부에 `navigo`를 사용해서 여러가지 경로에 따라 다른 페이지를 렌더링하는 방식으로 구현했습니다.

- 각각의 경로에 따른 컴포넌트 렌더링 메소드들은 모듈화를 진행하여, 다른 페이지에서도 쉽게 재사용이 가능하도록 제작하여 페이지 구현 시간을 줄이려고 시도했습니다.

- `index.js`의 코드가 비교적 간략해짐과 동시에 문제가 발생하여 수정/제거를 해야할 상황이 발생해도 어느 곳이 원인인지 쉽게 파악이 가능했습니다.

</details>
