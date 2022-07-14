import React, { useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';
import Resume from '../../assets/files/Resume.pdf';
import './PdfViewer.css';

export const PdfViewer = () => {
  const [numPages, setNumPages] = useState(null);
  const [pageNumber, setPageNumber] = useState(1);

  function onDocumentLoadSuccess({ numPages }) {
    setNumPages(numPages);
  }

  const handleResumeDownload = () =>{
    window.alert('Resume is going to downnload ....');
    var link = document.createElement('a');
    link.href = Resume;
    link.download = 'RahulGupta_Fullstack.pdf';
    link.dispatchEvent(new MouseEvent('click'));
  }

  return (
    <div className='pdf-viewer-wrapper'>
        <div className='pdf-viewer-header'>
            { pageNumber === 2 ? (
                <button onClick={()=>setPageNumber(1)} className="button-wrapper">{'Prev'}</button>)
                : (<button onClick={()=>setPageNumber(2)} className="button-wrapper">{'Next'}</button>)
            }
            <div>{`Page ${pageNumber} of ${numPages}`}</div>
            <button onClick={handleResumeDownload} className="button-wrapper">Download</button>
        </div>
        <Document file={Resume} onLoadSuccess={onDocumentLoadSuccess} className="resume-wrapper">
            <Page pageNumber={pageNumber} />
        </Document>    
    </div>
  );
}