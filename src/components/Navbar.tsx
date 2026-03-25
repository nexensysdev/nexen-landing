export default function Navbar() {
  return (
    <nav className="flex justify-between items-center px-6 py-4 border-b">
      <h1 className="font-bold text-lg">neXen</h1>
      <div className="flex gap-6">
        <a href="#">Servicios</a>
        <a href="#">Portfolio</a>
        <a href="#">Contacto</a>
      </div>
    </nav>
  );
}