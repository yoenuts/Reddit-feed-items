window.Seed = (function () {
  function generateVoteCount() {
    return Math.floor((Math.random() * 50) + 15);
  }
  console.log("I was here")
  const products = [
    {
      id: 1,
      title: 'A windowless house',
      //description: 'On-demand sand castle construction expertise.',
      url: 'https://www.reddit.com/r/pics/comments/16d1nbl/a_windowless_house/',
      votes: generateVoteCount(),
      // submitterAvatarUrl: '/images/avatars/daniel.jpg',
      // productImageUrl: "/images/products/image-aqua.png"
      submitterAvatarUrl: "/images/avatars/kristy.png",
      productImageUrl: "/images/products/image-aqua.png"
    },
    {
      id: 2,
      title: 'Someone posted their view from work earlier. So here is mine….',
      //description: 'Earn points when your favorite politicians pass legislation.',
      url: 'https://www.reddit.com/r/pics/comments/16coooe/someone_posted_their_view_from_work_earlier_so/',
      votes: generateVoteCount(),
      submitterAvatarUrl: './images/avatars/kristy.png',
      productImageUrl: "/images/products/image-rose.png"
    },
    {
      id: 3,
      title: 'Sophia Loren, sometime in the 1950s',
      //description: 'We already have your measurements and shipping address.',
      url: 'https://www.reddit.com/r/pics/comments/16csva9/sophia_loren_sometime_in_the_1950s/',
      votes: generateVoteCount(),
      submitterAvatarUrl: '/images/avatars/veronika.jpg',
      productImageUrl: "/images/products/image-steel.png"
    },
    {
      id: 4,
      title: 'This watercolour painting took me 25 hours ',
      //description: 'High-minded or absent-minded? You decide.',
      url: 'https://www.reddit.com/r/pics/comments/16crxb7/this_watercolour_painting_took_me_25_hours/',
      votes: generateVoteCount(),
      submitterAvatarUrl: '/images/avatars/molly.png',
      productImageUrl: "/images/products/image-yellow.png"
    },
  ];

  return { products: products };
}());
