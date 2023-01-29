// Obtenemos la hora actual
var date = new Date();
var hour = date.getHours();
// Comprobamos si es de día o de noche
if (hour >= 6 && hour < 18) {
    // Es de día, aplicamos el tema claro
    document.body.classList.add("light-theme");
} else {
    // Es de noche, aplicamos el tema oscuro
    document.body.classList.add("dark-theme");
}