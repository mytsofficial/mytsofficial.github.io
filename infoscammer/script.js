// script.js

// Fungsi untuk memuat data scammer dari listscammer.json
async function loadResellerData() {
    try {
        const response = await fetch('./listscammer.json');
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Sistem Error:', error);
        return [];
    }
}

let resellerData = [];

// Memuat data reseller saat halaman dimuat
document.addEventListener('DOMContentLoaded', async () => {
    resellerData = await loadResellerData();
});

function checkReseller() {
    const inputNumber = document.getElementById('inputNumber').value.trim();
    const reseller = resellerData.find(entry => entry.number === inputNumber);

    if (reseller) {
        showTrustedPopup(reseller.name, reseller.number, reseller.code);
    } else {
        showNotInDatabasePopup();
    }

    // Menambahkan efek animasi pada tombol
    const button = document.querySelector('button');
    button.classList.add('button-animation');
    
    // Menghapus efek animasi setelah selesai
    setTimeout(() => {
        button.classList.remove('button-animation');
    }, 500);
}

function showTrustedPopup(name, number, code) {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    
    popupContent.innerHTML = `
        <div class="glitch" data-glitch="slrmybot">
            <p>NAMA : ${name}</p>
            <p>NOMBOR: ${number} <i style="font-size:10px; color: #ffbf00" class="fa">&#xf058;</i></p>
            <p>INFO CODE KES : ${code}</p>
            <p><strong>NOMBOR TELEFON YANG ANDA CARI ADALAH SCAMMER YANG DISAHKAN OLEH MYTS</strong></p>
            <p>© MalaysianYouthTrustedSeller [ MYTS ]</p>
         </div>
            <button><a href="https://chat.whatsapp.com/G34QmOJkPWgFz5Uk1Jwbqb" style="color: #ffbf00; text-decoration:none">INFO SCAMMER MYTS</button>
        </div>
    `;

    popup.style.display = 'block';
}

function showNotInDatabasePopup() {
    const popup = document.getElementById('popup');
    const popupContent = document.getElementById('popupContent');
    
    popupContent.innerHTML = `
        <div>
            <p>NOMBOR TERSEBUT TIADA DIDALAM PANGKALAN DATA <strong>MalaysiaYouthTrustedSeller</strong></p>
            <p>JIKA TIADA SILA BERHATI-HATI SEMASA JUAL BELI YA</p>
            <button><a href="https://chat.whatsapp.com/G34QmOJkPWgFz5Uk1Jwbqb" style="color: #ffbf00"; text-decoration:none">INFO SCAMMER MYTS</a></button>
        
    `;

    popup.style.display = 'block';
}

function closePopup() {
    const popup = document.getElementById('popup');
    popup.style.display = 'none';
}
