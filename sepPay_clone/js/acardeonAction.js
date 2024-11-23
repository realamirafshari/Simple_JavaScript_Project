function acardeonActionHandler(acardeonItems) {
  acardeonItems.forEach((acardeonItem) => {
    acardeonItem.addEventListener("click", () => {
      acardeonItem.classList.toggle("open-acrdeon");
    });
  });
}
export { acardeonActionHandler };
