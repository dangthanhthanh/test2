const showDataBtn = document.querySelector('#showDataBtn');
const targetNameSvElement = document.querySelector('#spanTenSV');
const targetLoaiSvElement = document.querySelector('#spanLoaiSV');
const targetMaSvElement = document.querySelector('#spanMaSV');
const targetDTBSvElement = document.querySelector('#spanDTB');
const targetXepLoaiSvElement = document.querySelector('#spanXepLoai');
const maSvElement = document.querySelector('#txtMaSV');
const tenSvElement = document.querySelector('#txtTenSV');
const loaiSvElement = document.querySelector('#loaiSV');
const diemToanElement = document.querySelector('#txtDiemToan');
const diemVanElement = document.querySelector('#txtDiemVan');

const loaiSVObj = {
    1: 'Ngeo',
    2: 'Giau',
    3: 'BInh THuong'
}

function handleShowData() {


    const maSvValue = maSvElement.value;
    const tenSvValue = tenSvElement.value;
    const loaiSvValue = loaiSvElement.value;
    const diemToanValue = diemToanElement.value;
    const diemVanValue = diemVanElement.value;

    let isValid = true;
    const inputArr = [maSvElement, tenSvElement, diemToanElement, diemVanElement]
    // check dieu kien
    for (const input of inputArr) {
        if (!input.value) {
            const inputName = input.getAttribute('data-validate');
            input.nextElementSibling.innerText = inputName + ' ko the rong';
            input.nextElementSibling.style.display = 'block';
            isValid = false;
        } else {
            input.nextElementSibling.style.display = 'none';
        }
    }


    if (!isValid) return;

    targetNameSvElement.innerText = tenSvValue;
    targetLoaiSvElement.innerText = loaiSvValue;
    targetMaSvElement.innerText = maSvValue;

    const diemTb = (Number(diemToanValue) + Number(diemVanValue)) / 2

    targetDTBSvElement.innerText = diemTb;

    let xepLoai = '';
    if (diemTb < 4) {
        xepLoai = 'Yeu';
    } else if (diemTb <= 6 && diemTb >= 4) {
        xepLoai = 'TB';
    } else if (diemTb <= 9 && diemTb > 6) {
        xepLoai = 'Kha';
    } else {
        xepLoai = 'Gioi';
    }

    targetXepLoaiSvElement.innerText = xepLoai;

    let loaiSv = ''
    switch (loaiSvValue) {
        case '1': {
            loaiSv = 'ngeo';
            break;
        }
        case '2': {
            loaiSv = 'Binh thuong';
            break;
        }
        case '3': {
            loaiSv = 'Giau';
            break;
        }
        default: {
            loaiSv = 'ko xac dinh';
            break;
        }
    }
    targetLoaiSvElement.innerText = loaiSv;

}

showDataBtn.addEventListener('click', handleShowData);