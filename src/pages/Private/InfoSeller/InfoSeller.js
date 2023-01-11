import { useState } from 'react';
import { PDFViewer, PDFDownloadLink } from '@react-pdf/renderer';
import { useParams } from 'react-router-dom';
import QRCode from "react-qr-code";

import DocumentPdf from '../../../components/DocuemtPdf/DocumentPdf';
import useCVI from '../../../hooks/useCVI';

import './index.css';
const InfoSeller = () => {
    let { identificationNumber } = useParams();
    const [verPdf, SetVerPdf] = useState(false);
    const [generateQr, setGenerateQr] = useState(false);
    const ViewPdf = () => {
        SetVerPdf(!verPdf);
    }
    const GenerateQR = () => {
        setGenerateQr(!generateQr)
    }

    const infoSImage = useCVI({ 'atribute': `api/images/findKey?key=image:${identificationNumber}` });
    let url, namePDF;
    if (!Array.isArray(infoSImage)) {
        url = infoSImage.find[0].url
    }
    const infoS = useCVI({ 'atribute': `seller?identificationNumber=${identificationNumber}` });
    let infoSeller, genderSeller;


    if (!Array.isArray(infoS)) {
        if (infoS.seller[0].gender == 'female') {
            genderSeller = 'mujer';
        } else {
            genderSeller = 'hombre'
        }
        namePDF = identificationNumber;

        infoSeller =
            <div>
                <h2>Nombre: {infoS.seller[0].firstName} {infoS.seller[0].firstLastName}</h2>
                <img src={url} />

                <div className='containerDataInfoSeller'>
                    <label>Nacionalidad: </label>
                    <p>{infoS.seller[0].nationality}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>Tipo de identificación: </label>
                    <p>{infoS.seller[0].identificationType}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>Numero de identificación: </label>
                    <p>{infoS.seller[0].identificationNumber}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>Genero: </label>
                    <p>{genderSeller}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>Edad: </label>
                    <p>{infoS.seller[0].age}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>fecha de nacimiento: </label>
                    <p>{infoS.seller[0].birthDate}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>Ubicación: </label>
                    <p>{infoS.seller[0].location_seller}</p>
                </div>

                <div className='containerDataInfoSeller'>
                    <label>producto: </label>
                    <p>{infoS.seller[0].product}</p>
                </div>
                <PDFDownloadLink document={<DocumentPdf
                    firstName={infoS.seller[0].firstName}
                    firstLastName={infoS.seller[0].firstLastName}
                    nationality={infoS.seller[0].nationality}
                    identificationType={infoS.seller[0].identificationType}
                    identificationNumber={infoS.seller[0].identificationNumber}
                    birthDate={infoS.seller[0].birthDate}
                    age={infoS.seller[0].age}
                    gender={infoS.seller[0].gender}
                    location_seller={infoS.seller[0].location_seller}
                    product={infoS.seller[0].product}
                    img={url} />} fileName={namePDF}>
                    <button onClick={GenerateQR}>Descargar</button>
                </PDFDownloadLink>

                
                {verPdf ? <PDFViewer style={{ width: "100%", height: "90vh" }}><DocumentPdf
                    firstName={infoS.seller[0].firstName}
                    firstLastName={infoS.seller[0].firstLastName}
                    nationality={infoS.seller[0].nationality}
                    identificationType={infoS.seller[0].identificationType}
                    identificationNumber={infoS.seller[0].identificationNumber}
                    birthDate={infoS.seller[0].birthDate}
                    age={infoS.seller[0].age}
                    gender={infoS.seller[0].gender}
                    location_seller={infoS.seller[0].location_seller}
                    product={infoS.seller[0].product}
                    img={url} /></PDFViewer> : null}
                {generateQr ? <QRCode value={'google.com'} /> : null}
            </div>



    }
    return (
        <div>
            <div className='containerInfoSellerData'>
                {infoSeller}
            </div>

            <div>
                <button onClick={ViewPdf}>Ver pdf</button>


            </div>
        </div>
    )
}

export default InfoSeller;