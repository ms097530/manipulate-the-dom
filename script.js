let quotes = [
  `I live my life a quarter mile at a time`,
  `I said a ten-second car, not a ten-minute car`,
  `You can have any brew you want... as long as it's a Corona.`,
  `You almost had me? You never had me - you never had your car!`,
  `I don't have friends. I have family.`,
  `It don't matter if you win by an inch or a mile. Winning's winning.`
];

document.addEventListener("DOMContentLoaded", function (event)
{
  // Random quote of the day generator
  const randomQuote = function ()
  {
    document.querySelector('#quote-of-the-day').textContent = `"${quotes[Math.floor(Math.random() * quotes.length)]}"`;
  };
  randomQuote();

  // Do all of your work inside the document.addEventListener  

  // Part 1
  let mainTitle = document.getElementById('main-title')
  mainTitle.textContent = 'All About DOM'

  // Part 2
  document.body.style.backgroundColor = 'rgba(30, 140, 10, 0.3)'

  // Part 3
  let faveThings = document.getElementById('favorite-things')
  faveThings.lastElementChild.remove()

  // Part 4
  let specialTitles = document.querySelectorAll('.special-title')
  specialTitles.forEach(title =>
  {
    title.style.fontSize = '2rem'
  })

  // Part 5
  let pastRacesList = document.getElementById('past-races')
  // console.log(pastRacesList.childNodes)
  let foundNode
  pastRacesList.childNodes.forEach(node =>
  {
    if (node.textContent && node.textContent.toLowerCase() === 'chicago')
    {
      foundNode = node
      return
    }
  })
  // console.log(foundNode)
  foundNode.remove()

  // Part 6
  let newRace = document.createElement('li')
  newRace.textContent = 'Pittsburgh'
  pastRacesList.append(newRace)

  // Part 7
  // select main content div
  let mainArea = document.querySelector('.main')

  // create nodes that make up a blog post
  let blogPost = document.createElement('div')
  blogPost.classList.add('blog-post', 'purple')
  let postHeader = document.createElement('h1')
  postHeader.textContent = 'Pittsburgh'
  let postText = document.createElement('p')
  postText.textContent = 'I ALMOST FELL INTO ONE OF THE RIVERS'
  // nest content nodes inside blogPost
  blogPost.append(postHeader, postText)

  // add blog post to main content div
  mainArea.append(blogPost)

  // Part 8
  const quoteButton = document.getElementById('quote-title')
  quoteButton.addEventListener('click', (e) =>
  {
    randomQuote()
  })
  // Part 9

  // utility function
  function togglePost(post)
  {
    post.classList.toggle('purple')
    post.classList.toggle('red')
  }

  // -------- CORRECT --------
  // using mouseleave
  let blogPosts = document.querySelectorAll('.blog-post')
  console.log(blogPosts)
  blogPosts.forEach(post =>
  {
    post.addEventListener('mouseleave', (e) =>
    {
      console.log('LEAVING')
      togglePost(e.target)
    })
    post.addEventListener('mouseenter', (e) =>
    {
      console.log('ENTERED')
      togglePost(e.target)
    })
  })

  function togglePost(post)
  {
    post.classList.toggle('purple')
    post.classList.toggle('red')
  }

  // -------- INCORRECT --------
  // using mouseout
  // let blogPosts = document.querySelectorAll('.blog-post')
  // console.log(blogPosts)
  // blogPosts.forEach(post =>
  // {
  //   post.addEventListener('mouseout', (e) =>
  //   {
  //     console.log('LEAVING')
  //     togglePost(e.target)
  //   })
  //   post.addEventListener('mouseenter', (e) =>
  //   {
  //     console.log('ENTERED')
  //     togglePost(e.target)
  //   })
  // })

});
