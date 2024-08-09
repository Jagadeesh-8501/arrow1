function openService(service) {
    fetch('service.json')
        .then(response => response.json())
        .then(data => {
            if (data[service]) {
                const url = `service_details copy.html?service=${service}`;
                // Open the URL in a new tab
                window.open(url, '_blank');
            } else {
                console.error('Service not found in JSON.');
            }
        })
        .catch(error => {
            console.error('Error loading the JSON file:', error);
        });
}
