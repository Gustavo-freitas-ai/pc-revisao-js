        // btn.onclick = () => {
            //     let num = prompt("Digite um número")
            //     alert(num)
            // }
            
        let btn = document.getElementById('btn')

        document.addEventListener("click", () => {
            alert("Botão foi clicado")
        })

        document.getElementById('form').addEventListener
        ("submit", (event) => {
            event.preventDefault()
            console.log("Teste");
        })

