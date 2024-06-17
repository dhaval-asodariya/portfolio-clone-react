import React, { useState } from 'react';
import ReCAPTCHA from "https://cdn.skypack.dev/react-google-recaptcha@2.1.0";

const ReactRecaptcha = () => {
  const testSiteKey = "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI";
  const [isVerified, setIsVerified] = useState(false);

  const handleVerify = () => {
    setIsVerified(true);
  };

  return (
    <div>
      
      <ReCAPTCHA sitekey={testSiteKey} onChange={handleVerify} />
      {isVerified && <p>You are verified. I'm not a robot.</p>}
    </div>
  );
};

export default ReactRecaptcha;