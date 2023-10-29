import { useEffect, useRef } from 'react';
import s from './CircleProgress.module.scss';

export default function CircleProgress({ percent = 98 }) {

    const circleRef = useRef();

    useEffect(() => {

        const radius = circleRef.current.r.baseVal.value;
        var circumference = radius * 2 * Math.PI;
        circleRef.current.style.strokeDasharray = `${circumference} ${circumference}`;
        circleRef.current.style.strokeDashoffset = `${circumference}`;

        const offset = circumference - percent / 100 * circumference;
        circleRef.current.style.strokeDashoffset = offset;

    }, [])

    return (
        <div>
            <svg
                className={s.progressRing}
                width="120"
                height="120">
                <circle
                    ref={circleRef}
                    strokeLinejoin='round'
                    // stroke-linejoin="round"
                    className={s.progressCircle}
                    stroke="#1a69ca"
                    stroke-width="6"
                    fill="transparent"
                    r="52"
                    cx="60"
                    cy="60" />
                <text x="50%" y="50%" textAnchor="middle" dominantBaseline="middle" stroke="#1a69ca" >4.9</text>

            </svg>
        </div>
    )
}
