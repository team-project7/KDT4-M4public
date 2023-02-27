import { searchAll } from './request'
import { category,brand } from './searchitems'

export function appendsearch() {
    const searchEl = document.createElement('div')
    searchEl.className = 'layer_btn'
    searchEl.innerHTML = /*html*/ `
    <div class="layer_search">
        <div class="layer_container">
            <div class="layer_content">
                <div class="search_container">
                    <div class="search_wrap">
                        <div class="search_area">
                            <div class="search">
                                <img src="https://user-images.githubusercontent.com/98297436/217512067-d5706d42-f578-44c5-86cd-e2fe7080c304.png" alt="">
                                <input type="text" class="input_search" id="search_title" placeholder="브랜드명, 모델명, 모델번호 등" >
                              
                            </div>
                        </div>
                        
                        <button class="btn_close">취소</button>
                        
                    </div>
                    <div class = "search-list" id = "search-list">
                                <!-- list here -->
                               
                    </div>
                </div>
                <div class="search_content_wrap">
                    <div class="recent_area">
                        <div class="layer_search_item">
                            <span class="title">최근 검색어</span>
                            <a href="#" id='search_list_delete'>지우기</a>
                        </div>
                        <div class="recent_box">
                            <div id="recent_list"></div>
                        </div>
                    </div>
                    <div class="search_card_items">
                       <div>
                          <span>추천 검색어</span>
                       </div>
                       <div class="search_card_wrap">
                         <a href="/shop/?id=남성">남성</a>
                         <a href="/shop/?id=의류">의류</a>
                         <a href="/shop/?id=신발">신발</a>
                         <a href="/shop/?id=후드">후드</a>
                         <a href="/shop/?id=패딩">패딩</a>
                         <a href="/shop/?id=스니커즈">스니커즈</a>
                         <a href="/shop/?id=Rolex">Rolex</a>
                         <a href="/shop/?id=Chanel">Chanel</a>
                       </div>
                    </div>
                    <div class="search_card_items">
                       <div>
                          <span>카테고리</span>
                         <div class="category"> 
                            
                         </div>
                       </div>
                    </div>
                    <div class="search_card_items">
                    <div>
                        <span>인기 브랜드</span>
                        <div class="brand"> 
                        
                        </div>
                       </div>
                    </div>
                    <div class="recent_area"></div>
                </div>
            </div>
        </div>
       
    </div>
    
    
    
    `
    document.body.append(searchEl)
    let ctegoryEl = document.querySelector('.category')
    category.map((catelist) => {
        let catewarap = document.createElement('div')
        catewarap.className = 'catewrap'
        catewarap.innerHTML = `
         <a href = /shop/?id=${catelist.name} class='catelink'>
          <div class = "cate_item_wrap">
          <img src = ${catelist.img}>
          </div>
          <span>${catelist.name}</span>
          </a>
        `
        ctegoryEl.append(catewarap)
      })
      let brandEl = document.querySelector('.brand')
      brand.map((brandlist) => {
        let brandwarap = document.createElement('div')
        brandwarap.className = 'brandwrap'
        brandwarap.innerHTML = `
         <a href = /shop/?id=${brandlist.id} class='brandlink'>
          <div class = "brand_item_wrap">
          <img src = ${brandlist.img}>
          </div>
          <span>${brandlist.name}</span>
          </a>
        `
        brandEl.append(brandwarap)
      })
    const searchbtn = document.querySelector('.btn_search')

searchbtn.addEventListener('click', () => {
    openmodal() 
})
function openmodal() {
    const searchlayer = document.querySelector('.layer_btn')
    searchlayer.style.display = 'flex';
 
}

    const closebtn = document.querySelector('.btn_close')
closebtn.addEventListener('click', () => {
    closemodal()
})
function closemodal() {
    const searchlayer = document.querySelector('.layer_btn')
    searchlayer.style.display = 'none'
}

function debounce(callback, limit = 100) {
    let timeout
    return function(...args) {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
            callback.apply(this, args)
        }, limit)
    }
}

