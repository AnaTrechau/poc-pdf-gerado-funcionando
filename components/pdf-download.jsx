import ReactPDF from "@react-pdf/renderer";
import { useState } from "react";
// import default react-pdf entry
import { Document, Page, pdfjs } from "react-pdf";
// import pdf worker as a url, see `next.config.js` and `pdf-worker.js`
import workerSrc from "../pdf-worker";
import MyDocument from './document'
import { BlobProvider } from '@react-pdf/renderer';

pdfjs.GlobalWorkerOptions.workerSrc = workerSrc;

export default function PDFDownloadButtom() {
    const [file, setFile] = useState("./sample.pdf");
    const [numPages, setNumPages] = useState(null);

    function onFileChange(event) {
        setFile(event.target.files[0]);
    }

    function onDocumentLoadSuccess({ numPages: nextNumPages }) {
        setNumPages(nextNumPages);
    }

    return (
        <BlobProvider document={<MyDocument/>}>
            {({ blob, url, loading }) => {
                const onButtonClick = () => {
                    const fileURL = url
                    let alink = document.createElement('a');
                    alink.href = fileURL;
                    alink.download = 'SamplePDF.pdf';
                    alink.click();
                }
                
                return (
                    <>
                        <center>
                            <h1>Click on below button to download PDF file</h1>
                            <button onClick={onButtonClick}>
                                Download PDF
                            </button>
                        </center>
                    </>
                );
            }}
        </BlobProvider>
    );
}
