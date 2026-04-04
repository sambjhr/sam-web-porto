"use client";

import { useState } from "react";

type TestimonialItem = {
  id: number;
  author: string;
  quote: string;
};

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: 7,
    author: "Firda - Pegawai Komdigi",
    quote:
      "Saya mengenal Samuel sejak 2023, dimulai saat pelatihan Government Transformation Academy (GTA) yang diselenggarakan oleh Kementerian Kominfo. Samuel sangat aktif dan lebih menguasai materi dibanding peserta lainnya, sehingga sangat menonjol. Selanjutnya, saya bersama BKPSDM Kabupaten Kutai Kartanegara membuat proyek transformasi untuk mendigitalisasi pelayanan penting dalam bidang Pengembangan Kompetensi (Bangkom) ASN. Peran Samuel sebagai Pengolah Data dan Informasi sangat membantu proses digitalisasi proses bisnis tersebut, mulai dari penyusunan strategi, koordinasi stakeholder, sosialisasi penggunaan aplikasi, integrasi database, hingga menjaga keamanan data ASN. Hasilnya, seluruh ASN di Kabupaten Kutai Kartanegara dapat mengikuti pengembangan kompetensi berkali-kali sehingga meningkatkan Indeks Profesionalitas ASN.",
  },
  {
    id: 1,
    author: "Yacob - Dosen Pembimbing Skripsi",
    quote:
      "Saya telah mengenal Samuel Haposan Banjarnahor selama dua tahun sejak 2024. Saya adalah Dosen Pembimbing untuk skripsinya. Sebagai mahasiswa, dia telah menunjukkan dedikasi tinggi dalam menjalani masa studinya. Saya kagum dengan kemampuannya menyeimbangkan tanggung jawab organisasi di kantornya dan tugas-tugas akademisnya.",
  },
  {
    id: 2,
    author: "Rokip - Sekretaris BKPSDM Kukar",
    quote:
      "Saya telah mengenal Samuel Haposan Banjarnahor selama empat tahun terakhir, ketika dia menjadi salah satu peserta di Pelatihan Digital Public Relation yang diselenggarakan oleh BKPSDM bekerja sama dengan Kominfo. Pada pertemuan selanjutnya Samuel sedang mengajar pegawai Kutai Kartanegara untuk Pelatihan Junior Office Operator yang diselenggarakan oleh BKPSDM. Selama periode tersebut, Samuel Haposan Banjarnahor telah menunjukkan ketertarikannya untuk pengembangan kompetensi terhadap pegawai Kutai Kartanegara, khususnya dalam bidang teknologi informasi. Samuel telah memberikan kontribusi berarti dengan membantu pengembangan kompetensi di Kukar bahkan sebelum bergabung ke BKPSDM dan terus melanjutkan sampai dengan sekarang. Selama di BKPSDM, Samuel ikut berkontribusi dalam mengembangkan beberapa aplikasi seperti Aplikasi Pengembangan Kompetensi dan juga aplikasi presensi. Selain itu, Samuel juga ikut andil dalam membimbing siswa kelas 12 untuk melanjutkan studi ke kampus terdahulunya di PKN STAN. Berdasarkan pengamatan saya, Samuel Haposan Banjarnahor adalah seorang individu yang tidak hanya memiliki pengetahuan akademis tetapi juga memiliki keterampilan kepemimpinan. Kemampuan komunikasi dan kemauannya untuk terlibat dalam kegiatan di luar kantor menjadi aset berharga yang saya yakin akan memberikan dampak positif di tingkat internasional.",
  },
  {
    id: 3,
    author: "Yuliandris - Sekretaris Dinas Sosial",
    quote:
      "Saya telah mengenal Samuel Haposan Banjarnahor selama lima tahun terakhir, ketika dia menjadi staf saya di Sekretariat Dinas Sosial Kabupaten Kutai Kartanegara. Selama periode tersebut, Samuel telah menunjukkan kepedulian tinggi terhadap kantor dan juga masyarakat di Kabupaten Kutai Kartanegara, khususnya dalam bidang Keuangan, Sosial, dan Pendidikan. Samuel telah memberikan kontribusi berarti dengan menjadi salah satu penggerak perubahan digitalisasi di Dinas Sosial. Selama di Dinas Sosial, Samuel ikut berkontribusi dalam mengembangkan aplikasi Sistem Aduan Masyarakat (SIMASOS), berkontribusi terhadap hubungan masyarakat, serta berkontribusi tinggi terhadap media sosial dan website dinas sosial. Samuel juga melakukan peliputan dan mengedukasi masyarakat terhadap tugas dan fungsi Dinas Sosial sehingga lebih dikenal oleh masyarakat. Selain itu, Samuel juga beberapa kali terlibat dalam pengembangan kompetensi pegawai seperti menjadi narasumber bersama saya di Pelatihan Penggunaan Media Sosial dan Website bagi Instansi Pemerintah. Berdasarkan pengamatan saya, Samuel adalah seorang individu yang tidak hanya memiliki pengetahuan akademis tetapi juga memiliki keterampilan lebih di bidang teknologi. Kemampuan komunikasi dan kemauannya untuk terlibat dalam kegiatan sosial menjadi aset berharga yang saya yakin akan memberikan dampak positif di tingkat internasional.",
  },
  {
    id: 4,
    author: "Sekretaris Daerah Kabupaten Kutai Kartanegara",
    quote:
      "Saya telah mengenal Samuel selama kurang lebih 4 (empat) tahun sejak 2022. Kami pertama kali bertemu di penerimaan CPNS baru di lingkungan Kabupaten Kutai Kartanegara sebagai salah satu mahasiswa dari PKN STAN. Saat itu saya menjabat sebagai Sekretaris Daerah. Sebagai PNS, Samuel telah menunjukkan integritas dan dedikasi tinggi dalam menjalankan tugasnya. Saya juga sering bertemu dengan Samuel di beberapa rapat dan pertemuan terkait perencanaan anggaran. Samuel terlihat menonjol karena selain menjadi yang paling muda di tempat rapat, Samuel bisa menyesuaikan dirinya dengan baik. Pada tahun 2023, saya bertemu lagi dengan Samuel yang mendapat surat rekomendasi pindah ke OIKN pada Kedeputian Transformasi Digital. Saat itu saya tahu Samuel memiliki bakat lebih dalam teknologi dan saya berpesan agar Samuel bisa melanjutkan studi terlebih dahulu serta membantu Kutai Kartanegara untuk mengembangkan ASN. Selain itu pada awal 2025, saya meminta Samuel beserta alumni STAN lainnya untuk membimbing anak-anak SMA agar bisa masuk ke PKN STAN. Menurut saya itu adalah sebuah pencapaian dan langkah awal untuk membenahi ASN di Kabupaten Kutai Kartanegara. Melihat kemampuannya, saya percaya bahwa Samuel layak memperoleh pendanaan dari LPDP.",
  },
  {
    id: 5,
    author: "Mukhdan - Kepala Bidang Pengembangan ASN",
    quote:
      "Saya telah mengenal Saudara Samuel selama tiga tahun terakhir sejak 2023 dalam kapasitas saya sebagai Kepala Bidang Pengembangan Sumber Daya ASN di BKPSDM Kabupaten Kutai Kartanegara. Selama masa interaksi tersebut, saya mengamati secara langsung perkembangan profesional dan dedikasi beliau sebagai Aparatur Sipil Negara (ASN). Saudara Samuel adalah pegawai yang menunjukkan integritas dan dedikasi luar biasa dalam melaksanakan tugas pokok dan fungsinya. Beliau sangat proaktif dalam membantu berbagai bidang di organisasi yang memerlukan keahlian teknisnya, terutama yang berkaitan dengan sistem informasi dan pengolahan data.",
  },
  {
    id: 6,
    author: "Suherman - Rekan Sekerja",
    quote:
      "Saya telah mengenal Sdr. Samuel Haposan Banjarnahor, A.Md.Ak., S.Kom. selama tiga tahun terakhir, ketika sama-sama mengikuti Pelatihan Training of Trainer (ToT) Government Transformation Academy yang diselenggarakan oleh Kementerian Komunikasi dan Informatika tahun 2023. Selama periode tersebut, beliau menunjukkan kepedulian yang sangat tinggi terhadap pengembangan Aparatur Sipil Negara (ASN) Pemkab Kutai Kartanegara. Pada tahun 2024, beliau menjadi pengajar di beberapa pelatihan ASN seperti GTA-Junior Office Operator dan Bimbingan Teknis Microsoft Office. Dalam menjalankan tugas dan fungsinya, beliau menujukkan integritas dan pengabdian yang sangat luar biasa serta sangat proaktif berkontribusi pada kegiatan yang membutuhkan keahlian sistem informasi.",
  },
];

