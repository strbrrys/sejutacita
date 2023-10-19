// filter
document.addEventListener('DOMContentLoaded', () => {
    const select = document.querySelector('.select');
    const caret = document.querySelector('.caret');
    const filterMenu = document.querySelector('.filter_menu');
    const options = document.querySelectorAll('.filter_menu li');
    const contentLatest = document.querySelector('.content_latest');
    const contentPopular = document.querySelector('.content_popular');
  
    select.addEventListener('click', () => {
      select.classList.toggle('select-clicked');
      caret.classList.toggle('caret-rotate');
      filterMenu.classList.toggle('filter_menu-open');
    });
  
    options.forEach(option => {
      option.addEventListener('click', () => {
        const selectedOption = option.innerText;
        
        // close option menunya
        filterMenu.classList.remove('filter_menu-open');

        // Update text in the select element
        select.querySelector('.selected').innerText = selectedOption;
    
        // Reset the appearance of all options
        options.forEach(option => {
          option.classList.remove('active');
        });
    
        // Add active class to the clicked option
        option.classList.add('active');
    
        // Show/hide content based on the filter
        if (selectedOption === 'Latest Updates') {
          contentLatest.style.display = 'block';
          contentPopular.style.display = 'none';
        } else if (selectedOption === 'Popular Posts') {
          contentLatest.style.display = 'none';
          contentPopular.style.display = 'block';
        }
      });
    });

    // like button & count numb
    const forums = document.querySelectorAll('.forum');
      
      forums.forEach(forum => {
        const likesBtn = forum.querySelector('.likes_btn');
        const likesCount = forum.querySelector('.numb_like');
        const heartImage = forum.querySelector('.heart img');
        let likes = parseInt(likesCount.textContent);
        
        likesBtn.addEventListener('click', () => {
          if (heartImage.src.includes("icon_heart1.png")) {
            heartImage.src = "assets/icon_heart2.png";
            likes += 1;
          } else {
            heartImage.src = "assets/icon_heart1.png";
            likes -= 1;
          }
          likesCount.textContent = likes;
        });

        // comment section display
        const comsBtn = forum.querySelectorAll('.coms_btn');
        const comSection = forum.querySelector('.coms_section');
        comsBtn.forEach(comBtn => {
          comBtn.addEventListener('click', () => {
            if (comSection.style.display === 'none') {
              comSection.style.display = 'block';
            } else {
              comSection.style.display = 'none';
            }
          });
        });

      });
  });

// // like button
// const likesBtn = document.querySelector('.likes_btn');
// const heartIcon = document.querySelector('.heart img');
// const likesCount = document.querySelector('.numb_like');

// let likes = 12; // Init

// likesBtn.addEventListener('click', () => {
//     if (heartIcon.src.includes("icon_heart1.png")) {
//         heartIcon.src = "assets/icon_heart2.png";
//         likes++;
//     } else {
//         heartIcon.src = "assets/icon_heart1.png";
//         likes--;
//     }
//     likesCount.textContent = likes;
// });

