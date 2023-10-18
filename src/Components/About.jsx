import Footer from "./Footer";
import Navigasi from "./Navigasi";

export default function About() {
  return (
    <div>
      <Navigasi />
      <div className="flex flex-col items-center justify-center">
        <img src="logo.png" className="w-40 mt-10" alt="Logo" />
        <h1 className="text-3xl font-semibold mt-6">Tentang Kami</h1>
        <p className="text-lg text-center max-w-md mt-4">
          Selamat datang di "Mobile Legends Pro Team," solusi terbaik untuk
          meningkatkan peringkat Anda di Mobile Legends! Kami adalah jasa joki
          profesional yang berkomitmen memberikan harga terjangkau dan hasil
          yang luar biasa.
        </p>
        <p className="text-lg text-center max-w-md mt-4">
          Mengapa Anda harus memilih kami? Inilah beberapa alasannya:
        </p>
        <ul className="text-lg text-center max-w-md mt-2 list-disc ml-4">
          <li>
            <strong>Harga Terjangkau:</strong> Kami percaya bahwa kualitas tidak
            harus mahal. Dengan kami, Anda mendapatkan hasil luar biasa tanpa
            harus menguras dompet.
          </li>
          <li>
            <strong>Peringkat Terbaik:</strong> Kami berkomitmen membantu Anda
            mencapai peringkat tertinggi dalam permainan. Kami akan bermain
            bersama Anda atau mengambil alih akun Anda untuk meraih peringkat
            yang Anda impikan.
          </li>
          <li>
            <strong>Pelatihan Pribadi:</strong> Kami juga menyediakan sesi
            pelatihan pribadi untuk membantu Anda meningkatkan keterampilan
            Anda. Bersama kami, Anda akan meraih kemenangan lebih mudah dan
            efisien.
          </li>
        </ul>
        <p className="text-lg text-center max-w-md mt-4">
          Gabunglah dengan kami dan saksikan kemajuan permainan Anda. Kami siap
          membantu Anda meraih kemenangan, mengalahkan lawan-lawan Anda, dan
          meraih peringkat tertinggi dalam Mobile Legends - semuanya dengan
          harga yang terjangkau!
        </p>
      </div>
      <Footer />
    </div>
  );
}
