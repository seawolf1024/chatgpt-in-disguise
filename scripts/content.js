// 导航栏
if (!document.getElementById("customNavBar")) {
  // Create the navigation bar element if it doesn't exist
  const navBar = document.createElement("div");
  navBar.id = "customNavBar";
  navBar.style.position = "fixed";
  navBar.style.top = "0";
  navBar.style.left = "0";
  navBar.style.width = "100%";
  navBar.style.height = "60px"; // Adjust height as needed
  navBar.style.backgroundColor = "#ffffff"; // StackOverflow's orange color
  navBar.style.zIndex = "1000"; // Ensure it stays above other elements
  navBar.style.boxShadow = "0 2px 4px rgba(0, 0, 0, 0.2)";
  navBar.style.borderTop = "3px solid #f48024"; // Add a thin orange line at the top

  // Use flexbox to align items horizontally
  navBar.style.display = "flex";
  navBar.style.alignItems = "center"; // Vertically center the items
  navBar.style.paddingLeft = "20px"; // Add some padding to the left
  navBar.style.justifyContent = "space-between"; // Spread items across the nav bar
  navBar.style.paddingRight = "100px"; // Ensure the right container is within margins

  // Add an image to the navigation bar
  const navImage = document.createElement("img");
  navImage.src = "https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-logo.png";
  navImage.alt = "StackOverflow Logo";
  navImage.style.height = "40px"; // Adjust as needed
  navImage.style.margin = "10px"; // Center the image vertically in the bar

  // Add the image to the navigation bar
  navBar.appendChild(navImage);

  // Create the right container for the other elements
  const rightContainer = document.createElement("div");
  rightContainer.style.display = "flex"; // Use flex to arrange elements in a row
  rightContainer.style.alignItems = "center"; // Vertically center the elements in rightContainer
  rightContainer.style.marginRight = "200px"; // Add some space between the logo and right container

  // Add "Products" and "OverflowAI" text
  const text1 = document.createElement("span");
  text1.textContent = "Products";
  text1.style.fontSize = "13px";
  text1.style.color = "#6e6e6e";
  text1.style.marginRight = "20px"; // Space between text
  rightContainer.appendChild(text1);

  const text2 = document.createElement("span");
  text2.textContent = "OverflowAI";
  text2.style.fontSize = "13px";
  text2.style.color = "#6e6e6e";
  text2.style.marginRight = "20px"; // Space between text
  rightContainer.appendChild(text2);

  // Add the search bar with icon
  const searchBar = document.createElement("input");
  searchBar.type = "text";
  searchBar.placeholder = "Search...";
  searchBar.style.fontSize = "13px";
  searchBar.style.color = "#6e6e6e";
  searchBar.style.borderRadius = "15px"; // Rounded corners
  searchBar.style.paddingLeft = "30px"; // Space for the left icon
  searchBar.style.width = "700px";
  searchBar.style.height = "30px";
  searchBar.style.marginRight = "20px"; // Space between the search bar and icon
  searchBar.style.position = "relative";

  // Create search icon (magnifier) for the left side
  const searchIcon = document.createElement("span");
  searchIcon.innerHTML = "&#128269;"; // Unicode for magnifier icon
  searchIcon.style.position = "absolute";
  searchIcon.style.left = "10px"; // Position inside the search bar
  searchIcon.style.top = "50%";
  searchIcon.style.transform = "translateY(-50%)";
  searchBar.appendChild(searchIcon);

  // Create right-side icon (Material Symbols - Menu icon)
  const rightIcon = document.createElement("span");
  rightIcon.className = "material-symbols-outlined"; // Material icon class
  rightIcon.textContent = "menu"; // Icon name for "menu"
  rightIcon.style.position = "absolute";
  rightIcon.style.right = "10px"; // Position on the right side of the search bar
  rightIcon.style.top = "50%";
  rightIcon.style.transform = "translateY(-50%)"; // Center the icon vertically
  searchBar.appendChild(rightIcon);

  // Add the search bar to the right container
  rightContainer.appendChild(searchBar);

  // Add the right container to the navigation bar
  navBar.appendChild(rightContainer);

  // Append the navigation bar to the body of the page
  document.body.prepend(navBar);

  // Add margins to the body to apply left and right space
  document.body.style.marginLeft = "100px"; // Left margin
  document.body.style.marginRight = "100px"; // Right margin
}



