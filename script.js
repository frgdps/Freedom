function halo() {
  const hasilDiv = document.getElementById('hasil');
  const waktuSekarang = new Date().toLocaleTimeString();
  
  // Hilangkan kelas animasi sebelumnya
  hasilDiv.classList.remove('active');
  
  // Tambahkan kelas setelah 50ms untuk memicu animasi
  setTimeout(() => {
    hasilDiv.innerHTML = `
      <p>Selamat${getSalam()}!</p>
      <p>Waktu sekarang: ${waktuSekarang}</p>
    `;
    hasilDiv.classList.add('active');
  }, 50);
}

function getSalam() {
  const jam = new Date().getHours();
  if (jam < 12) return 'pagi';
  if (jam < 17) return 'siang';
  return 'malam';
}
