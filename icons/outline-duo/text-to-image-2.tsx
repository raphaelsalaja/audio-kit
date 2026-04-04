import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextToImage2({
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
          d="M8.75 6C7.64543 6 6.75 6.89543 6.75 8V14.25C6.75 15.106 7.28771 15.8363 8.04377 16.1217L13.2003 11.032C13.59 10.6472 14.2168 10.6476 14.6061 11.0328L17.25 13.6487V8C17.25 6.89543 16.3546 6 15.25 6H8.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.5 6.5V4.75C12.5 3.369 11.381 2.25 10 2.25H9.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 5.25L12.5 7L11 5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10 10C9.449 10 9 9.551 9 9C9 8.449 9.449 8 10 8C10.551 8 11 8.449 11 9C11 9.551 10.551 10 10 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.10101 16.142L13.206 11.043C13.597 10.652 14.23 10.652 14.62 11.043L17.25 13.673"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.25 1.25V7.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 1.25H0.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.74301 13.769L3.79701 13.454L3.48101 12.507C3.37901 12.201 2.87201 12.201 2.77001 12.507L2.45401 13.454L1.50801 13.769C1.35501 13.82 1.25101 13.963 1.25101 14.125C1.25101 14.287 1.35501 14.43 1.50801 14.481L2.45401 14.796L2.77001 15.743C2.82101 15.896 2.96401 15.999 3.12501 15.999C3.28601 15.999 3.43001 15.895 3.48001 15.743L3.79601 14.796L4.74201 14.481C4.89501 14.43 4.99901 14.287 4.99901 14.125C4.99901 13.963 4.89601 13.82 4.74301 13.769Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M1.75 11C2.16421 11 2.5 10.6642 2.5 10.25C2.5 9.83579 2.16421 9.5 1.75 9.5C1.33579 9.5 1 9.83579 1 10.25C1 10.6642 1.33579 11 1.75 11Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.3585 6.08369C16.8968 6.44219 17.251 7.0549 17.251 7.75V14.25C17.251 15.355 16.356 16.25 15.251 16.25H8.75101C7.64601 16.25 6.75101 15.355 6.75101 14.25V7.75C6.75101 6.7141 7.5376 5.8627 8.5464 5.7603"
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

export default TextToImage2;
