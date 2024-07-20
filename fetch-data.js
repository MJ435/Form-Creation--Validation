document.addEventListener('DOMContentLoaded', () => {
  // Define the async function to fetch user data
  async function fetchUserData() {
    // Define the API URL
    const apiUrl = 'https://jsonplaceholder.typicode.com/users';

    // Select the data container element
    const dataContainer = document.getElementById('api-data');

    try {
      // Fetch data from the API
      const response = await fetch(apiUrl);
      
      // Check if the response is okay (status code 200-299)
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      
      // Convert the response to JSON
      const users = await response.json();

      // Clear the loading message
      dataContainer.innerHTML = '';

      // Create and append the user list
      const userList = document.createElement('ul');
      users.forEach(user => {
        const listItem = document.createElement('li');
        listItem.textContent = user.name;
        userList.appendChild(listItem);
      });
      dataContainer.appendChild(userList);
      
    } catch (error) {
      // Clear the existing content and show an error message
      dataContainer.innerHTML = 'Failed to load user data.';
      console.error('Error fetching user data:', error);
    }
  }

  // Call the function on DOMContentLoaded
  fetchUserData();
});
