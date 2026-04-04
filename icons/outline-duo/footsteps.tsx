import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Footsteps({
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
          d="M11.15 7.42097C11.931 5.24897 13.161 4.08697 14.346 4.26797H14.347C16.078 4.53197 16.394 6.69297 16.201 8.68497C16.0835 9.89811 15.2983 10.9544 14.6533 11.8221C14.2457 12.3705 13.894 12.8436 13.8022 13.2335L10.7979 12.3646C10.7983 12.3634 10.7986 12.3622 10.799 12.361C10.9385 11.8832 10.8949 11.3393 10.8451 10.7175C10.7717 9.80096 10.6847 8.71496 11.15 7.42097Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.85001 4.92097C6.06901 2.74897 4.83901 1.58697 3.65401 1.76797C1.92301 2.03197 1.60601 4.19297 1.79901 6.18497C1.91655 7.39811 2.70168 8.45436 3.3467 9.32211C3.76081 9.87922 4.11717 10.3586 4.20201 10.752C4.20342 10.7585 4.20483 10.765 4.20623 10.7715L7.18875 9.81706C7.06421 9.34991 7.10662 8.82036 7.15491 8.21745C7.22832 7.30096 7.3153 6.21496 6.85001 4.92097Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.65401 1.76797C4.83901 1.58697 6.06901 2.74897 6.85001 4.92097C7.63101 7.09297 6.85601 8.67897 7.20101 9.86097C7.56601 11.111 8.42301 13.113 6.76901 13.637C5.16901 14.144 4.66501 12.896 4.20201 10.752C3.98501 9.74597 1.99201 8.17697 1.79901 6.18497C1.60601 4.19297 1.92301 2.03197 3.65401 1.76797Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.202 10.753L7.201 9.862"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.346 4.26797C13.161 4.08697 11.931 5.24897 11.15 7.42097C10.369 9.59297 11.144 11.179 10.799 12.361C10.434 13.611 9.577 15.613 11.231 16.137C12.831 16.644 13.335 15.396 13.798 13.252C14.015 12.246 16.008 10.677 16.201 8.68497C16.394 6.69297 16.078 4.53197 14.347 4.26797H14.346Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.798 13.253L10.799 12.362"
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

export default Footsteps;
