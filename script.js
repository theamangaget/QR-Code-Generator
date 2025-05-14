const input = document.getElementById('input');
const qrimg = document.getElementById('qr-img');
const button = document.getElementById('btn');

button.addEventListener('click', () => {
    const inputValue = input.value.trim();

    if (!inputValue) {
        alert("Please enter a valid URL");
        return;
    }

    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${encodeURIComponent(inputValue)}`;
    qrimg.src = qrUrl;
    qrimg.alt = `QR Code for ${inputValue}`;

    qrimg.onload = () => {
        // Create a temporary <a> element for auto download
        const a = document.createElement('a');
        a.href = qrUrl;
        a.download = 'qr-code.png';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    };
});