const searchtitleEl = document.getElementById('search_title')
searchtitleEl.addEventListener('input', debounce(function() {
   
    let searchtext = searchtitleEl.value.trim();
        findtitle(searchtext)
    }, 200)
)
    let searchtxtlist = []
    // let search
   let search = localStorage.getItem('searchtxtlist')
//   search? localStorage.getItem('searchtxtlist') : null
searchtitleEl.addEventListener('keydown', function (e) {
    let searchtext = searchtitleEl.value.trim();
    if(e.key === 'Enter' && !e.isComposing) {
    if(search === null) {
        searchtxtlist.push(searchtext)
    } else {
        searchtxtlist.push(search, searchtext)
    }
        
        localStorage.setItem('searchtxtlist', searchtxtlist);
      location.href = `/shop/?id=${searchtext}`
        
       
    }
})
 if(localStorage.getItem('searchtxtlist')) {
    let searchlist = localStorage.getItem('searchtxtlist').split(',')

    const recentlist = document.getElementById('recent_list')
    searchlist?
    searchlist.map((list) =>  {
        let linkEl = document.createElement('a')
        linkEl.className = 'search_list_items'
        linkEl.href = `/shop/?id=${list}`
        linkEl.innerHTML = `
         <span>${list}</span>
        `
        recentlist.append(linkEl)
    
    }) : null
 }
 const recentlist = document.getElementById('recent_list')
let list_delete = document.getElementById('search_list_delete')
list_delete.addEventListener('click', () => {
    localStorage.removeItem('searchtxtlist');
    recentlist.style.display = 'none'
   
}) 

function findtitle(searchtext) {
    const searchList = document.getElementById('search-list');
    let recentshow = document.querySelector('.search_content_wrap')
    searchList.innerHTML = "";
    if(searchtext.length > 0){
        recentshow.style.display = 'none'
        searchList.classList.remove('hide-search-list');
        searchAll(searchtext) 
    } else {
        recentshow.style.display = 'flex'
        searchList.classList.add('hide-search-list');
    }
   
  }
  
}


export function searchList(items,newseartext){
    
   let tagsarr = []
    const searchList = document.getElementById('search-list');

    items.map((title) => {
        if(newseartext && Array.isArray(title.tags)) {
            let b = title.tags.filter((a) => a.toLowerCase().includes(newseartext))
            tagsarr.push(...b)
        } 
    })
   
    let set = new Set(tagsarr);
    let tags = [...set].join('')
    searchList? searchList.innerHTML = "" : null;
    let productListtag = document.createElement('div');
    productListtag.classList.add('search-list-tags');
    productListtag.innerHTML = ` 
    <a href='/shop/?id=${tags}' id='tag_select'>
        <div>
        <p>${tags}</p>
        </div>
    </a>
    
    `
    searchList? searchList.append(productListtag) : null
    // tags클릭시 tag가 localstorage에 저장
    let newlist = []
    let newsearchlist = localStorage.getItem('searchtxtlist')
    let tagselect = document.getElementById('tag_select')
    tagselect?
    tagselect.addEventListener('click', () => {
    if(newsearchlist === null) {
        newlist.push(tags)
    } else {
        newlist.push(newsearchlist, tags)
    }
        localStorage.setItem('searchtxtlist', newlist);
   }) : null

    
    items.filter(a => a.title.toLowerCase().includes(newseartext)).map((title) => {
        let productListItem = document.createElement('div');
        productListItem.classList.add('search-list-item');
        productListItem.innerHTML = `    
        <a href='${title.id}' class = "search_area_link">
        <div class = "search-item-thumbnail">
         <img src = '${title.thumbnail}'>
        </div>
        <div class = "search-item-info">
            <p class = 'search_title'>${title.title}</p>
            <p class = 'sub_info'>${title.description}</p>
        </div>
        </a>
        `
        searchList.append(productListItem)
        
    }) 
 
   
}


