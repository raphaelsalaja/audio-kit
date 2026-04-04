import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PizzaSlice({
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
          d="M7.00001 12.75C7.96601 12.75 8.75001 11.967 8.75001 11C8.75001 10.033 7.96601 9.25 7.00001 9.25C6.34101 9.25 5.77301 9.619 5.47501 10.157"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.495 6.69101C14.282 6.69101 14.067 6.63701 13.87 6.52301C10.901 4.80501 7.09899 4.80501 4.13099 6.52301C3.53699 6.86801 2.76999 6.66501 2.42299 6.06701C2.07699 5.47001 2.28099 4.70501 2.87899 4.35901C6.60699 2.20201 11.395 2.20201 15.122 4.35901C15.72 4.70501 15.924 5.47001 15.578 6.06701C15.346 6.46701 14.926 6.69101 14.495 6.69101Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10 9C10.5523 9 11 8.55228 11 8C11 7.44772 10.5523 7 10 7C9.44772 7 9 7.44772 9 8C9 8.55228 9.44772 9 10 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.00001 12.75C7.96601 12.75 8.75001 11.967 8.75001 11C8.75001 10.033 7.96601 9.25 7.00001 9.25C6.34101 9.25 5.77301 9.619 5.47501 10.157"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.495 6.69101C14.282 6.69101 14.067 6.63701 13.87 6.52301C10.901 4.80501 7.09899 4.80501 4.13099 6.52301C3.53699 6.86801 2.76999 6.66501 2.42299 6.06701C2.07699 5.47001 2.28099 4.70501 2.87899 4.35901C6.60699 2.20201 11.395 2.20201 15.122 4.35901C15.72 4.70501 15.924 5.47001 15.578 6.06701C15.346 6.46701 14.926 6.69101 14.495 6.69101Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.474 6.69099L8.132 14.758C8.517 15.426 9.481 15.424 9.865 14.756L14.495 6.69099"
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

export default PizzaSlice;
