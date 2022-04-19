import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const TermsAndCondition = () => {
  return (
    <div>
        <div id="terms" className="py-3 py-md-3">
            <Container>
                <Row className="justify-content-center">
                    <Col md={10} className="align-self-center">
                        <h2 className="text-primary text-center py-3">Terms & Conditions</h2> 
                        <p>Project descriptions, price, and availability may contain typographical mistakes, inaccuracies, or omissions. We retain the right to rectify any mistakes or omissions, as well as update information, at any time and without notice. Any difficulty caused as a result of this is deeply regretted.</p>
                        <p>This site’s content, photos, graphics, designs, icons, photographs, and textual material are collectively referred to as ‘Contents.’ True Value Homes owns, controls, or license the copyright and trademarks for these contents.</p>
                        <h2 className="text-primary text-center py-3">Comments, feedback, and other submissions from users</h2>
                        <p>True Value Homes retain ownership of any comments, feedback, recommendations, or ideas provided via this Site or otherwise submitted or contributed in conjunction with its usage. We thus hold all exclusive rights, titles, and interests and are not bound in any manner. True Value Homes are under no obligation:</p>
                        <ul>
                            <li>To keep any user comments private;</li>
                            <li>To compensate users for any user comments; or</li>
                            <li>To reply to any user comments</li>
                        </ul>
                        <p>The Site and its Contents are exclusively for personal use and should not be used for commercial purposes. You may copy or download them for your personal use only. It is not permitted to reproduce the content in any form, including but not limited to publication, transmission, distribution, display, modification, sale, or participation in the sale of the Content.</p>
                        <p>As a site user, you agree that no remark you submit to the site infringes on any third-party rights. You also agree that none of your Comments will be considered illegal, abusive, or offensive. You will be fully accountable for any comments you make on this website.</p>
                        <h2 className="text-primary text-center py-3">Termination</h2>
                        <p>These terms are in force until either you or True Value Homes terminates them. You have the right to cancel this agreement at any time. True Value Homes have the right to cancel this agreement at any time and without notice. If you fail to comply with these terms and conditions, True Value Homes may, at its sole discretion, restrict your access to the Site. You shall promptly discard any content downloaded or otherwise accessed from this Site if the agreement is terminated by either you or True Value Homes.</p>
                    </Col>
                </Row>
            </Container>
        </div>
    </div>
  )
}

export default TermsAndCondition