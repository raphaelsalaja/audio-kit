import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CaretMinimize({
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
          d="M11.707 2.89602C11.421 2.61002 10.993 2.52404 10.617 2.67904C10.242 2.83404 10 3.19705 10 3.60305V6.99905C10 7.55005 10.449 7.99905 11 7.99905H14.396C14.802 7.99905 15.165 7.75704 15.32 7.38204C15.475 7.00704 15.39 6.57901 15.103 6.29201L11.707 2.89602Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.99999 10H3.60399C3.19799 10 2.83499 10.242 2.67999 10.617C2.52499 10.992 2.60999 11.42 2.89699 11.707L6.29299 15.103C6.48499 15.295 6.73899 15.396 6.99899 15.396C7.12799 15.396 7.25799 15.371 7.38299 15.319C7.75799 15.164 7.99999 14.801 7.99999 14.395V10.999C7.99999 10.448 7.55099 10 6.99999 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.38299 2.68001C7.00799 2.52401 6.57999 2.60999 6.29299 2.89699L2.89699 6.29305C2.60999 6.58005 2.52499 7.00801 2.67999 7.38301C2.83499 7.75801 3.19799 8.00002 3.60399 8.00002H6.99999C7.55099 8.00002 7.99999 7.55102 7.99999 7.00002V3.60402C7.99999 3.19802 7.75799 2.83501 7.38299 2.68001Z"
          fill={fill}
        />
        <path
          d="M14.396 10H11C10.449 10 10 10.449 10 11V14.396C10 14.802 10.242 15.165 10.617 15.32C10.742 15.372 10.872 15.397 11.001 15.397C11.261 15.397 11.515 15.295 11.707 15.104L15.103 11.708C15.39 11.421 15.475 10.993 15.32 10.618C15.165 10.243 14.802 10 14.396 10Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CaretMinimize;
