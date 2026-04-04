import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHandshake({
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
          d="M1.25098 6.60901C1.25098 4.07297 3.25922 2 5.82697 2H5.83637C7.35627 2.01906 8.76988 2.7845 9.61771 4.04458L14.6616 11.1863C14.8567 11.4626 14.8428 11.8352 14.6277 12.0961C12.965 14.113 10.7716 15.3889 9.81819 15.8868C9.30377 16.1553 8.6974 16.1554 8.18298 15.8869C7.36476 15.4601 5.65699 14.4713 4.14426 12.9463C2.63275 11.4226 1.25098 9.29505 1.25098 6.60901Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M12.1796 2.00103C14.7136 2.01655 16.7597 4.07743 16.751 6.61127C16.7507 8.82961 15.8059 10.6693 14.6287 12.0971C14.4811 12.2761 14.259 12.3768 14.027 12.3697C13.7951 12.3625 13.5796 12.2485 13.4432 12.0608L10.6743 8.24898L10.0289 8.99672C9.02128 10.1689 7.25628 10.2736 6.11297 9.24998L5.66695 8.85096C5.37803 8.59249 5.3337 8.15643 5.56469 7.8451L8.38929 4.03818C9.23687 2.78223 10.6481 2.02009 12.1656 2.00108L12.1796 2.00103Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HeartHandshake;
