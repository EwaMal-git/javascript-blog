'use strict';


function titleClickHandler(event){
  event.preventDefault();
  const clickedElement = this;
  console.log('Link was clicked!');
  /* remove class 'active' from all article links  */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(const activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  clickedElement.classList.add('active');

  /* remove class 'active' from all articles */
  const activeArticles = document.querySelectorAll('.posts article.active');

for(const activeArticle of activeArticles){
  activeArticle.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */
  const articleSelector = clickedElement.getAttribute('href');
  console.log (articleSelector);


  /* find the correct article using the selector (value of 'href' attribute) */
  const targetArticle = document.querySelector(articleSelector);

  /* add class 'active' to the correct article */
  targetArticle.classList.add ('active');
}



const optArticleSelector = '.post',
  		optTitleSelector = '.post-title',
  		optTitleListSelector = '.titles';

function generateTitleLinks(){
	console.log ('Function was done');

  /* remove contents of titleList */
  const titleList = document.querySelector(optTitleListSelector);

	titleList.innerHTML= '';

  let html = '';

  const articles = document.querySelectorAll(optArticleSelector);

  for (const article of articles) {

    const articleId = article.getAttribute('id')
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;

    /* create HTML of the link */

    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';
    console.log(linkHTML);

     /* insert link into titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.insertAdjacentHTML('beforeend', linkHTML);
    console.log('titleList: ', titleList);
    html = html + linkHTML;
    console.log(html);
  }

  titleList.innerHTML = html;

  const links = document.querySelectorAll('.titles a');   

  for(let link of links){
    link.addEventListener('click', titleClickHandler);
  }

}

generateTitleLinks();


