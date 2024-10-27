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
    console.log('Bắt đầu chuyển trang...'); // Kiểm tra hàm có được gọi

    // Tạo element cho hiệu ứng transition
    const transition = document.createElement('div');
    transition.className = 'page-transition';
    document.body.appendChild(transition);
    console.log('Đã tạo transition element');

    // Thực hiện hiệu ứng zoom text
    const zoomText = document.querySelector('.zoom-text');
    if (zoomText) {
        zoomText.classList.add('zoom-effect');
        console.log('Đã thêm hiệu ứng zoom');
    } else {
        console.error('Không tìm thấy element có class zoom-text');
    }

    // Sequence các hiệu ứng
    setTimeout(() => {
        console.log('Đang thực hiện transition...');
        transition.classList.add('active');
    }, 500);

    // Chuyển trang sau khi hiệu ứng hoàn thành
    setTimeout(() => {
        console.log('Chuẩn bị chuyển trang...');
        try {
            window.location.href = '/index2.html';
            console.log('Đã gọi lệnh chuyển trang');
        } catch (error) {
            console.error('Lỗi khi chuyển trang:', error);
        }
    }, 1500);
}