import React, { useState } from "react";
import Webcam from "react-webcam";
import { saveAs } from 'file-saver';
import MyButton from "../../../components/Button/Button";
import FormSeller from "../../../components/FormSeller/FormSeller";
/* import m from '../../../assests/images/e' */
import "./index.css";
const Seller = () => {
    const webcamRef = React.useRef(null);
    const [sellerImage, setSellerImage] = useState();
    const [takePhoto, setTakePhoto] = useState(false);
    const [showPhoto, setShowPhoto] = useState(false);

    const capture = React.useCallback(
        () => {
            const imageSrc = webcamRef.current.getScreenshot();
            setSellerImage(imageSrc);
            setShowPhoto(!showPhoto)
            console.log(takePhoto)
            setTakePhoto(false)
        },
        [webcamRef]
    );

    const TakePhotoSeller = () => {

        setTakePhoto(!takePhoto);
        
    }

    const dowloadImage = () => {
        
        saveAs(sellerImage, '../../../assests/images/imageprueba.png')
      
    }
    return (
        <div className="containerSeller">


            <div className="divTakePhoto">
                <h2>Foto</h2>
                {
                    showPhoto ? <img src={sellerImage} alt="vendedor" onClick={dowloadImage} /> : <div className="divButtonSeller"> <MyButton onClick={TakePhotoSeller} name={'Tomar foto'} /> </div>
                }
                {
                    takePhoto ? <div className="divWebcamSeller"> <Webcam audio={false} height={350} ref={webcamRef} screenshotFormat="image/jpeg" width={350} />
                        <div className="divButtonSeller"> <MyButton onClick={capture} name={'Foto'} /> </div>
                    </div> : null
                }
            </div>
            <div className="divFomrSeller">
                <FormSeller imageSeller={sellerImage} />
            </div>

        </div>

    )
}

export default Seller;