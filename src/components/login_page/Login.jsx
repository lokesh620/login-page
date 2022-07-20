import React from 'react'
import './login.css'
// import '../otp_page/otp.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
// import 'react-toastify/dist/ReactToastify.css';


export default function Login() {
    const [phoneNumber, setphoneNumber] = useState('');
    const [enableOtp, setEnableOtp] = useState(false);
    const [errorMessage, SetErrorMessage] = useState("");
    const [state, setState] = useState({ otp: "" });


    useEffect(() => {
        if (phoneNumber === "" || (phoneNumber.length === 10)) {
            SetErrorMessage(false)
        }
    }, [phoneNumber]);

    // let navigate = useNavigate();
    // function handleNavigate() {
    //     navigate('/data-entry', {replace: false});
    // };

    var regExp = '^[5-9][0-9]{9}$';
    var phone = phoneNumber.match(regExp);


    const handleClick = () => {
        !phone ? SetErrorMessage('Enter valid Mobile Number*') : setEnableOtp(true)
    }


    function allowedNumericInput(event) {
        const charCode = (event.which) ? event.which : event.keyCode;
        if (!(charCode > 31 && (charCode < 48 || charCode > 57))) {
            setphoneNumber(event.target.value);
        }
        else {
            event.preventDefault();
        }
    }

    return (
        <div className='backgroundImg'>
            <div className='loginContainer'>
                <div className='largeLogo'>
                   <p>Lokesh</p>
                </div>
                {!enableOtp ? (
                    <div className='input-Container'>
                        <div id='div1' className='input-Container'>
                            <label className='mobileNumberLabel' htmlFor="">Mobile Number</label>
                            <div className='inputImgContainer'>
                                <img src="../../../public/Group.svg" alt="" />
                                <input
                                    className='mobile-input'
                                    name='phoneNumber'
                                    onChange={(e) => setphoneNumber(e.target.value)}
                                    type="tel"
                                    maxLength="10"
                                    minLength="10"
                                    autoComplete="off"
                                    required
                                    onKeyPress={(event) => allowedNumericInput(event)}
                                />
                            </div>
                            <p className='error-message'>{errorMessage}</p>
                        </div>
                        <div className="button-Container">
                            <button className='button1' onClick={() => handleClick()}>
                                Next
                            </button>
                        </div>
                    </div>
                ) : (
                    <div className='otp-container'>
                        <div className='otpSentTo'>
                            <p>OTP Sent to 9988776655</p>
                        </div>
                        <div className='otpBox'>
                            <p className='otpLabel'>OTP</p>
                            <div className="digitsBox">
                                {/* <img class="otpImg" src="images/otp.svg" alt="" /> */}
                                <input
                                    className="otpInput"
                                    value={state.otp}
                                    onChange={(e) => setState(e.target.value)}
                                    type="tel"
                                    maxLength="6"
                                    minLength="6"
                                    autoComplete="off"
                                    required
                                />
                            </div>
                            <p className='resendOtpLabel'>Resend OTP</p>
                        </div>
                        <div className="buttonContainer">
                            <button type='submit' className='button'>
                                Submit
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}



