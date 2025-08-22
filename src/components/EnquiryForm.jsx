import React from 'react'

function EnquiryForm() {
    return (
        <div>
            <form className="rounded px-5"
                style={{
                    backgroundColor: 'rgba(255, 255, 255, 0.8)',
                    border: '1px solid rgba(0,0,0,0.1)',
                    boxShadow: '0 8px 20px rgba(0,0,0,0.05)',
                    padding: '100px'
                }}>
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control py-3 px-0 rounded-0 bg-transparent"
                        placeholder="Your Name"
                        style={{ boxShadow: 'none', border: 'none', borderBottom: '1px solid black' }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control py-3 px-0 rounded-0 bg-transparent"
                        placeholder="Your Email"
                        style={{ boxShadow: 'none', border: 'none', borderBottom: '1px solid black' }}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        className="form-control py-3 px-0 rounded-0 bg-transparent"
                        rows="4"
                        placeholder="Your Message"
                        style={{ boxShadow: 'none', border: 'none', borderBottom: '1px solid black' }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn btn-warning w-100 fw-bold py-3 text-white"
                    style={{
                        boxShadow: '0 4px 15px rgba(253, 153, 13, 0.3)',
                        transition: 'transform 0.3s',
                        letterSpacing: '1px'
                    }}
                    onMouseOver={(e) => e.target.style.transform = 'translateY(-2px)'}
                    onMouseOut={(e) => e.target.style.transform = 'none'}
                >
                    📩 Send Message
                </button>
            </form>
        </div>
    )
}

export default EnquiryForm
