import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FileFeather({
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
          d="M17.25 10.75C15.5311 12.3187 18.0344 16.858 11.2089 15.5229C12.811 11.3341 16.1319 10.7667 17.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.336 1.75C10.4801 1.75 10.6212 1.78103 10.75 1.83956V5.24999C10.75 5.80199 11.198 6.24999 11.75 6.24999H15.1603C15.2189 6.37883 15.25 6.51978 15.25 6.664V8.80859C12.5212 9.56173 10.8375 11.3827 9.86771 13.0694C9.29847 14.0594 8.93514 15.0143 8.74448 15.7157C8.69108 15.9121 8.64794 16.0916 8.61328 16.25H4.75C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.336Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 6.75H7.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9.75H10.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.16 6.24999H11.75C11.198 6.24999 10.75 5.80199 10.75 5.24999V1.85199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 8.0679V6.6641C15.25 6.399 15.145 6.1441 14.957 5.9571L11.043 2.043C10.855 1.855 10.601 1.75 10.336 1.75H4.75C3.645 1.75 2.75 2.646 2.75 3.75V14.25C2.75 15.354 3.645 16.25 4.75 16.25H7.8738"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 17.25C10.75 17.25 11.432 11.259 17.25 10.75C15.82 12.44 17.25 15.75 13.5 15.75"
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

export default FileFeather;
