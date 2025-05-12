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

            <div className="carousel-controls">
                <button onClick={prev}>⟨</button>
                <button onClick={next}>⟩</button>
            </div>
        </div>
    );
}
