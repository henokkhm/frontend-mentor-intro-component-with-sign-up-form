document.querySelectorAll("input").forEach((input) => {
  input.oninput =
    input.onblur =
    input.onclick =
      () => {
        const label = getLabel(input);
        if (input.value.length > 0 || document.activeElement === input) {
          label.classList.add("hidden");
        } else {
          label.classList.remove("hidden");
        }
      };
});

const getLabel = (input) => {
  let label;
  const labels = document.querySelectorAll("label").forEach((currentLabel) => {
    if (currentLabel.htmlFor === input.name) {
      label = currentLabel;
    }
  });
  return label;
};
