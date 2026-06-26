function getCookie(nombre) {
  const v = document.cookie.match('(^|;)\\s*' + nombre + '\\s*=\\s*([^;]+)');
  return v ? decodeURIComponent(v.pop()) : null;
}
function setCookie(nombre, valor, dias) {
  const d = new Date();
  d.setTime(d.getTime() + (dias || 30) * 24 * 60 * 60 * 1000);
  document.cookie = nombre + '=' + encodeURIComponent(JSON.stringify(valor)) + '; expires=' + d.toUTCString() + '; path=/; SameSite=Lax';
}
function eraseCookie(nombre) {
  document.cookie = nombre + '=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; SameSite=Lax';
}

const CATALOGO = [
  { id: 1, nombre: "Aceite de motor sintético 5W-30", categoria: "aceites", precio: 189, stock: 50, imagen: "🛢️", descripcion: "Aceite sintético de alto rendimiento para motores modernos." },
  { id: 2, nombre: "Quaker Monogrado 40 API SL", categoria: "aceites", precio: 55, stock: 80, imagen: "IMG/Monogrado-40-1lt-removebg-preview-convertido-de-png.webp", descripcion: "Aceite monogrado para protección básica. 1 Litro" },
  { id: 3, nombre: "Quaker Monogrado 60 API SL", categoria: "aceites", precio: 55, stock: 75, imagen: "IMG/Monogrado-60-1lt.webp", descripcion: "Aceite monogrado para alto kilometraje. 1 Litro" },
  { id: 4, nombre: "Quaker Monogrado 40 Garrafa 5L", categoria: "aceites", precio: 259, stock: 40, imagen: "IMG/Aceite-Monogrado-SAE40-5lts.webp", descripcion: "Garrafa de aceite monogrado para protección básica." },
  { id: 5, nombre: "Quaker Monogrado 60 Garrafa 5L", categoria: "aceites", precio: 259, stock: 35, imagen: "IMG/Aceite-Monogrado-SAE60-5lts.webp", descripcion: "Garrafa de aceite monogrado alto kilometraje." },
  { id: 6, nombre: "Quaker Multigrado 20w-50 API SN", categoria: "aceites", precio: 65, stock: 90, imagen: "IMG/Multigrado-20w50-1lt-quaker.webp", descripcion: "Aceite multigrado. 1 Litro" },
  { id: 7, nombre: "Quaker Multigrado 25w-50 API SN", categoria: "aceites", precio: 65, stock: 85, imagen: "IMG/Aceite-Multigrado-25w50-1lt.webp", descripcion: "Aceite multigrado de alto rendimiento. 1 Litro" },
  { id: 8, nombre: "Quaker Multigrado 20w-50 Garrafa 5L", categoria: "aceites", precio: 299, stock: 45, imagen: "IMG/Aceite-Multigrado-20w50-5lts-quaker.webp", descripcion: "Garrafa aceite multigrado 5L." },
  { id: 9, nombre: "Quaker Multigrado 25w-50 Garrafa 5L", categoria: "aceites", precio: 299, stock: 30, imagen: "IMG/Aceite-Multigrado-25w50-5lts-Quaker.webp", descripcion: "Garrafa aceite multigrado sintético blend 5L." },
  { id: 10, nombre: "RoshFran Monogrado 40 API SL", categoria: "aceites", precio: 52, stock: 60, imagen: "IMG/Monogrado-40-1lts-Roshfrans.webp", descripcion: "Aceite monogrado RoshFran clásico. 1 Litro" },
  { id: 11, nombre: "RoshFran Monogrado 60 API SL", categoria: "aceites", precio: 52, stock: 55, imagen: "🛢️", descripcion: "Aceite monogrado para motor desgastado. 1 Litro" },
  { id: 12, nombre: "RoshFran Multigrado 20w-50 API SN", categoria: "aceites", precio: 62, stock: 70, imagen: "🛢️", descripcion: "Multigrado protección total. 1 Litro" },
  { id: 13, nombre: "Mobil Monogrado 40 API SN", categoria: "aceites", precio: 58, stock: 65, imagen: "🛢️", descripcion: "Aceite de alta resistencia térmica. 1 Litro" },
  { id: 14, nombre: "Mobil Monogrado 50 API SN", categoria: "aceites", precio: 58, stock: 60, imagen: "🛢️", descripcion: "Protección Mobil para trabajos pesados. 1 Litro" },
  { id: 15, nombre: "Mobil Multigrado 20w-50 API SN", categoria: "aceites", precio: 68, stock: 75, imagen: "🛢️", descripcion: "Aceite Mobil Super. 1 Litro" },
  { id: 16, nombre: "Mobil Sintético 25w-60 API SN", categoria: "aceites", precio: 85, stock: 40, imagen: "🛢️", descripcion: "Aceite sintético para motores con desgaste. 1 Litro" },
  { id: 17, nombre: "Mobil Multigrado 5w-30", categoria: "aceites", precio: 72, stock: 50, imagen: "🛢️", descripcion: "Aceite de baja viscosidad. 1 Litro" },
  { id: 18, nombre: "Mobil Sintético 5w-30 Garrafa 5L", categoria: "aceites", precio: 349, stock: 25, imagen: "🛢️", descripcion: "Mobil 1 Sintético avanzado. Garrafa 5L." },
  { id: 19, nombre: "Castrol Multigrado 20w-50 API SN", categoria: "aceites", precio: 70, stock: 55, imagen: "🛢️", descripcion: "Aceite Castrol GTX Anti-sedimentos. 1 Litro" },
  { id: 20, nombre: "Bardhal Aceite STD 250", categoria: "aceites", precio: 60, stock: 40, imagen: "IMG/bardahl-top-logo-mobile.webp", descripcion: "Aceite para transmisión estándar. 1 Litro" },
  { id: 21, nombre: "Bardhal 80w-90", categoria: "aceites", precio: 65, stock: 45, imagen: "IMG/bardahl-top-logo-mobile.webp", descripcion: "Lubricante para engranajes. 1 Litro" },
  { id: 22, nombre: "Filtro de Aceite", categoria: "filtros", precio: 45, stock: 100, imagen: "🔩", descripcion: "Filtro de aceite para la mayoría de los motores." },
  { id: 23, nombre: "Filtro de Aire", categoria: "filtros", precio: 65, stock: 80, imagen: "🔩", descripcion: "Filtro de aire para combustión limpia." },
  { id: 24, nombre: "Filtro de Gasolina", categoria: "filtros", precio: 55, stock: 70, imagen: "🔩", descripcion: "Filtro de gasolina de alta presión." },
  { id: 25, nombre: "Batería LTH 12V", categoria: "accesorios", precio: 1200, stock: 15, imagen: "🔋", descripcion: "Batería libre de mantenimiento." },
  { id: 26, nombre: "Juego de focos LED", categoria: "accesorios", precio: 180, stock: 30, imagen: "💡", descripcion: "Focos LED de alta luminosidad." },
  { id: 27, nombre: "Limpiaparabrisas par", categoria: "accesorios", precio: 85, stock: 50, imagen: "💧", descripcion: "Par de limpiaparabrisas multivehículo." },
  { id: 28, nombre: "Banda de distribución", categoria: "bandas", precio: 350, stock: 20, imagen: "⛓️", descripcion: "Banda de distribución para motor 4 cilindros." },
  { id: 29, nombre: "Correa de accesorios", categoria: "bandas", precio: 120, stock: 35, imagen: "⛓️", descripcion: "Correa acanalada para alternador y compresor." },
];

