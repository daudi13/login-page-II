
const inputPass = document.getElementById("password");
const visibleIcon = document.querySelector(".show-hide");
const capsElement = document.querySelector(".caps");
function showHide() {
    if (inputPass.type == "password") {
        inputPass.type = "text";
        visibleIcon.innerText = "visibility";
    } else {
        inputPass.type = "password";
        visibleIcon.innerText = "visibility_off";
    }
}

inputPass.addEventListener("keyup", function (el) {
    if (el.getModifierState("CapsLock")) {
        capsElement.style.display = "flex";
    } else {
        capsElement.style.display = "none";
    }
});