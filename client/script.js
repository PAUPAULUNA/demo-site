document.getElementById('fetchDataBtn').addEventListener('click', fetchData);

async function fetchData() {
    const dataContainer = document.getElementById('dataContainer');
    dataContainer.innerHTML = 'Loading data...';
    try {
        // Make sure the port matches your backend server's port (e.g., 5000)
        const response = await fetch('http://localhost:5000/api/items');
        const data = await response.json();

        if (response.ok) {
            dataContainer.innerHTML = '<h2>Fetched Items:</h2>';
            if (data.length > 0) {
                const ul = document.createElement('ul');
                data.forEach(item => {
                    const li = document.createElement('li');
                    li.textContent = `ID: ${item.id}, Name: ${item.name}`; // Adjust based on your table columns
                    ul.appendChild(li);
                });
                dataContainer.appendChild(ul);
            } else {
                dataContainer.innerHTML += '<p>No items found.</p>';
            }
        } else {
            dataContainer.innerHTML = `<p>Error: ${data.message || response.statusText}</p>`;
        }
    } catch (error) {
        console.error('Error fetching data:', error);
        dataContainer.innerHTML = '<p>Failed to connect to the backend.</p>';
    }
}