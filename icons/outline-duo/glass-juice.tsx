import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GlassJuice({
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
          d="M2.74999 5.75H9.24999L9.02299 15.274C9.00999 15.817 8.56599 16.25 8.02299 16.25H3.97599C3.43299 16.25 2.98899 15.817 2.97599 15.274L2.74999 5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5 3.5C13.776 3.5 14 3.724 14 4C14 5.38 12.88 6.5 11.5 6.5C11.224 6.5 11 6.276 11 6C11 4.62 12.12 3.5 13.5 3.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.74999 5.75H9.24999L9.02299 15.274C9.00999 15.817 8.56599 16.25 8.02299 16.25H3.97599C3.43299 16.25 2.98899 15.817 2.97599 15.274L2.74999 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.75 1.75H3.855C4.365 1.75 4.793 2.133 4.849 2.64L6 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 8.258C12.083 8.253 12.166 8.25 12.25 8.25C14.459 8.25 16.25 10.041 16.25 12.25C16.25 14.459 14.459 16.25 12.25 16.25C12.066 16.25 11.885 16.238 11.708 16.214"
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

export default GlassJuice;
