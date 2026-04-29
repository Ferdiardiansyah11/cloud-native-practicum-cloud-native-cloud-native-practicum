export default function MahasiswaPage() {
  const mahasiswa = [
    { id: 1, nama: "Ferdi Ardiansyah", nim: "D0223021" },
    { id: 2, nama: "Andi Saputra", nim: "D0223022" },
    { id: 3, nama: "Siti Aisyah", nim: "D0223023" },
  ];

  return (
    <div>
      <h1>Halaman Mahasiswa</h1>
      <ul>
        {mahasiswa.map((mhs) => (
          <li key={mhs.id}>
            {mhs.nama} - {mhs.nim}
          </li>
        ))}
      </ul>
    </div>
  );
}