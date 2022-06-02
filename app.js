const input = document.querySelectorAll(".otp-field input");

inputs.forEach((input, index) => {
    input.dataset.index = index;
    input.addEventListener("paste", handleOnPasteOtp);
    input.addEventListener("keyup", handleOtp);
})

function handleOnPasteOtp(e){
    const data = e.clipboardData.getData("text");
    const value = data.split("");
    if(value.length === inputs.length){
        input.forEach((input, index) => (input.value = value[index]));
        SubmitEvent();
    }
}

function handleOtp(e){
    const input = e.terget;
    let value = input.value;
    input.value = "";
    input.value = value ? value[0] : "";

    let fieldIndex = input.dataset.index;
    if(value.length > 0 && fieldIndex < inputs.length - 1){
        input.nextElementSibling.focus();
    }

    if(e.key === "Backspace" && fieldIndex > 0){
        input.previousElementSibling.focus();
    }

    if(fieldIndex == input.length - 1){
        Submit();
    }
}

function Submit(){
    console.log("submitting...");
    // Entered OTP
    let otp = "";
    inputs.forEach((input) => {
        otp += input.value;
        input.disabled = true;
        input.classList.add("disabled");
    })
    console.log(otp);
    // Call API below
}