// 右侧长图
// Check if the image already exists
if (!document.getElementById("scrollingImage")) {
  // Create the image element
  const scrollImage = document.createElement("img");
  scrollImage.id = "scrollingImage";
  scrollImage.src = "https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaad2b46-555a-401e-b221-a113a9a3fc72/dio2ux6-1d55ff84-f687-4b02-a3d5-0a252731ebe2.png/v1/fill/w_394,h_3000/stackoverflow_background_image_by_happytompson_dio2ux6-fullview.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MzAwMCIsInBhdGgiOiJcL2ZcL2VhYWQyYjQ2LTU1NWEtNDAxZS1iMjIxLWExMTNhOWEzZmM3MlwvZGlvMnV4Ni0xZDU1ZmY4NC1mNjg3LTRiMDItYTNkNS0wYTI1MjczMWViZTIucG5nIiwid2lkdGgiOiI8PTM5NCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.CyB1W5iTEM5sHWOf1-qEt0WDBcBFpcb25JwQixJFjbY"; // Change the URL to your image source
  scrollImage.alt = "Scrolling Image";
  
  // Set the image's original size (200x3000)
  scrollImage.style.position = "absolute"; // Position it absolutely on the page
  scrollImage.style.top = "0"; // Start at the top of the page
  scrollImage.style.right = "0"; // Position it on the right
  scrollImage.style.width = "300px"; // Set the width of the image
  scrollImage.style.height = "2200px"; // Set the height of the image to keep the original size
  scrollImage.style.zIndex = "500"; // Ensure it's above other content
  scrollImage.style.objectFit = "initial"; // Prevent scaling/distortion
  scrollImage.style.marginRight = "100px";
  scrollImage.style.marginTop = "100px";
  // Append the image to the body
  document.body.appendChild(scrollImage);
}



// 整体右边距
if (!document.getElementById("allelement")) {
const allelement = document.querySelector('.relative.flex.h-full.max-w-full.flex-1.flex-col.overflow-hidden');
allelement.style.marginRight = '300px';
}



// 穿插图片
imageSources = [
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaad2b46-555a-401e-b221-a113a9a3fc72/dio33wz-fcd5aeb2-79fe-4728-b3b7-f448a856d442.png/v1/fill/w_927,h_145,q_80,strp/ad1_by_happytompson_dio33wz-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ1IiwicGF0aCI6IlwvZlwvZWFhZDJiNDYtNTU1YS00MDFlLWIyMjEtYTExM2E5YTNmYzcyXC9kaW8zM3d6LWZjZDVhZWIyLTc5ZmUtNDcyOC1iM2I3LWY0NDhhODU2ZDQ0Mi5wbmciLCJ3aWR0aCI6Ijw9OTI3In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.SJ6BEifcxCWD5JYbLENd48u3WBj5EOeQMnjiK-ZO-F4',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaad2b46-555a-401e-b221-a113a9a3fc72/dio33w2-70f7c6a9-e996-4e3a-82c3-716005adb068.png/v1/fill/w_864,h_141,q_80,strp/ad4_by_happytompson_dio33w2-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQxIiwicGF0aCI6IlwvZlwvZWFhZDJiNDYtNTU1YS00MDFlLWIyMjEtYTExM2E5YTNmYzcyXC9kaW8zM3cyLTcwZjdjNmE5LWU5OTYtNGUzYS04MmMzLTcxNjAwNWFkYjA2OC5wbmciLCJ3aWR0aCI6Ijw9ODY0In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.uQDdr3MQfelwOsZU4tMcCZmcH3uxZSLvqc0GgIQjQuE',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaad2b46-555a-401e-b221-a113a9a3fc72/dio33vx-43b5d274-dd56-439a-ba3a-b9a1b4e4ce67.png/v1/fill/w_929,h_148,q_80,strp/ad5_by_happytompson_dio33vx-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQ4IiwicGF0aCI6IlwvZlwvZWFhZDJiNDYtNTU1YS00MDFlLWIyMjEtYTExM2E5YTNmYzcyXC9kaW8zM3Z4LTQzYjVkMjc0LWRkNTYtNDM5YS1iYTNhLWI5YTFiNGU0Y2U2Ny5wbmciLCJ3aWR0aCI6Ijw9OTI5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.8T7NTeHlOgpfuh-7S0QLNc10eXSKlbksid5RHuu6jk4',
  'https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/eaad2b46-555a-401e-b221-a113a9a3fc72/dio33wb-ac92d4f1-96b3-439a-b72e-c5fa8b493a51.png/v1/fill/w_889,h_142,q_80,strp/ad3_by_happytompson_dio33wb-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTQyIiwicGF0aCI6IlwvZlwvZWFhZDJiNDYtNTU1YS00MDFlLWIyMjEtYTExM2E5YTNmYzcyXC9kaW8zM3diLWFjOTJkNGYxLTk2YjMtNDM5YS1iNzJlLWM1ZmE4YjQ5M2E1MS5wbmciLCJ3aWR0aCI6Ijw9ODg5In1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmltYWdlLm9wZXJhdGlvbnMiXX0.5cTdKbBPb53YDZkebZRW7eyeo_AtmUS6a4i_bEt6gis',
];

