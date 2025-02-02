const quoteText = document.getElementById('quote');
const authorText = document.getElementById('author');

// API URL and Key
const apiKey = $2y$10$jZiGw7SCrSt6lrtcNPFIcu2Gr0D6Bt9n62svv6DwugyW9JoUZPT7i; // Replace with your actual API key
const apiUrl = "https://api.hadithapi.com/v1/hadiths/random?lang=en&key=" + apiKey;

async function generateQuote() {
    try {
        const response = await fetch(apiUrl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        if (data && data.hadith) {
            quoteText.innerText = `"${data.hadith.text}"`;  // Hadith content
            authorText.innerText = `- ${data.hadith.source}`;  // Hadith source (e.g., Sahih Muslim)
        } else {
            quoteText.innerText = "No quote found!";
            authorText.innerText = "";
        }
    } catch (error) {
        console.error("Error fetching quote:", error);
        quoteText.innerText = "An error occurred. Please try again.";
        authorText.innerText = "";
    }
}

function copyQuote() {
    const quoteToCopy = `${quoteText.innerText} ${authorText.innerText}`;
    navigator.clipboard.writeText(quoteToCopy).then(() => {
        alert('Quote copied to clipboard!');
    });
}

function shareQuote() {
    const quoteContent = `${quoteText.innerText} - ${authorText.innerText}`;
    const shareUrl = `https://www.instagram.com/share?text=${encodeURIComponent(quoteContent)}`;
    window.open(shareUrl, '_blank');
}

function shareOnFacebook() {
    const quoteContent = `${quoteText.innerText} - ${authorText.innerText}`;
    const fbShareUrl = `https://facebook.com/sharer/sharer.php?u=${encodeURIComponent(quoteContent)}`;
    window.open(fbShareUrl, '_blank');
}

