import React from 'react';

const Contact = () => {

    return (
        <div className='page-moi' id='page-moi'>
                <h1>ME CONTACTER</h1>
                <div className="contact-main">
                            <img className="contact-icons" id='tel-icon' src="https://freesvg.org/img/1527145993.png" alt="Main" />
                        <p className="contact-infos" id='tel'>+33 6 32 85 17 81</p>
                        <img className="contact-icons" id='email-icon' src="https://upload.wikimedia.org/wikipedia/commons/6/63/Tokyoship_Mail_icon.svg" alt="Main" />
                        <p className="contact-infos" id='email'>julvandeputte@gmail.com</p>
                        <a className="contact-icons" id='workplace-icon' href='https://www.iut-amiens.fr/wp-content/uploads/DUT_INFO-AS.pdf'>
                            <img height="50px" width="50px" src="https://cdn.pixabay.com/photo/2021/03/28/07/18/graduate-hat-6130500_1280.png" alt="Main" />
                        </a>
                        <p className="contact-infos" id='workplace' >
                            <a href='https://www.iut-amiens.fr'>
                                I.U.T. Amiens
                            </a><br />
                            <a href='https://g.page/IUTAMIENS?share'>
                                Avenue des Facultés, Le Bailly, 80025 Amiens
                            </a>
                        </p>
                        
                </div>
        </div>
    );
};

export default Contact;