// Function to select a random image from the array
function getRandomImage() {
  const randomIndex = Math.floor(Math.random() * imageSources.length);
  return imageSources[randomIndex];
}


// Function to add an image to the newly added article
function addImageToArticle(article) {
  // Check if the article already has an image
  const existingImage = article.querySelector('img');
  if (!existingImage) {
    // Create the image element
    const image = document.createElement('img');
    image.src = getRandomImage(); // Set the src to a randomly selected image
    image.alt = 'Random image below article'; // Set alt text
    image.style.width = '100%'; // Optional: Set the width of the image to be 100% of the article's width
    image.style.height = 'auto'; // Optional: Maintain aspect ratio

    // Append the image below the current article
    article.appendChild(image);
  }
}

// Variable to count the number of newly added articles
newArticleCount = 0;


if (!document.getElementById("observer")) {
// Create a MutationObserver to watch for added articles
  const observer = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      // Check if new nodes are added
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'ARTICLE') {
          newArticleCount++; // Increment the counter for new articles

          // When two new articles are added, add an image to the second one
          if (newArticleCount === 2) {
            addImageToArticle(node); // Add image to the second article
            newArticleCount = 0; // Reset the counter
          }
        }
      });
    });
  });

  // Configure the observer to watch for added child nodes (new articles)
  const config = { childList: true, subtree: true };

  // Start observing the body (or a more specific container)
  observer.observe(document.body, config);
}


// Loop through every 2nd article and add a randomly selected image below it
document.querySelectorAll('article').forEach((article, index) => {
  // Check if the index is even (for every 2nd article)
  if (index % 2 === 1) { // index starts from 0, so 1st, 3rd, 5th, etc. are odd
    // Create the image element
    const image = document.createElement('img');
    image.src = getRandomImage(); // Set the src to a randomly selected image
    image.alt = 'Random image below article'; // Set alt text
    image.style.width = '100%'; // Optional: Set the width of the image to be 100% of the article's width
    image.style.height = 'auto'; // Optional: Maintain aspect ratio
    
    // Insert the image below the current article
    article.appendChild(image);
  }
});


function setTabIcon(iconUrl) {
	// 修改页面图标
	let links = document.querySelectorAll("link[rel*='icon']");
	links.forEach(node => {
		node.parentNode.removeChild( node )
	})
	let link = document.createElement('link');
	link.type = 'image/x-icon';
	link.rel = 'shortcut icon';
	link.href = iconUrl;
	document.getElementsByTagName('head')[0].appendChild(link);
}

setTabIcon("https://cdn2.iconfinder.com/data/icons/social-icons-33/128/Stack_Overflow-512.png");




// Function to remove all existing SVG elements
function removeAllSVGs() {
  const svgs = document.querySelectorAll('svg');
  svgs.forEach(svg => svg.remove());
}

// Remove all existing SVGs when the page loads
removeAllSVGs();

if(!document.getElementById("observer2")){
  // Set up a MutationObserver to detect when new SVG elements are added
  const observer2 = new MutationObserver((mutationsList) => {
    mutationsList.forEach((mutation) => {
      mutation.addedNodes.forEach((node) => {
        if (node.tagName === 'SVG') {
          node.remove(); // Remove the newly added <svg> element
        }
      });
    });
  });



  // Configure the observer to look for added child nodes in the entire document body, including subtree
  const config2 = { childList: true, subtree: true };

  // Start observing the body element for new additions
  observer2.observe(document.body, config2);

}



