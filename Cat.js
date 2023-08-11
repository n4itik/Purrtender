class Cat {
  constructor(data) {
    Object.assign(this, data);
  }

  getCatHtml() {
    const { name, avatar, age, bio } = this;
    return `<img class="pfp" src="${avatar}" alt="${name}'s Profile Picture" draggable="false"/>
            <img id="badge-like" src="images/badge-like.png" draggable="false"/>
            <img id="badge-nope" src="images/badge-nope.png" draggable="false"/>
            <div class="description">
                <h1>${name}, ${age}</h1>
                <p>${bio}</p>
            </div>`;
  }
}

export default Cat;
