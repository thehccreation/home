        const searchForm = document.getElementById('searchForm');
        
        searchForm.addEventListener('submit', function(e) {
            e.preventDefault(); // Stop the form from refreshing the page
            
            const query = document.getElementById('searchQuery').value;
            const engine = document.getElementById('engineSelector').value;
            let targetUrl = "";
            

            // Logic to handle different search URL structures
            switch(engine) {
                case 'velocity-ai':
                    targetUrl = `https://www.velocity.thehccreation.in/?q=${encodeURIComponent(query)}`;
                    break;
                case 'hcc-pixels':
                    targetUrl = `https://www.hccpixels.thehccreation.in/?q=${encodeURIComponent(query)}`;
                    break;
                case 'qr-code':
                    targetUrl = `https://thehccreation.github.io/createqr/?q=${encodeURIComponent(query)}`;
                    break;
                case 'quick-notes':
                    targetUrl = `https://thehccreation.github.io/quicknotes/?q=${encodeURIComponent(query)}`;
                    break;
                default:
                    targetUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
            }

            // Open the search in a new tab
            window.open(targetUrl, '_blank');

            query.value = ''; // Clear the search input after submission

        });
