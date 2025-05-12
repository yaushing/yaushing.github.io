import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function CarouselInstance({ items, interval = 5000, autoPlay = false }) {
    const [index, setIndex] = useState(0);

    useEffect(() => {
        if (!autoPlay) return;
        const timer = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % items.length);
        }, interval);
        return () => clearInterval(timer);
    }, [items.length, interval, autoPlay]);

    const goToIndex = (i) => setIndex(i);
    const prev = () => setIndex((index - 1 + items.length) % items.length);
    const next = () => setIndex((index + 1) % items.length);

    return (
        <div className="carousel-container">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {items[index]}
                </motion.div>
            </AnimatePresence>
            <div className="carousel-indicators-self">
                <button className="btn carousel-left btn-carousel" onClick={prev}>⟨</button>
                <button className="btn carousel-right btn-carousel" onClick={next}>⟩</button>
                <div className="carousel-dots">
                    {items.map((_, i) => (
                        <button
                            key={i}
                            className={i === index ? "dot active" : "dot"}
                            onClick={() => goToIndex(i)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
}
