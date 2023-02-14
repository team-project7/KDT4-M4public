export function addSection () {
  const adminContainer = document.createElement('div')
  adminContainer.innerHTML = /*html*/`
  <div class="admin-container">
      <section class="interactive">
        <div class="item-info">
          <label for="title">Title</label>
          <input id="admin-title-input" type="text" for="title" />
          <label for="desc">Desc</label>
          <input id="admin-description-input" type="text" for="desc" />
          <label for="price">Price</label>
          <input id="admin-price-input" type="text" for="price" />
          <label for="tags">Tags</label>
          <input id="admin-tags-input" type="text" for="tags" />
        </div>
        <div class="image-field">
          <label for="image">Image</label>
          <input id="admin-file-input" type="file" for="image" />
          <canvas id="admin-canvas"></canvas>
          <button id="admin-add-btn">ADD</button>
        </div>
      </section>
      <select id="search-option">
        <option value="admin-all"></option>
        <option value=""></option>
        <option value=""></option>
      </select>
      <section class="search">
        <span id="count"></span>
        <ul id="search-result"></ul>
      </section>

      <aside class="admin-nav">
        <button class="toggle-btn"></button>
        <ul class="nav-items">
          <li class="nav-items__logo">
            <a href="/"></a>
          </li>
          <li class="nav-items__add">
            <button id="admin-add-btn">ADD</button>
          </li>
          <li class="nav-items__edit">
            <button id="admin-edit-btn">EDIT</button>
            <input id="admin-edit-input" type="text" placeholder="ITEM ID" />
          </li>
          <li class="nav-items__remove">
            <button id="admin-remove-btn">REMOVE</button>
            <input id="admin-remove-input" type="text" placeholder="ITEM ID" />
          </li>
        </ul>
      </aside>
    </div>
  `
  return adminContainer
}
