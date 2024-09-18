export function handleDropdownClick(fixPos, top, left) {
  const element = document.querySelector(".RampInputSelect--root")

  if (element) {
    if (fixPos) {
      element.classList.add("fixed-pos")
      element.style.top = top * 0.75 + "px"
    } else {
      element.classList.remove("fixed-pos")
      element.style.top = ""
    }
  }
}
