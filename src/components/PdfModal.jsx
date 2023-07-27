'use client'

import Box from '@mui/material/Box';
import { IconButton } from '@mui/material';
import { Close } from '@mui/icons-material';
import Modal from '@mui/material/Modal';
import { Document, Page } from 'react-pdf'
import { useEffect, useState } from 'react';
import { SizeMe } from 'react-sizeme';
import dynamic from 'next/dynamic';

const printJS = dynamic(() => import('print-js'), {
    ssr: false
});

// import { Viewer, Worker } from '@react-pdf-viewer/core';
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';

// // Import styles
// import '@react-pdf-viewer/core/lib/styles/index.css';
// import '@react-pdf-viewer/default-layout/lib/styles/index.css';

// // Create new plugin instance
// const defaultLayoutPluginInstance = defaultLayoutPlugin();



const style = {
    // position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // width: '80%',
    // height: '80%',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

const closeButtonStyle = {
    height: 0,
    textAlign: "right",
    position: 'absolute',
    right: '53px',
    top: '20px',
    zIndex: 50
};

export default function PdfModal({ isPdfModalShow, setIsPdfModalShow }) {

    const handleCloseModal = () => setIsPdfModalShow(false)
    const [numPages, setNumPages] = useState();
    // const [pageNumber, setPageNumber] = useState(1);
    const [viewportWidth, setViewportWidth] = useState(720)
  
    function onDocumentLoadSuccess({ numPages }) {
        setNumPages(numPages);
    }

    const downloadPdf = () => {
        const link = document.createElement('a')
        link.href = '/pdf-file.pdf'
        link.download = 'sample'
        link.click()
    }

    const printPdf = () => {
        if (printJS == null) {
            console.warn('[WARN] printJS can not be used in server context')
            return
        }
        printJS('/pdf-file.pdf')
    }

    useEffect(() => {
        const onResize = () => {
            setViewportWidth(window.innerHeight * 0.9 / 1.414)
        }

        onResize()
        window.addEventListener('resize', onResize)

        return () => {
            window.removeEventListener('resize', onResize)
        }
    }, [])

    return (
        <div>
            <Modal
                open={isPdfModalShow}
                onClose={handleCloseModal}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{ position: 'relative', width: `${viewportWidth}px`, height: '90%', ...style }}>
                    <Box sx={closeButtonStyle}>
                        <IconButton onClick={handleCloseModal}>
                            <Close/>
                        </IconButton>
                    </Box>

                    
                    <div className="mt-8 space-x-1">
                        <button
                            type="button"
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[11px] px-3 py-2.5 mr-2 mb-2  focus:outline-none "
                            onClick={downloadPdf}
                        >
                            ダウンロード
                        </button>
                        <button type="button" 
                            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-[11px] px-3 py-2.5 mr-2 mb-2  focus:outline-none "
                            onClick={printPdf}
                        >
                            プリント
                        </button>
                    </div>
                    

                    <div style={{ overflowY: 'auto', height: '90%' }}>
                        <SizeMe>
                            {({ size }) => (

                                <Document file={'/pdf-file.pdf'} onLoadSuccess={onDocumentLoadSuccess}>
                                    {Array.from(new Array(numPages), (el, index) => (
                                        <Page width={size.width} size='A4' key={`page_${index + 1}`} pageNumber={index + 1} />
                                    ))}
                                </Document>

                            )}
                        </SizeMe>
                    </div>
                </Box>
            </Modal>
        </div>
    )
}