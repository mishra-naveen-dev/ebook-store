import React from 'react'
import { Typography, Container } from '@material-ui/core';

const Policies = () => {
    return (
        <>
            <Container sx={{ jastifyContent: 'center', alineItem: 'center' }}>
                <Typography >
                    {'Privet Policy'}
                </Typography>

                <div>
                    <p>Last updated: August 8, 2024 </p>

                    <p> Welcome to Online Book Sales - Book4U. We are committed to protecting your personal information and your right to privacy. If you have any questions or concerns about our policy or our practices with regard to your personal information, please contact us supportbook4u@onlinebooksales.com.</p>
                    <p>Information We Collect</p>
                    <p>
                        We collect personal information that you provide to us, such as your name, address, contact information, and payment details. We collect this information when you register for our services, make a purchase, or otherwise interact with our website.</p>

                    <p> How We Use Your Information
                        We use the personal information we collect to process transactions, manage your orders, and communicate with you about our products and services. We may also use this information for customer support, marketing purposes, and to improve our website and services.</p>
                    <p>
                        Sharing Your Information
                        We may share your information in the following situations:
                    </p>
                    <p>
                        <span> With Service Providers:</span> We may share your information with third-party service providers who assist us in operating our website and processing payments.
                        <span> For Legal Reasons: </span>We may disclose your information if required to do so by law or in response to a valid request from law enforcement or other government authorities.
                        <span>Business Transfers:</span> In the event of a merger, acquisition, or sale of our company, your information may be transferred as part of the transaction.
                        Security of Your Information
                        We implement a variety of security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction. However, no security system is impenetrable, and we cannot guarantee the absolute security of your information.</p>

                    <p>   Contact Us
                        If you have any questions or comments about this privacy policy, please contact us at: supportbook4u@onlinebooksales.com.</p>
                </div>
            </Container>
        </>
    )
}

export default Policies
