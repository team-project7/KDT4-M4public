export function appendMyProfile() {
  const myProfileEl = document.createElement('div')
  myProfileEl.className = 'my_profile'
  myProfileEl.innerHTML = /* html */ `
  <div class="my_profile">
    <div class="content_title border">
      <div class="title">
        <h3>프로필 정보</h3>
      </div>
    </div>

    <div class="user_profile">
      <div class="profile_thumb">
        <img
          src="/_nuxt/img/blank_profile.4347742.png"
          alt="사용자 이미지"
          class="thumb_img"
        />
      </div>
      <div class="profile_detail">
        <strong class="name"></strong>
        <div class="profile_btn_box">
          <a href="#" class="btn outlinegrey small"> 이미지 변경 </a
          ><a href="#" class="btn outlinegrey small"> 삭제 </a>
        </div>
      </div>
    </div>
    <input type="file" accept="image/jpeg,image/png" hidden="hidden" />
    <canvas width="1000" height="1000" style="display: none"></canvas>
    <div class="profile_info">
      <div class="profile_group">
        <h4 class="group_title">로그인 정보</h4>
        <div class="unit">
          <h5 class="title">이메일 주소</h5>
          <p class="desc email">w*******8@naver.com</p>
          <button type="button" class="btn btn_modify outlinegrey small">
            변경
          </button>
        </div>
        <div class="unit">
          <h5 class="title">비밀번호</h5>
          <p class="desc password">●●●●●●●●●</p>
          <button type="button" class="btn btn_modify outlinegrey small">
            변경
          </button>
        </div>
        <div class="unit">
          <h5 class="title">닉네임</h5>
          <p class="desc email">닉</p>
          <button type="button" class="btn btn_modify outlinegrey small">
            변경
          </button>
        </div>
      </div>
    </div>
  </div>
  `
}
