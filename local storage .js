const toggleButton = document.querySelector('#mode-toggle');

toggleButton.addEventListener('click', switchMode);

function switchMode() {
    document.body.classList.toggle("dark-mode");
    toggleButton.classList.toggle("dark-mode");

    if(document.body.classList.contains("dark-mode")) {
      // toggleButton.textContent = "Togal Dark mode";
      toggleButton.textContent = "";
      localStorage.setItem("mode", "Dark");

    }else {
        toggleButton.textContent = "Togal light mode";
         localStorage.setItem("mode", "Light");
    }

    
}

/// data taking for localStorage
window.addEventListener('DOMContentLoaded', function() {
    
const saveMode = localStorage.getItem("mode");

    if(saveMode === "Dark") {
         document.body.classList.add("dark-mode");
       toggleButton.classList.add("dark-mode");
      toggleButton.textContent = "Togal Dark mode";
    }else {
         toggleButton.textContent = "Togal light mode";
    }
})