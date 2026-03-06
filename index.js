const validataData = (userData) => {
    let errors = [];
    if (!userData.firstName) {
        errors.push("กรุณากรอกชื่อ");
    }
    if (!userData.lastName) {
        errors.push("กรุณากรอกนามสกุล");
    }
    if (!userData.age) {
        errors.push("กรุณากรอกอายุ");
    }
    if (!userData.gender) {
        errors.push("กรุณากรอกเพศ");
    }
    if (!userData.interests) {
        errors.push("กรุณากรอกงานอดิเรก");
    }
    if (!userData.description) {
        errors.push("กรุณากรอกคำอธิบาย");
    }
    return errors;
}

const submitData = async () => {
    let firstNameDOM = document.querySelector('input[name=firstname]');
    let lastNameDOM = document.querySelector('input[name=lastname]');
    let ageDOM = document.querySelector('input[name=age]');
    let genderDOM = document.querySelector('input[name=gender]:checked') || {};
    let interestDOMs = document.querySelectorAll('input[name=interests]:checked') || {};
    let descriptionDOM = document.querySelector('textarea[name=description]');

    let messageDOM = document.getElementById('message');
    try {
        let interest = ''
        for (let i = 0; i < interestDOMs.length; i++) {
            interest += interestDOMs[i].value
            if (i != interestDOMs.length - 1) {
                interest += ','
            }
        }

        let userData = {
            firstName: firstNameDOM.value,
            lastName: lastNameDOM.value,
            age: ageDOM.value,
            gender: genderDOM.value,
            description: descriptionDOM.value,
            interests: interest
        }
        console.log('summitData', userData);

        const error = validataData(userData);

        if (error.length > 0) {
            throw {
                message: ('กรุณากรอกข้อมูลให้ครบถ้วน'),
                errors: error
            }
        }
        const response = await axios.post('http://localhost:8000/users', userData);
        console.log('response', response);
        messageDOM.innerText = 'บันทึกข้อมูลสำเร็จ';
        messageDOM.className = 'message success';
    } catch (error) {
        console.log('Error message',error.message)
        console.log('Error detail', error.errors)
        //if (error.response) {
        //  console.log('Error response:', error.response.data.message);
        //}
        let htmlData = '<div>'
        htmlData += `<div>'${error.message}'</div>`;
        htmlData += '<ul>';
        for (let i = 0; i < error.errors.length; i++) {
            htmlData += `<li>${error.errors[i]}</li>`
        }
        htmlData += '</ul>';
        htmlData += '</div>';
        messageDOM.innerHTML = htmlData;
        messageDOM.className = 'message danger';
    }
}