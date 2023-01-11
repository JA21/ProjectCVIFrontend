import { PDFViewer,PDFDownloadLink } from '@react-pdf/renderer';
import { useState } from 'react';
import DocumentPdf from '../../../components/DocuemtPdf/DocumentPdf.js';
import example from '../../../assests/images/example.png';
import CviExample from '../../../assests/pdf/cvijorge.pdf'
import QRCode from "react-qr-code";
import useCVI from '../../../hooks/useCVI.js';
import ListMenu from '../../../components/Menu/ListMenu.js'
const Dashboard = () =>{
    const [verPdf,SetVerPdf]=useState(false);
    const [generateQr,setGenerateQr]=useState(false);
    const ViewPdf=()=>{
        
        SetVerPdf(!verPdf);
    }
    const GenerateQR=()=>{
        setGenerateQr(!generateQr)
    }

    const Menu=useCVI({'atribute':'menu'});
    
    return(
        <div style={{"display":"flex","justifyContent":"center","alignItems":"centers","flexDirection":"column"}}>
            <ListMenu cvi={Menu}/>
            <h1>PDf vendedor</h1>
            <img src={example} style={{"height":"100px","width":"150px"}} alt="no image"/>
            <label>Nombre</label>
            <label>Cedula</label>
            <label>Vendedor</label>
            <label>Vigencia 01-02-2022</label>
           <button onClick={ViewPdf}>Ver pdf</button>
           <PDFDownloadLink document={<DocumentPdf/>} fileName="name.pdf">
           <button onClick={GenerateQR}>Descargar</button>
            </PDFDownloadLink>
           {verPdf? <PDFViewer style={{width:"100%",height:"90vh"}}><DocumentPdf/></PDFViewer> :null}
          {generateQr?<QRCode value={CviExample}/>:null}
           
        </div>
    )
}

export default Dashboard;