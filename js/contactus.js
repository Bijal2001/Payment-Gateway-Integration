const contactUs = (event) => {

    const userName = document.querySelector('#Name');
    const userEmail = document.querySelector('#Email');
    const userPhone = document.querySelector('#Phone');
    const userMessage = document.querySelector('#Message');

    swal({
        text: `Name- ${userName.value} \nEmail- ${userEmail.value} \nNumber- ${userPhone.value} \nMessage- ${userMessage.value}`,
        icon: 'success'
    });
    [userName.value, userEmail.value, userPhone.value, userMessage.value] = ['', '', '', ''];
}