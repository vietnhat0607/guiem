let letterCount = 1;
const maxLetters = 5;

document.getElementById('heart').addEventListener('click', function() {
    document.getElementById('letter1').classList.remove('hidden');
    document.getElementById('letter1').classList.add('active');
    this.style.display = 'none';
});

function showNextLetter(answer) {
    if (answer === 'yes') {
        // Hiện thư cuối cùng
        document.getElementById('final-letter').classList.remove('hidden');
        document.getElementById('final-letter').classList.add('active');
    } else {
        letterCount++;
        if (letterCount <= maxLetters) {
            // Tạo thư mới
            const newLetter = document.createElement('div');
            newLetter.id = `letter${letterCount}`;
            newLetter.className = 'letter active';
            newLetter.innerHTML = `
                <h2>Suy nghĩ kỹ lại đi...</h2>
                <p>Anh biết em là người yêu của anh mà!</p>
                <div class="buttons">
                    <button onclick="showNextLetter('yes')">Có</button>
                    <button onclick="showNextLetter('no')">Không</button>
                </div>
            `;
            document.querySelector('.container').appendChild(newLetter);
        } else {
            // Nếu đã đến giới hạn số thư, quay lại thư đầu
            letterCount = 1;
            document.getElementById('letter1').classList.add('active');
        }
    }
}
// Thêm vào cuối file script.js hiện tại

function transitionToNextPage() {
    // Sử dụng đường dẫn tuyệt đối của GitHub Pages
    const nextPageUrl = 'https://vietnhat0607.github.io/guiem/index2.html';
    
    // Tạo element cho hiệu ứng transition
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);

    // Thực hiện hiệu ứng zoom text
    const zoomText = document.querySelector('.zoom-text');
    if (zoomText) zoomText.classList.add('zoom-effect');

    setTimeout(() => {
        transition.classList.add('active');
    }, 500);

    // Chuyển trang sau khi hiệu ứng hoàn thành
    setTimeout(() => {
        window.location.href = nextPageUrl;
    }, 1500);
}