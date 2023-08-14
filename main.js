function marcarConfirm(element) {
    if (element.classList.contains('confirmado')) {
        if (confirm("Você deseja marcar essa atividade como não concluída?")) {
            
        }element.classList.remove('confirmado')
    } else {
        if (confirm("Você deseja marcar essa atividade como concluída?")) {
            element.classList.add("confirmado");
        }
    }
}