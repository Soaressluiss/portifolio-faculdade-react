export default function Footer() {
  const Year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>© Luis Soares - {Year}</p>
    </footer>
  );
}
