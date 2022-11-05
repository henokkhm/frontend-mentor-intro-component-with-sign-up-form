document.querySelectorAll("input").forEach((input) => {
  input.oninput =
    input.onblur =
    input.onclick =
      () => {
        let label;
        const labels = document
          .querySelectorAll("label")
          .forEach((currentLabel) => {
            if (currentLabel.htmlFor === input.name) {
              label = currentLabel;
            }
          });
        if (input.value.length > 0 || document.activeElement === input) {
          label.classList.add("text-transparent");
        } else {
          console.log("input length 0");
          label.classList.remove("text-transparent");
        }
      };
});
