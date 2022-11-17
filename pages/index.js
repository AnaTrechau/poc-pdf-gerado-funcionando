import dynamic from "next/dynamic";

const PDFViewer = dynamic(() => import("../components/pdf-viewer"), {
  ssr: false
});

const PDFDownload = dynamic(() => import("../components/pdf-download"), {
  ssr: false
});

export default function Home() {
  return (
    <>
    <PDFDownload />
    <PDFViewer />
    </>
  )
}