function getUsers() {
  return JSON.parse(localStorage.getItem('rl_usuarios') || '[]');
}
function saveUsers(u) {
  localStorage.setItem('rl_usuarios', JSON.stringify(u));
}
function getCurrentUser() {
  const cookie = getCookie('rl_sesion');
  if (cookie) return JSON.parse(cookie);
  return JSON.parse(localStorage.getItem('rl_sesion') || 'null');
}
function setCurrentUser(u, recordar) {
  localStorage.setItem('rl_sesion', JSON.stringify(u));
  if (recordar) {
    setCookie('rl_sesion', u, 30);
  } else {
    eraseCookie('rl_sesion');
  }
}
function logout() {
  localStorage.removeItem('rl_sesion');
  eraseCookie('rl_sesion');
  eraseCookie('rl_recordar');
}
function getCart(email) {
  return JSON.parse(localStorage.getItem('rl_carrito_' + email) || '[]');
}
function saveCart(email, c) {
  localStorage.setItem('rl_carrito_' + email, JSON.stringify(c));
}
function getOrders() {
  return JSON.parse(localStorage.getItem('rl_pedidos') || '[]');
}
function saveOrders(o) {
  localStorage.setItem('rl_pedidos', JSON.stringify(o));
}
function getProductById(id) {
  return CATALOGO.find(p => p.id === id);
}
function descargarPedidoTxt(pedido) {
  let txt = "=== REFACCIONARIA LEO - PEDIDO ===\n\n";
  txt += "Folio: #" + pedido.id_pedido + "\n";
  txt += "Fecha: " + pedido.fecha + "\n";
  txt += "Cliente: " + pedido.cliente + "\n";
  txt += "Email: " + pedido.email + "\n";
  txt += "Dirección: " + (pedido.direccion || "No especificada") + "\n";
  txt += "Método de pago: " + pedido.metodo_pago + "\n\n";
  txt += "--- Productos ---\n";
  pedido.items.forEach(item => {
    txt += item.cantidad + "x " + item.nombre + " = $" + (item.precio * item.cantidad).toFixed(2) + "\n";
  });
  txt += "\nSubtotal: $" + pedido.subtotal.toFixed(2);
  txt += "\nEnvío: $" + (pedido.envio || 0).toFixed(2);
  txt += "\nTOTAL: $" + pedido.total.toFixed(2) + "\n\n";
  txt += "=== Gracias por tu compra ===";
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'pedido_' + pedido.id_pedido + '.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}
function getStock() {
  return JSON.parse(localStorage.getItem('rl_stock') || '{}');
}
function saveStock(s) {
  localStorage.setItem('rl_stock', JSON.stringify(s));
}
function obtenerStock(idProducto) {
  const stockOverrides = getStock();
  if (stockOverrides[idProducto] !== undefined) return stockOverrides[idProducto];
  const prod = CATALOGO.find(p => p.id === idProducto);
  return prod ? prod.stock : 0;
}
function ajustarStock(idProducto, cambio) {
  const stockOverrides = getStock();
  const actual = obtenerStock(idProducto);
  stockOverrides[idProducto] = Math.max(0, actual + cambio);
  saveStock(stockOverrides);
  return stockOverrides[idProducto];
}

function descargarDatosTxt() {
  const usuarios = getUsers();
  const pedidos = getOrders();
  let txt = "=== RESPALDO REFACCIONARIA LEO ===\n";
  txt += "Fecha: " + new Date().toLocaleString('es-MX') + "\n\n";
  txt += "--- USUARIOS (" + usuarios.length + ") ---\n";
  usuarios.forEach(u => {
    txt += "ID:" + u.id + " | " + u.nombre + " " + u.apellidos + " | " + u.email + " | Rol:" + u.rol + "\n";
  });
  txt += "\n--- PEDIDOS (" + pedidos.length + ") ---\n";
  pedidos.forEach(p => {
    txt += "#" + p.id_pedido + " | " + p.fecha + " | " + p.cliente + " | $" + p.total.toFixed(2) + " | " + p.estado + "\n";
  });
  const blob = new Blob([txt], { type: 'text/plain;charset=utf-8' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = 'respaldo_refaccionaria_leo.txt';
  a.click();
  URL.revokeObjectURL(a.href);
}

const formatearMXN = (monto) => new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' }).format(monto);

(function seedData() {
  const usuarios = getUsers();
  if (usuarios.length === 0) {
    usuarios.push({
      id: 1,
      nombre: "Admin",
      apellidos: "Leo",
      email: "admin@refaccionarialeo.com",
      tel: "5512345678",
      password: btoa("admin123"),
      rol: 2,
      direccion: { entidad: "MEX", cp: "56334", alcaldia: "Chimalhuacán", colonia: "Herreros", calle: "Av. de los Patos", numExt: "M4", numInt: "L35" }
    });
    usuarios.push({
      id: 2,
      nombre: "Nahum",
      apellidos: "Martinez",
      email: "cliente@correo.com",
      tel: "5512345679",
      password: btoa("cliente123"),
      rol: 1,
      direccion: { entidad: "CDMX", cp: "56330", alcaldia: "Chimalhuacán", colonia: "Centro", calle: "Av. Principal", numExt: "123", numInt: "" }
    });
    saveUsers(usuarios);
  }
})();
