const list = document.querySelector('.posts')
const pagesList = document.querySelector('.pages')

let pageNumber = 1;

const getData = async (page) => {
    const resp = await fetch(`https://jsonplaceholder.typicode.com/posts?_page=${page}`)
    const data = await resp.json()
    list.textContent = '';
    data.map((p) => {
        list.insertAdjacentHTML('afterbegin', ` <li>
            <hr>
            <div>
                UserId:${p.userId}
            </div>
            <h2>
                ${p.title}
            </h2>
            <p>${p.body}
            </p>
            <hr>
        </li>`)
    })
}

const pages = document.querySelectorAll('.page')
pages.forEach((page) => {
    page.addEventListener('click', (e) => {

        document.querySelector('.active').classList.remove("active")
        e.target.classList.add("active")
        pageNumber = e.target.textContent
        getData(pageNumber)
    })
})
getData(pageNumber)