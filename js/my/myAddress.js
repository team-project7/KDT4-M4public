export function appendMyAddress() {
  const myAddressEl = document.createElement('div')
  myAddressEl.className = 'my_address'
  myAddressEl.innerHTML = /* html */ `
  <div class="my_address">
    <div class="my_addressbook">
      <div class="content_title">
        <div class="title"><h3>주소록</h3></div>
        <div class="btn_box">
          <a href="" class="btn btn_add">
            <span class="btn_txt">+ 새 배송지 추가</span>
          </a>
        </div>
      </div>
    </div>
  </div>
  `
  const myAddressModal = document.createElement('div')
  myAddressModal.className = 'layer_delivery layer lg'
  myAddressModal.innerHTML = /* html */ `
  <div class="layer_container">
    <a href="" class="btn_layer_close">
      <div>
        <img
          src="../image/x.png"
          alt="x"
          class="ico-close icon sprite-icons"
        />
      </div>
    </a>
    <div class="layer_header">
      <h2 class="title">새 주소 추가</h2>
    </div>
    <div class="layer_content">
      <div class="delivery_bind">
        <div class="delivery_input">
          <div class="input_box">
            <h4 class="input_title">이름</h4>
            <div class="input_item">
              <input
                type="text"
                placeholder="수령인의 이름"
                autocomplete="off"
                class="input_txt"
              />
            </div>
            <p class="input_error">
              올바른 이름을 입력해주세요. (2 - 50자)
            </p>
          </div>

          <div class="input_box">
            <h4 class="input_title">휴대폰 번호</h4>
            <div class="input_item">
              <input
                type="tel"
                placeholder="- 없이 입력"
                autocomplete="off"
                class="input_txt"
              />
            </div>
            <p class="input_error">정확한 휴대폰 번호를 입력해주세요.</p>
          </div>

          <div class="input_box">
            <h4 class="input_title">우편번호</h4>
            <div class="input_item">
              <input
                type="text"
                placeholder="우편 번호를 검색하세요"
                readonly="readonly"
                autocomplete="off"
                class="input_txt"
              />
              <a href="" class="btn btn_zipcode outline small"></a>
            </div>
          </div>

          <div class="input_box">
            <h4 class="input_title">주소</h4>
            <div class="input_item">
              <input
                type="text"
                placeholder="우편 번호 검색 후, 자동입력 됩니다"
                readonly="readonly"
                autocomplete="off"
                class="input_txt"
              />
            </div>
          </div>

          <div class="input_box">
            <h4 class="input_title">상세 주소</h4>
            <div class="input_item">
              <input
                type="text"
                placeholder="건물, 아파트, 동/호수 입력"
                autocomplete="off"
                class="input_txt"
              />
            </div>
          </div>
        </div>
        <div class="delivery_check"></div>
      </div>
      <div class="layer_btn"></div>
    </div>
  </div>
  `
  //모달클릭이벤트
  const btnAdd = document.querySelector('.btn_add')
  btnAdd.addEventListener('click', () => {})
  return myAddressEl
}
