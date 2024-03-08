document.addEventListener("DOMContentLoaded", () => {
    const modules = document.querySelectorAll("section .co_module");
    const contents = document.querySelectorAll("section .co_mod_content");

    modules.forEach((module, index) => {
        module.addEventListener("click", () => {
            contents[index].classList.toggle("open");
        });
    });
});
