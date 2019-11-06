import React from "react";

const SvgWheel = props => (
  <svg width="1em" height="1em" viewBox="0 0 484 200" {...props}>
    <defs>
      <radialGradient id="wheel_svg__d" r="50.01%" fx="50%" fy="50%">
        <stop offset="0%" />
        <stop offset="77.626%" stopColor="#555" />
        <stop offset="100%" />
      </radialGradient>
      <filter
        id="wheel_svg__c"
        width="101.2%"
        height="103%"
        x="-.6%"
        y="-1.5%"
        filterUnits="objectBoundingBox"
      >
        <feGaussianBlur
          in="SourceAlpha"
          result="shadowBlurInner1"
          stdDeviation={3}
        />
        <feOffset in="shadowBlurInner1" result="shadowOffsetInner1" />
        <feComposite
          in="shadowOffsetInner1"
          in2="SourceAlpha"
          k2={-1}
          k3={1}
          operator="arithmetic"
          result="shadowInnerInner1"
        />
        <feColorMatrix
          in="shadowInnerInner1"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.5 0"
        />
      </filter>
      <rect id="wheel_svg__b" width={482} height={198} x={1} y={1} rx={10} />
      <path id="wheel_svg__a" d="M266 5589h504v320H266z" />
      <mask id="wheel_svg__e" width={504} height={320} x={0} y={0} fill="#fff">
        <use xlinkHref="#wheel_svg__a" />
      </mask>
    </defs>
    <g fill="none" fillRule="evenodd" transform="translate(-276 -5599)">
      <path stroke="#000" strokeWidth={2} d="M82 5542h753v413H82z" />
      <g fillRule="nonzero" transform="translate(276 5599)">
        <use fill="#FFF" xlinkHref="#wheel_svg__b" />
        <use
          fill="#000"
          filter="url(#wheel_svg__c)"
          xlinkHref="#wheel_svg__b"
        />
      </g>
      <path
        fill="url(#wheel_svg__d)"
        d="M74.669.001a3.319 3.319 0 00-3.003 1.912 3.234 3.234 0 00-.833-.794 3.28 3.28 0 00-2.488-.494L59.29 2.424a3.302 3.302 0 00-2.108 1.411 3.315 3.315 0 00-.466 1.05 3.298 3.298 0 00-.968-.615 3.293 3.293 0 00-2.54 0L44.68 7.802a3.288 3.288 0 00-1.793 1.795 3.34 3.34 0 00-.252 1.124 3.32 3.32 0 00-3.56.078L31.4 15.928a3.324 3.324 0 00-1.436 3.261 3.314 3.314 0 00-3.477.77l-6.53 6.529a3.322 3.322 0 00-.768 3.474 3.341 3.341 0 00-1.151.03 3.3 3.3 0 00-2.113 1.408l-5.128 7.676a3.306 3.306 0 00-.494 2.49c.075.384.215.747.416 1.073A3.324 3.324 0 007.8 44.68l-3.532 8.53a3.293 3.293 0 000 2.54c.147.36.357.688.613.967a3.28 3.28 0 00-1.048.466 3.276 3.276 0 00-1.41 2.109l-1.8 9.054a3.322 3.322 0 001.29 3.321A3.325 3.325 0 000 74.672v9.233c0 1.327.786 2.476 1.914 3.005a3.318 3.318 0 00-1.292 3.32l1.803 9.056c.17.867.67 1.616 1.409 2.106.324.22.679.376 1.048.466a3.26 3.26 0 00-.613.97 3.288 3.288 0 000 2.538l3.532 8.53a3.32 3.32 0 002.917 2.042 3.31 3.31 0 00-.416 1.073 3.308 3.308 0 00.494 2.49l5.128 7.678a3.305 3.305 0 002.113 1.407 3.29 3.29 0 001.15.027 3.325 3.325 0 00.77 3.477l6.53 6.527c.902.902 2.309 1.196 3.476.773a3.32 3.32 0 001.436 3.26l7.676 5.13a3.32 3.32 0 003.559.076c.018.381.102.76.252 1.124a3.294 3.294 0 001.793 1.795l8.53 3.532c.82.339 1.718.336 2.537 0 .365-.152.689-.357.97-.615.09.369.248.724.466 1.052a3.296 3.296 0 002.108 1.407l9.055 1.803a3.317 3.317 0 003.32-1.292 3.32 3.32 0 003.004 1.914h9.235a3.323 3.323 0 003.003-1.914 3.317 3.317 0 003.32 1.292l9.055-1.803a3.3 3.3 0 002.574-2.46 3.325 3.325 0 003.508.616l8.53-3.532a3.32 3.32 0 002.045-2.919 3.312 3.312 0 003.556-.078l7.678-5.128a3.32 3.32 0 001.436-3.26c1.167.423 2.575.13 3.477-.773l6.53-6.527a3.326 3.326 0 00.77-3.477c.378.06.768.049 1.151-.027a3.29 3.29 0 002.111-1.41l5.126-7.675a3.3 3.3 0 00.497-2.49 3.307 3.307 0 00-.415-1.073 3.321 3.321 0 002.917-2.043l3.533-8.53a3.297 3.297 0 000-2.537 3.272 3.272 0 00-.618-.97 3.23 3.23 0 001.05-.466 3.285 3.285 0 001.412-2.106l1.799-9.057a3.313 3.313 0 00-1.293-3.319 3.324 3.324 0 001.918-3.005v-9.233a3.327 3.327 0 00-1.913-3.005 3.321 3.321 0 001.288-3.32l-1.8-9.055a3.294 3.294 0 00-1.41-2.109 3.275 3.275 0 00-1.05-.466c.258-.279.467-.607.617-.968a3.297 3.297 0 000-2.537l-3.533-8.532a3.32 3.32 0 00-2.917-2.04 3.34 3.34 0 00.415-1.073 3.298 3.298 0 00-.497-2.49l-5.126-7.677a3.29 3.29 0 00-2.11-1.409 3.342 3.342 0 00-1.151-.029 3.323 3.323 0 00-.772-3.474l-6.529-6.53a3.314 3.314 0 00-3.477-.769 3.32 3.32 0 00-1.436-3.26l-7.678-5.132a3.32 3.32 0 00-3.557-.076 3.31 3.31 0 00-.25-1.124 3.298 3.298 0 00-1.795-1.795l-8.529-3.532a3.298 3.298 0 00-2.541 0c-.36.15-.686.36-.967.616a3.31 3.31 0 00-.463-1.05 3.306 3.306 0 00-2.11-1.412L90.227.625a3.28 3.28 0 00-2.489.494 3.246 3.246 0 00-.832.794A3.321 3.321 0 0083.904.001h-9.235zM37.735 79.288c0-22.948 18.603-41.553 41.551-41.553S120.84 56.34 120.84 79.288c0 22.947-18.605 41.55-41.553 41.55-22.948 0-41.55-18.603-41.55-41.55z"
        transform="translate(438 5619)"
      />
      <path
        fill="#009EE1"
        d="M548.37 5698.016h-12.648a4.641 4.641 0 01-4.304-2.876 4.645 4.645 0 011.012-5.073l9.526-9.528a4.69 4.69 0 014.022-1.313 4.586 4.586 0 013.401 2.437 35.828 35.828 0 013.6 10.956v.002a4.668 4.668 0 01-4.61 5.395zm3.059 12.12a36.041 36.041 0 01-4.351 8.643 4.643 4.643 0 01-3.846 2.016 4.646 4.646 0 01-3.297-1.366l-7.505-7.506a4.643 4.643 0 01-1.012-5.075 4.644 4.644 0 014.302-2.873h11.29c1.504 0 2.93.734 3.805 1.963a4.635 4.635 0 01.614 4.199zm-15.077 16.846a4.58 4.58 0 01-2.433 3.393 35.922 35.922 0 01-7.885 2.972 4.614 4.614 0 01-3.971-.851 4.648 4.648 0 01-1.798-3.682v-9.385c0-1.89 1.13-3.578 2.874-4.302a4.643 4.643 0 015.075 1.01l6.823 6.822a4.704 4.704 0 011.315 4.023zm-25.582-28.694c0-3.6 2.919-6.517 6.517-6.517 3.6 0 6.515 2.917 6.515 6.517a6.515 6.515 0 11-13.032 0zm3.539 30.526a4.658 4.658 0 01-1.795 3.682 4.626 4.626 0 01-3.972.85 35.958 35.958 0 01-7.887-2.97 4.575 4.575 0 01-2.43-3.394 4.697 4.697 0 011.312-4.025l6.823-6.82a4.64 4.64 0 015.073-1.01 4.643 4.643 0 012.876 4.302v9.385zm-22.969-8.019a4.642 4.642 0 01-3.844-2.018 36.065 36.065 0 01-4.35-8.64 4.635 4.635 0 01.613-4.2 4.688 4.688 0 013.805-1.962h11.288a4.644 4.644 0 014.302 2.873 4.642 4.642 0 01-1.008 5.075l-7.507 7.506a4.65 4.65 0 01-3.299 1.366zm-9.747-28.174a35.856 35.856 0 013.602-10.96 4.589 4.589 0 013.399-2.435 4.705 4.705 0 014.024 1.313l9.526 9.528a4.64 4.64 0 011.01 5.073 4.64 4.64 0 01-4.302 2.876h-12.65a4.671 4.671 0 01-4.61-5.395zm15.193-24.12a35.894 35.894 0 0111.752-5.273 4.613 4.613 0 013.976.855 4.64 4.64 0 011.795 3.676v14.802a4.643 4.643 0 01-2.876 4.302 4.643 4.643 0 01-5.073-1.01l-10.218-10.215a4.668 4.668 0 01-1.347-3.733 4.634 4.634 0 011.991-3.403zm23.48-.742c0-1.444.652-2.783 1.794-3.676a4.617 4.617 0 013.974-.855 35.81 35.81 0 0111.753 5.276 4.635 4.635 0 011.994 3.4 4.671 4.671 0 01-1.351 3.734l-10.216 10.216a4.648 4.648 0 01-5.075 1.009 4.647 4.647 0 01-2.874-4.302v-14.802zm-2.979-17.163c-26.34 0-47.692 21.352-47.692 47.692s21.351 47.693 47.692 47.693c26.338 0 47.692-21.352 47.692-47.693 0-26.34-21.354-47.692-47.692-47.692z"
      />
      <use
        fillRule="nonzero"
        stroke="#373B44"
        strokeDasharray="6,6"
        strokeWidth={2}
        mask="url(#wheel_svg__e)"
        xlinkHref="#wheel_svg__a"
      />
    </g>
  </svg>
);

export default SvgWheel;
