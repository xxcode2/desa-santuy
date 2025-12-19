const { Document, Packer, Paragraph, TextRun } = require("docx");

async function generateLPJ(data) {
  const doc = new Document({
    sections: [
      {
        children: [
          new Paragraph({
            children: [
              new TextRun({
                text: `LAPORAN PERTANGGUNGJAWABAN KEGIATAN`,
                bold: true,
              }),
            ],
          }),

          new Paragraph(`Desa : ${data.desa}`),
          new Paragraph(`Kegiatan : ${data.kegiatan}`),
          new Paragraph(`Lokasi : ${data.lokasi}`),
          new Paragraph(`Waktu : ${data.waktu}`),

          new Paragraph({
            children: [new TextRun({ text: "ANGGARAN", bold: true })],
          }),
          new Paragraph(`Pagu Anggaran : Rp ${data.pagu}`),
          new Paragraph(`Realisasi : Rp ${data.realisasi}`),

          new Paragraph({
            children: [new TextRun({ text: "HASIL KEGIATAN", bold: true })],
          }),
          new Paragraph(data.hasil),

          new Paragraph("\nDemikian laporan ini dibuat dengan sebenar-benarnya."),
        ],
      },
    ],
  });

  return await Packer.toBuffer(doc);
}

module.exports = { generateLPJ };
