// Truy cập nút trong DOM
const changeColorButton = document.getElementById('changeColorButton');
// Hàm tạo ngẫu nhiên
function getRandomColor(){
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Gán sự kiện click cho nút
if (changeColorButton) {
    changeColorButton.addEventListener('click', function(){
        document.body.style.backgroundColor = getRandomColor();
    });
}