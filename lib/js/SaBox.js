import React, { useEffect, useRef } from 'react';
import { ESSA } from './es-sa';
export const SaBox = ({ type, duration, delay, timing, once, className, children, }) => {
    const ref = useRef(null);
    useEffect(() => {
        const saNode = ref.current;
        if (!saNode)
            return;
        const saOnce = once ? 'false' : 'true';
        saNode.setAttribute('data-sa', `${type}`);
        saNode.setAttribute('data-sa-duration', `${duration}`);
        saNode.setAttribute('data-sa-delay', `${delay}`);
        saNode.setAttribute('data-sa-time', `${timing}`);
        saNode.setAttribute('data-sa-once', saOnce);
        ESSA.saNodes.push(saNode);
        ESSA.intersection();
        return () => {
            ESSA.saNodes = ESSA.saNodes.filter((node) => node !== saNode);
        };
    }, [type, duration, delay, timing, once]);
    return (React.createElement("div", { className: `saBox ${className}`, ref: ref }, children));
};
