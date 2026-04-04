import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandHoldingGift({
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
          d="M6.75 5.25151H15.25V8.4623C14.939 8.5128 14.6294 8.60452 14.3284 8.74019L12.7066 9.47213C12.3528 9.01072 11.8838 8.62711 11.3181 8.3696L11.3156 8.36848L8.54255 7.10227L8.52372 7.09377C7.9291 6.82884 7.33323 6.67005 6.75 6.60651V5.25151Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M0 10.75C0 10.1977 0.447715 9.75 1 9.75H2C2.55228 9.75 3 10.1977 3 10.75V15.75C3 16.3023 2.55228 16.75 2 16.75H1C0.447715 16.75 0 16.3023 0 15.75V10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.437 12.965L15.254 10.791C15.966 10.47 16.803 10.786 17.125 11.498C17.446 12.21 17.13 13.047 16.418 13.369L9.627 16.434C8.951 16.739 8.186 16.783 7.479 16.557L3.001 15.125"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.245 12.098L9.216 12.992C9.927 13.315 10.765 13 11.088 12.289C11.411 11.578 11.096 10.74 10.385 10.417L7.608 9.149C5.312 8.126 3.375 9.688 3 11.501"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M0.75 9.75H2C2.552 9.75 3 10.198 3 10.75V15.75C3 16.302 2.552 16.75 2 16.75H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.556 1.139C7.697 1.139 7 1.836 7 2.695C7 3.554 7.697 4.251 8.556 4.251H11C11 4.251 10.82 1.139 8.556 1.139Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 4.25H13.444C14.303 4.25 15 3.553 15 2.694C15 1.835 14.303 1.138 13.444 1.138C11.18 1.138 11 4.25 11 4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 6.354V5.302"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25V8.21"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 5.25V7.949"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 4.25H5.75V5.25H16.25V4.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HandHoldingGift;