export default function Testimonials() {
  const CARDS_PER_PAGE = 2;
  const [currentPage, setCurrentPage] = useState(1);
  const [expanded, setExpanded] = useState<Record<number, boolean>>({});
  const totalPages = Math.ceil(TESTIMONIALS.length / CARDS_PER_PAGE);

  const startIndex = (currentPage - 1) * CARDS_PER_PAGE;
  const paginatedTestimonials = TESTIMONIALS.slice(startIndex, startIndex + CARDS_PER_PAGE);
  const pageNumbers = Array.from({ length: totalPages }, (_, index) => index + 1);

  const toggleExpanded = (id: number) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div id="testimonials" className="mt-12">
      <h3 className="text-gr-title font-semibold text-center">What people say about me</h3>
      <p className="mt-[13px] text-gr-body text-slate-400 text-center">
        Testimonials from mentors and colleagues I have worked with.
      </p>

      <div className="mt-[21px] space-y-6">
        {paginatedTestimonials.map((item) => {
          const isExpanded = Boolean(expanded[item.id]);
          const [namePart, rolePart] = item.author.split(" - ");
          const hasRole = Boolean(rolePart);

          return (
            <article
              key={item.id}
              className="p-[21px] bg-[#0b1220] rounded-[13px] border-[1.6px] border-slate-700/55 text-slate-300 transition-all duration-300 ease-out hover:-translate-y-[3px] hover:shadow-[0_12px_28px_rgba(2,6,23,0.4)]"
            >
              {hasRole ? (
                <div className="flex flex-wrap items-baseline gap-2">
                  <p className="text-gr-subtitle font-semibold text-emerald-400">{namePart}</p>
                  <p className="text-gr-small text-slate-300 italic">- {rolePart}</p>
                </div>
              ) : (
                <p className="text-gr-subtitle font-semibold text-slate-300 italic">{item.author}</p>
              )}

              <p
                className={`mt-[13px] text-gr-body italic ${
                  isExpanded
                    ? ""
                    : "overflow-hidden [display:-webkit-box] [-webkit-line-clamp:2] [-webkit-box-orient:vertical]"
                }`}
              >
                "{item.quote}"
              </p>

              <button
                type="button"
                onClick={() => toggleExpanded(item.id)}
                className="mt-[8px] ml-auto block w-fit text-gr-small text-emerald-400 hover:text-emerald-300 transition-colors"
              >
                {isExpanded ? "Show less" : "Read all"}
              </button>
            </article>
          );
        })}
      </div>

      <div className="mt-8 flex items-center justify-center gap-3">
        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
          disabled={currentPage === 1}
          className="h-10 w-10 flex items-center justify-center text-2xl text-slate-400 disabled:opacity-35 disabled:cursor-not-allowed hover:text-slate-200 transition"
          aria-label="Previous page"
        >
          ←
        </button>

        {pageNumbers.map((page) => (
          <button
            key={page}
            type="button"
            onClick={() => setCurrentPage(page)}
            aria-label={`Go to page ${page}`}
            className={`h-10 w-10 flex items-center justify-center rounded-full text-gr-small transition ${
              currentPage === page
                ? "bg-[#1f2742] text-white font-semibold"
                : "text-slate-400 hover:text-slate-200"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          type="button"
          onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
          disabled={currentPage === totalPages}
          className="h-10 w-10 flex items-center justify-center text-2xl text-slate-400 disabled:opacity-35 disabled:cursor-not-allowed hover:text-slate-200 transition"
          aria-label="Next page"
        >
          →
        </button>
      </div>
    </div>
  );
}
