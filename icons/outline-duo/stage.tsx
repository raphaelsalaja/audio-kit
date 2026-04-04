import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stage({
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
          d="M2.10312 13.3851L4.79291 10.0254C4.93524 9.84761 5.15064 9.74413 5.37839 9.74413H12.6473C12.8765 9.74413 13.0931 9.84895 13.2354 10.0287L15.8945 13.3885C16.1187 13.0654 16.25 12.673 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75H3.75C2.64543 3.75 1.75 4.64543 1.75 5.75V12.25C1.75 12.6716 1.88042 13.0627 2.10312 13.3851Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M2.10899 13.391L4.69999 10.128C4.88999 9.889 5.17799 9.75 5.48299 9.75H12.517C12.822 9.75 13.11 9.889 13.3 10.128L15.891 13.391"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.75 14.25L14.25 14.25C15.3546 14.25 16.25 13.3546 16.25 12.25V5.75C16.25 4.64543 15.3546 3.75 14.25 3.75L3.75 3.75C2.64543 3.75 1.75 4.64543 1.75 5.75L1.75 12.25C1.75 13.3546 2.64543 14.25 3.75 14.25Z"
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

export default Stage;
