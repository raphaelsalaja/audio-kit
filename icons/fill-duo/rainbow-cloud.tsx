import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function RainbowCloud({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M8.75 9C8.05921 9 7.5 9.55921 7.5 10.25V11.25C7.5 11.6642 7.16421 12 6.75 12C6.33579 12 6 11.6642 6 11.25V10.25C6 8.73079 7.23079 7.5 8.75 7.5C9.12312 7.5 9.48088 7.57463 9.80764 7.71083C10.19 7.87019 10.3707 8.30931 10.2114 8.69164C10.052 9.07398 9.61289 9.25473 9.23056 9.09537C9.08372 9.03417 8.92188 9 8.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.75 6.25C6.54121 6.25 4.75 8.04121 4.75 10.25V11.25C4.75 11.6642 4.41421 12 4 12C3.58579 12 3.25 11.6642 3.25 11.25V10.25C3.25 7.21279 5.71279 4.75 8.75 4.75C10.1628 4.75 11.4522 5.28392 12.4259 6.15909C12.734 6.43597 12.7593 6.91017 12.4824 7.21824C12.2055 7.52631 11.7313 7.5516 11.4233 7.27471C10.7138 6.63708 9.77799 6.25 8.75 6.25Z"
          fill={secondaryfill}
          fillOpacity="0.2"
          fillRule="evenodd"
        />
        <path
          d="M8.75 3.5C5.02221 3.5 2 6.52221 2 10.25V11.25C2 11.6642 1.66421 12 1.25 12C0.835786 12 0.5 11.6642 0.5 11.25V10.25C0.5 5.69379 4.19379 2 8.75 2C11.7201 2 14.3229 3.56986 15.7745 5.92133C15.9921 6.27379 15.8827 6.73591 15.5303 6.95349C15.1778 7.17107 14.7157 7.06173 14.4981 6.70927C13.3083 4.78194 11.1787 3.5 8.75 3.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M10.9448 10.5077C11.5682 9.32018 12.8047 8.5 14.25 8.5C16.3212 8.5 18 10.1788 18 12.25C18 14.3212 16.3212 16 14.25 16H10.75C9.23054 16 8 14.768 8 13.25C8 11.732 9.23054 10.5 10.75 10.5C10.8162 10.5 10.8811 10.5027 10.9448 10.5077Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default RainbowCloud;
