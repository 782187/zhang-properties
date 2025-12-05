import React from "react";

function EnquiryForm() {
    return (
        <div
            style={{
                padding: "20px",
                width: "100%",
                background: `
                      repeating-linear-gradient(
                        45deg,
                        rgba(64, 64, 64, 0.5),
                        rgba(0, 0, 0, 0.3) 14%,
                        transparent 14%,
                        transparent 50%
                      )
                    `,
                backgroundSize: "6px 6px",
                display: "inline-block",
            }}
        >
            <form
                className="rounded p-4 p-md-5 shadow-sm"
                style={{
                    backgroundColor: "rgba(255, 255, 255, 0.97)",
                    borderRadius: "10px",
                    border: "1px solid rgba(0,0,0,0.1)",
                    backdropFilter: "blur(3px)",
                }}
            >
                <div className="mb-3">
                    <input
                        type="text"
                        className="form-control bg-transparent border-0 border-bottom rounded-0 py-3"
                        placeholder="Your Name"
                        style={{ borderBottom: "1px solid #d61f26", color: "#000" }}
                    />
                </div>
                <div className="mb-3">
                    <input
                        type="email"
                        className="form-control bg-transparent border-0 border-bottom rounded-0 py-3"
                        placeholder="Your Email"
                        style={{ borderBottom: "1px solid #d61f26", color: "#000" }}
                    />
                </div>
                <div className="mb-4">
                    <textarea
                        rows="4"
                        className="form-control bg-transparent border-0 border-bottom rounded-0 py-3"
                        placeholder="Your Message"
                        style={{ borderBottom: "1px solid #d61f26", color: "#000" }}
                    ></textarea>
                </div>
                <button
                    type="submit"
                    className="btn w-100 fw-bold py-3 text-white"
                    style={{
                        backgroundColor: "#d61f26",
                        boxShadow: "0 4px 15px rgba(214,31,38,0.3)",
                        letterSpacing: "1px",
                        transition: "transform 0.3s",
                    }}
                    onMouseOver={(e) => (e.target.style.transform = "translateY(-2px)")}
                    onMouseOut={(e) => (e.target.style.transform = "none")}
                >
                    📩 Send Message
                </button>
            </form>
        </div>
    );
}

export default EnquiryForm;
