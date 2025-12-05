import { useEffect, useState, useRef } from "react";

export default function SplashScreen({ onComplete }) {
    const [slide, setSlide] = useState(false);
    const [hide, setHide] = useState(false);
    const lines = ["Innovation", "in everything", "we do"];
    const [typed, setTyped] = useState(["", "", ""]);
    const [li, setLi] = useState(0);
    const [ci, setCi] = useState(0);
    const bandRef = useRef(null);
    const doneRef = useRef(false);

    useEffect(() => {
        const start = setTimeout(() => setSlide(true), 500);
        const fallback = setTimeout(() => {
            if (!doneRef.current) {
                doneRef.current = true;
                onComplete();
            }
        }, 5000);
        return () => {
            clearTimeout(start);
            clearTimeout(fallback);
        };
    }, [onComplete]);

    useEffect(() => {
        if (!slide) return;
        const t = setTimeout(() => setHide(true), 2800);
        return () => clearTimeout(t);
    }, [slide]);

    useEffect(() => {
        if (!slide || !bandRef.current) return;
        const el = bandRef.current;
        const onEnd = (e) => {
            if (e.propertyName !== "transform") return;
            if (!doneRef.current) {
                doneRef.current = true;
                onComplete();
            }
        };
        el.addEventListener("transitionend", onEnd);
        return () => el.removeEventListener("transitionend", onEnd);
    }, [slide, onComplete]);

    useEffect(() => {
        const current = lines[li] ?? "";
        if (li >= lines.length) return;
        if (ci <= current.length) {
            const t = setTimeout(() => {
                setTyped(prev =>
                    prev.map((v, idx) => (idx === li ? current.slice(0, ci) : v))
                );
                setCi(ci + 1);
            }, 30);
            return () => clearTimeout(t);
        } else if (li < lines.length - 1) {
            const n = setTimeout(() => {
                setLi(li + 1);
                setCi(0);
            }, 280);
            return () => clearTimeout(n);
        }
    }, [ci, li, lines]);

    if (hide) {
        return null;
    }

    return (
        <div
            className="position-fixed top-0 start-0 w-100 h-100"
            style={{ 
                overflow: "hidden", 
                background: "transparent",
                zIndex: 2147483647
            }}
        >
            <style>{`
                @media (max-width: 576px) {
                    .splash-box { width: min(94vw, 900px) !important; }
                    .splash-head { font-size: clamp(1.3rem, 7vw, 1.9rem) !important; }
                    .splash-tag { letter-spacing: 0.18em !important; font-size: 0.62rem !important; }
                    .splash-typed { max-width: 82vw !important; font-size: clamp(1rem, 4.2vw, 1.05rem) !important; line-height: 1.5 !important; }
                }
            `}</style>
            <div
                className="position-absolute top-0 start-0 w-100 h-100"
                style={{
                    overflow: "hidden",
                    zIndex: 2,
                    pointerEvents: "none",
                }}
            >
                <div
                    style={{
                        position: "absolute",
                        width: "340%",
                        height: "340%",
                        top: "-120%",
                        left: "-120%",
                        rotate: "12deg",
                        background: "#fff",
                        transform: slide
                            ? "translate3d(12%, -260%, 0)"
                            : "translate3d(0, 0%, 0)",
                        transition:
                            "transform 10s cubic-bezier(0.4, 0, 0.2, 1)",
                        willChange: "transform",
                    }}
                    ref={bandRef}
                />
            </div>

            <div
                className="position-absolute top-50 start-50 translate-middle splash-box"
                style={{
                    zIndex: 3,
                    width: "min(90vw, 900px)",
                    transformOrigin: "right bottom",
                    backfaceVisibility: "hidden",
                    transform: slide
                        ? "translate(-24px, -56px) scale(0.98)"
                        : "none",
                    opacity: slide ? 0 : 1,
                    transition: "transform 0.9s ease 2.0s, opacity 0.9s ease 2.0s",
                    pointerEvents: slide ? "none" : "auto",
                }}
            >
                <div className="d-flex flex-column flex-md-row align-items-center justify-content-center gap-3 gap-md-5">
                    <div className="text-center text-md-start">
                        <div
                            className="fw-bold splash-head"
                            style={{
                                fontSize: "clamp(1.6rem, 3.8vw, 2.2rem)",
                                lineHeight: 1.2,
                            }}
                        >
                            <span style={{ color: "#333" }}>Zhang</span>
                            <span style={{ color: "#d61f26" }}>Properties</span>
                        </div>
                        <div
                            className="text-uppercase mt-1 splash-tag"
                            style={{
                                letterSpacing: "0.3em",
                                fontSize: "0.7rem",
                                color: "#888",
                            }}
                        >
                            CONSULTANTS
                        </div>
                        <div
                            className="mt-2"
                            style={{
                                height: 4,
                                backgroundColor: "#d61f26",
                                width: slide ? 0 : 120,
                                transition: "width 0.8s ease",
                                marginLeft: "auto",
                                marginRight: "auto",
                            }}
                        />
                    </div>

                    <div
                        className="d-none d-sm-block"
                        style={{
                            width: 1,
                            height: 64,
                            backgroundColor: "rgba(0,0,0,0.25)",
                        }}
                    />

                    <div
                        className="text-muted splash-typed mt-3 mt-md-0"
                        style={{
                            maxWidth: 260,
                            fontSize: "clamp(2rem, 2.4vw, 1.2rem)",
                            lineHeight: 1.6,
                        }}
                    >
                        <div
                            style={{
                                transform: slide ? "translate(-10px, -28px)" : "none",
                                opacity: slide ? 0 : 1,
                                transition: "transform 0.6s ease 1.8s, opacity 0.6s ease 1.8s",
                            }}
                        >
                            {typed[0]}
                        </div>
                        <div
                            style={{
                                transform: slide ? "translate(-10px, -28px)" : "none",
                                opacity: slide ? 0 : 1,
                                transition: "transform 0.6s ease 1.9s, opacity 0.6s ease 1.9s",
                            }}
                        >
                            {typed[1]}
                        </div>
                        <div
                            style={{
                                transform: slide ? "translate(-10px, -28px)" : "none",
                                opacity: slide ? 0 : 1,
                                transition: "transform 0.6s ease 2.0s, opacity 0.6s ease 2.0s",
                            }}
                        >
                            {typed[2]}
                        </div>
                    </div>
                </div>
            </div>

            <div
                className="position-absolute start-50 translate-middle-x"
                style={{
                    bottom: 12,
                    zIndex: 3,
                    color: "#777",
                    fontSize: 12,
                    letterSpacing: "0.5em",
                    transition: "transform 0.6s ease 2.0s, opacity 0.6s ease 2.0s",
                    transform: slide ? "translate(0, 16px)" : "none",
                    opacity: slide ? 0 : 1,
                }}
            >
                L O A D I N G
            </div>
        </div>
    );
}