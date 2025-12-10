import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

function EnquiryForm() {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs.sendForm(
      "YOUR_SERVICE_ID",
      "YOUR_TEMPLATE_ID",
      formRef.current,
      "YOUR_PUBLIC_KEY"
    ).then(
      () => {
        setLoading(false);
        setIsSubmitted(true);
        formRef.current.reset();
      },
      (error) => {
        console.error('Email sending failed:', error);
        alert("Failed to send message. Please try again later.");
        setLoading(false);
      }
    );
  };

  const inputStyle = {
    border: 'none',
    borderBottom: '1px solid #e0e0e0',
    borderRadius: '0',
    padding: '8px 0',
    fontSize: '14px',
    color: '#555',
    boxShadow: 'none',
    backgroundColor: 'transparent',
    width: '100%',
    marginBottom: '20px',
    outline: 'none',
    transition: 'border-color 0.3s',
    fontFamily: 'Arial, sans-serif'
  };

  const labelStyle = {
    fontSize: '10px',
    fontWeight: '700',
    letterSpacing: '1px',
    color: '#888',
    textTransform: 'uppercase',
    margin: '0',
    display: 'block',
    fontFamily: 'Arial, sans-serif'
  };

  if (isSubmitted) {
    return (
      <div className="alert alert-success text-center p-5">
        <h4>Thank You!</h4>
        <p>Your enquiry has been submitted successfully.</p>
        <button className="btn btn-sm btn-outline-success mt-3" onClick={() => setIsSubmitted(false)}>Send another</button>
      </div>
    );
  }

  return (
    <form ref={formRef} onSubmit={sendEmail} style={{ maxWidth: '500px', margin: '0 auto' }}>
      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="name" style={labelStyle}>FULL NAME</label>
        <input 
          type="text" 
          style={inputStyle}
          id="name" 
          name="name" 
          required 
          onFocus={(e) => {
            e.target.style.borderBottomColor = '#b11226';
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = '#e0e0e0';
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="email" style={labelStyle}>EMAIL</label>
        <input 
          type="email" 
          style={inputStyle}
          id="email" 
          name="email" 
          required 
          onFocus={(e) => {
            e.target.style.borderBottomColor = '#b11226';
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = '#e0e0e0';
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="phone" style={labelStyle}>PHONE</label>
        <input 
          type="tel" 
          style={inputStyle}
          id="phone" 
          name="phone" 
          required 
          onFocus={(e) => {
            e.target.style.borderBottomColor = '#b11226';
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = '#e0e0e0';
          }}
        />
      </div>

      <div style={{ marginBottom: '10px' }}>
        <label htmlFor="company" style={labelStyle}>COMPANY</label>
        <input 
          type="text" 
          style={inputStyle}
          id="company" 
          name="company" 
          onFocus={(e) => {
            e.target.style.borderBottomColor = '#b11226';
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = '#e0e0e0';
          }}
        />
      </div>

      <div style={{ marginBottom: '20px' }}>
        <label htmlFor="message" style={labelStyle}>DESCRIPTION</label>
        <textarea 
          style={{ 
            ...inputStyle, 
            minHeight: '80px', 
            resize: 'vertical',
            padding: '8px 0',
            lineHeight: '1.5'
          }}
          id="message" 
          name="message" 
          required
          onFocus={(e) => {
            e.target.style.borderBottomColor = '#b11226';
          }}
          onBlur={(e) => {
            e.target.style.borderBottomColor = '#e0e0e0';
          }}
        ></textarea>
      </div>

      <div>
        <button 
          type="submit" 
          disabled={loading}
          style={{
            backgroundColor: '#b11226',
            border: 'none',
            borderRadius: '0',
            fontSize: '12px',
            fontWeight: '600',
            letterSpacing: '1px',
            padding: '12px 30px',
            position: 'relative',
            transition: 'all 0.3s',
            color: 'white',
            width: '100%',
            textTransform: 'uppercase',
            cursor: 'pointer',
            fontFamily: 'Arial, sans-serif'
          }}
          onMouseOver={(e) => {
            e.currentTarget.style.backgroundColor = '#900e1f';
            e.currentTarget.style.paddingRight = '40px';
            e.currentTarget.querySelector('i').style.right = '15px';
          }}
          onMouseOut={(e) => {
            e.currentTarget.style.backgroundColor = '#b11226';
            e.currentTarget.style.paddingRight = '30px';
            e.currentTarget.querySelector('i').style.right = '20px';
          }}
        >
          {loading ? 'Sending...' : 'SEND FORM'}
          <i 
            className="fas fa-arrow-right" 
            style={{ 
              position: 'absolute', 
              right: '20px', 
              top: '50%', 
              transform: 'translateY(-50%)',
              transition: 'all 0.3s',
              fontSize: '12px'
            }}
          ></i>
        </button>
      </div>
    </form>
  );
}

export default EnquiryForm;
