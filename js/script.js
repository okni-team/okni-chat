const form = document.getElementById('message-form');
const input = document.getElementById('message-input');
const messageList = document.getElementById('message-list');
const otherMessageList = document.getElementById('other-message-list');

form.addEventListener('submit', (event) => {
    event.preventDefault();
    const message = input.value;
    if (message) {
        sendMessage(message);
    }
});

function sendMessage(message) {
    const li = document.createElement('li');
    li.innerText = message;
    messageList.appendChild(li);
    input.value = '';
}

function receiveMessage(message) {
    const li = document.createElement('li');
    li.innerText = message;
    otherMessageList.appendChild(li);
}

/* Set the width of the sidebar to 250px and the left margin of the page content to 250px */
function openNav() {
    document.getElementById("mySidebar").style.width = "300px";
    document.getElementById("main").style.marginRight = "250px";
  }
  
  /* Close the sidebar */
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginRight= "0";
  }

// Sample people array
let people = [
    { name: "John Smith", age: 35, occupation: "Engineer" },
    { name: "Jane Doe", age: 28, occupation: "Designer" },
    { name: "Mike Johnson", age: 42, occupation: "Accountant" },
    { name: "Sara Lee", age: 31, occupation: "Teacher" }
  ];
  
  // Get the search input element
  let searchInput = document.getElementById("search");
  let searchResult = document.getElementById("search-result");
  
  // Add event listener for input changes
  searchInput.addEventListener("input", function() {
    let searchTerm = searchInput.value.toLowerCase();
    
    // Filter the people array based on the search term
    let searchResults = people.filter(function(person) {
      return person.name.toLowerCase().includes(searchTerm);
    });

    // no results found
    if (searchResults.length === 0) {
        searchResult.innerHTML = "No results found, Try again!";
    } else {
        searchResult.innerHTML = "";
    }
    
    // Display the search results
    console.log(searchResults);
  });

  // Get the button element
let button = document.getElementById("btn");

// Add event listener for button click
button.addEventListener("click", function() {
  // Make a fetch request to get unread messages
  fetch("/api/unread-messages")
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      // Display the unread messages
      console.log(data);
    })
    .catch(function(error) {
      console.error(error);
    });
});

