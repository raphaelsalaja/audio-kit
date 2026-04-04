import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Fingerprint({
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
          d="M1.8902 11.724C2.12344 11.3741 2.63805 10.4294 2.83051 9.44973C2.88991 9.14734 2.91864 8.7863 2.95029 8.38865C3.04681 7.17585 3.17043 5.62254 4.27382 4.35447C5.73898 2.67063 7.95402 1.05783 11.4903 2.53943C14.7335 3.89826 15.2119 7.42121 14.9454 9.44973C14.9106 9.71486 14.8806 9.96973 14.851 10.221C14.7119 11.4023 14.5821 12.5039 14.0051 14.217C12.6935 15.5126 11.8037 15.9069 9.93474 15.9749L9.89915 15.9642C10.9842 14.1865 13.3146 8.20647 11.3174 6.08865C9.6151 4.28348 7.73281 5.12703 7.00446 5.77446C6.11668 6.43716 6.0445 7.39544 5.95402 8.59659C5.84065 10.1017 5.69855 11.988 3.88724 14.152L3.87465 14.1482C2.5892 13.5334 2.11823 13.0261 1.8902 11.724Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.078 3.462C6.13 2.551 7.502 2 9 2C12.309 2 15 4.691 15 8C15 10.307 14.637 12.373 14.012 14.213"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.90802 11.703C2.94802 10.011 3.00002 8.32 3.00002 8C3.00002 7.088 3.20402 6.223 3.57002 5.448"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.87 10.142C11.592 12.376 10.887 14.302 9.91901 15.948"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.87201 14.14C5.09601 12.661 6.00001 10.666 6.00001 8C6.00001 6.343 7.34301 5 9.00001 5C10.524 5 11.783 6.137 11.975 7.608"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.55103 15.618C7.97503 13.744 9.00003 11.262 9.00003 8"
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

export default Fingerprint;
