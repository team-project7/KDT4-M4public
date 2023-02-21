import { searchAll } from './request'



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
                            <a href="#">지우기</a>
                        </div>
                        <div class="recent_box">
                            <div class="recent_list">
                                
                            </div>
                        </div>
                    </div>
                    <div class="search_suggest"></div>
                    <div class="search_card_items"></div>
                    <div class="search_card_items"></div>
                    <div class="recent_area"></div>
                </div>
            </div>
        </div>
       
    </div>
    
    
    
    `
    document.body.append(searchEl)
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


const searchtitleEl = document.getElementById('search_title')
searchtitleEl.addEventListener('input', function() {
    let searchtext = searchtitleEl.value.trim();
        findtitle(searchtext)
    })

    let searchtxtlist = []
searchtitleEl.addEventListener('keydown', function (e) {
    let searchtext = searchtitleEl.value.trim();
    if(e.key === 'Enter' && !e.isComposing) {
        
        searchtxtlist.push(searchtext)
        // localStorage.setItem('searchtxtlist', JSON.stringify(searchtxtlist));
        aaa(searchtxtlist)
        bbb(searchtext)
    }
})

function findtitle(searchtext) {
    const searchList = document.getElementById('search-list');
    searchList.innerHTML = "";
    if(searchtext.length > 0){
        searchList.classList.remove('hide-search-list');
        searchAll(searchtext) 
    } else {
        searchList.classList.add('hide-search-list');
    }
   
  }
}


export function searchList(items,newseartext){
   let tagsarr = []
    const searchList = document.getElementById('search-list');

    items.map((title) => {
     let b = title.tags.filter((a) => a.toLowerCase().includes(newseartext))
    
     tagsarr.push(...b)
    
    }) 
    let set = new Set(tagsarr);
    let tags = [...set].join('')
    searchList? searchList.innerHTML = "" : null;
    let productListtag = document.createElement('div');
    productListtag.classList.add('search-list-tags');
    productListtag.innerHTML = ` 
    <a href='/shop/?${tags}'>
        <div>
        <p>${tags}</p>
        </div>
    </a>
    
    `
    searchList? searchList.append(productListtag) : null
    // productListtag.addEventListener('click', (e) => {
 
    //     e.preventdefault();
    //     localStorage.setItem('searchtxtlist', JSON.stringify(tags));
    // })
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


// function aaa(searchtxtlist) {
//     localStorage.setItem('searchtxtlist', JSON.stringify(searchtxtlist));
// }
function bbb(searchtext) {
    location.replace(`/shop/?${searchtext}`)
}

