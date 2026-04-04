import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HandHoldingCoin2({
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
          d="M13.75 12.5C15.407 12.5 16.75 11.157 16.75 9.5C16.75 7.843 15.407 6.5 13.75 6.5C12.093 6.5 10.75 7.843 10.75 9.5C10.75 11.157 12.093 12.5 13.75 12.5Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 10.25V8.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.25 12.9L3.52901 8.24399C3.75901 7.77399 4.07799 7.35299 4.47099 7.00699C5.00499 6.53799 5.84401 5.822 6.77901 5.108C7.93001 4.229 9.381 3.84299 10.94 3.84299C11.542 3.84299 12.136 3.938 12.706 4.125C13.412 4.357 13.795 5.11401 13.566 5.82401C13.334 6.53101 12.574 6.91601 11.867 6.68301C11.287 6.49301 10.655 6.48601 10.038 6.66901C9.12899 6.93901 8.38901 7.678 8.11501 8.586C7.50701 10.606 9.011 12.46 10.94 12.46C11.257 12.46 11.568 12.411 11.867 12.313C12.574 12.081 13.334 12.466 13.566 13.172C13.611 13.312 13.633 13.453 13.633 13.592C13.633 14.158 13.273 14.685 12.706 14.871C12.136 15.058 11.542 15.153 10.94 15.153L7.981 15.155C7.177 15.155 6.389 15.381 5.707 15.806L4.593 16.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.365 3.77599C10.805 3.47799 11.044 2.933 10.927 2.381C10.769 1.652 10.057 1.18999 9.32999 1.34399C8.74299 1.46899 8.18198 1.685 7.66098 1.988C6.31298 2.771 5.59099 3.78199 4.97899 5.14599C4.49699 6.21899 3.52899 8.24499 3.52899 8.24499"
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

export default HandHoldingCoin2;
