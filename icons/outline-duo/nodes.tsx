import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Nodes({
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
          d="M9 5.75C10.105 5.75 11 4.855 11 3.75C11 2.645 10.105 1.75 9 1.75C7.895 1.75 7 2.645 7 3.75C7 4.855 7.895 5.75 9 5.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M3.80396 14.75C4.90896 14.75 5.80396 13.855 5.80396 12.75C5.80396 11.645 4.90896 10.75 3.80396 10.75C2.69896 10.75 1.80396 11.645 1.80396 12.75C1.80396 13.855 2.69896 14.75 3.80396 14.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.196 14.75C15.301 14.75 16.196 13.855 16.196 12.75C16.196 11.645 15.301 10.75 14.196 10.75C13.091 10.75 12.196 11.645 12.196 12.75C12.196 13.855 13.091 14.75 14.196 14.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M10.998 3.82599C12.8602 4.45429 14.3295 5.93581 14.9409 7.80551"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.87098 10.981C2.48388 9.05459 3.03209 7.041 4.34559 5.5766"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.131 14.443C11.655 15.743 9.63592 16.2743 7.70972 15.8675"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.75C10.105 5.75 11 4.855 11 3.75C11 2.645 10.105 1.75 9 1.75C7.895 1.75 7 2.645 7 3.75C7 4.855 7.895 5.75 9 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.80396 14.75C4.90896 14.75 5.80396 13.855 5.80396 12.75C5.80396 11.645 4.90896 10.75 3.80396 10.75C2.69896 10.75 1.80396 11.645 1.80396 12.75C1.80396 13.855 2.69896 14.75 3.80396 14.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.196 14.75C15.301 14.75 16.196 13.855 16.196 12.75C16.196 11.645 15.301 10.75 14.196 10.75C13.091 10.75 12.196 11.645 12.196 12.75C12.196 13.855 13.091 14.75 14.196 14.75Z"
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

export default Nodes;
