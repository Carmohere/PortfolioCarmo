document.addEventListener("DOMContentLoaded", function () {
    const elemento = document.querySelector(".column-left h2");
    const textoCompleto = "Desenvolvedor | Help Desk | Computação em Nuvem";
    let indexLetra = 0;
    let deletando = false;

    function digitar() {
        if (!deletando) {
            elemento.innerHTML = textoCompleto.slice(0, indexLetra++) + "<span class='cursor'>|</span>";
            if (indexLetra > textoCompleto.length) {
                deletando = true;
                setTimeout(digitar, 1500);
                return;
            }
        } else {
            elemento.innerHTML = textoCompleto.slice(0, indexLetra--) + "<span class='cursor'>|</span>";
            if (indexLetra < 0) {
                deletando = false;
                setTimeout(() => {
                    elemento.innerHTML = "<span class='cursor'>|</span>";
                    indexLetra = 0;
                    digitar();
                }, 500);
                return;
            }
        }
        setTimeout(digitar, deletando ? 50 : 100);
    }

    digitar();
});