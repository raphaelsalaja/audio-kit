import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Connections3({
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
          d="M11.7496 4.24252L8.99969 1.49258L6.24976 4.24252L8.9997 6.99246L11.7496 4.24252Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.24249 6.24976L1.49255 8.99969L4.24249 11.7496L6.99243 8.9997L4.24249 6.24976Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25049 13.7574L9.00043 16.5073L11.7504 13.7574L9.00043 11.0074L6.25049 13.7574Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7574 11.7504L16.5073 9.00043L13.7574 6.25049L11.0074 9.00043L13.7574 11.7504Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.7496 4.24252L8.99969 1.49258L6.24976 4.24252L8.9997 6.99246L11.7496 4.24252Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.24249 6.24976L1.49255 8.99969L4.24249 11.7496L6.99243 8.9997L4.24249 6.24976Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25049 13.7574L9.00043 16.5073L11.7504 13.7574L9.00043 11.0074L6.25049 13.7574Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7574 11.7504L16.5073 9.00043L13.7574 6.25049L11.0074 9.00043L13.7574 11.7504Z"
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

export default Connections3;
