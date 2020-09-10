import React, { useState, useEffect, useRef } from "react";
import "./CVProgressBar.scss";

export default function CVProgressBar({ progress }) {
  const [offset, setOffset] = useState(0);
  const circleRef = useRef(null);

  useEffect(() => {
    const progressOffset = ((100 - progress) / 100) * circumference;
    setOffset(progressOffset);
    circleRef.current.style =
      "transition: stroke-dashoffset 1000ms ease-in-out";
  }, [setOffset, circumference, progress, offset]);

  const strokeWidth = 10;
  const radius = 70;
  const circumference = 2 * Math.PI * radius;

  return (
    <div className="cv-progress-bar">
      <svg className="cv-progress-bar__svg" width="150" height="150">
        <circle
          className="cv-progress-bar__circle-bg"
          cx="75"
          cy="75"
          r={radius}
          stroke="#f2e3d5"
          strokeWidth={strokeWidth}
          fill="transparent"
        />
        <circle
          className="cv-progress-bar__circle"
          cx="75"
          cy="75"
          r={radius}
          stroke="#f39d1c"
          strokeWidth={strokeWidth}
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          ref={circleRef}
        />
      </svg>
    </div>
  );
}
