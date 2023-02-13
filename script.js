const issueList = document.querySelector('#issueList');
const pageNumber = document.querySelector('#pageNumber');
const loadNext = document.querySelector('#load_next');
const loadPrev = document.querySelector('#load_prev');

let currentPage = 1;

const getIssues = page => {
  fetch(`https://api.github.com/repositories/1296269/issues?page=${page}&per_page=5`)
    .then(res => res.json())
    .then(data => { console.log(data),
      issueList.innerHTML = '';
      data.forEach(issue => {
        const li = document.createElement('li');
        li.textContent = issue.title;
        issueList.appendChild(li);
      });
      pageNumber.textContent = `Page Number ${currentPage}`;
    });
};

loadNext.addEventListener('click', () => {
  currentPage++;
  getIssues(currentPage);
});

loadPrev.addEventListener('click', () => {
  if (currentPage > 1) {
    currentPage--;
    getIssues(currentPage);
  }
});

getIssues(currentPage);

