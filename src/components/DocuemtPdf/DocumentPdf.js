
import { Document, Page, View, Image, Text } from '@react-pdf/renderer';

const DocumentPdf = ({ firstName,
    firstLastName,
    nationality,
    identificationType,
    identificationNumber,
    birthDate,
    age,
    gender,
    location_seller,
    product,
    pdf,
    qr,
    img }) => {

        
    return (
        <Document>
            <Page size="A4">
                <View style={{ "display": "flex", "justifyContent": "center", "alignItems": "centers", "flexDirection": "column" }}>
                    <Image src={`../../../assests/pdf/${img}`} style={{ "height": "100px", "width": "150px" }} alt="no image" />
                    <Text>Nombre:{firstName} {firstLastName}</Text>
                    <Text>Nacionalidad: {nationality}</Text>
                    <Text>{identificationType}: {identificationNumber}</Text>
                    <Text>Edad: {age}</Text>
                    <Text>Genero: {gender}</Text>
                    <Text>Año de nacimiento: {birthDate}</Text>
                    <Text>Ubicación: {location_seller}</Text>
                    <Text>Producto: {product}</Text>
                    <Text>Vigencia 01-02-2022</Text>
                </View>
            </Page>
        </Document >
    )
}

export default DocumentPdf;