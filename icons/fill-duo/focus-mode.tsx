import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FocusMode({
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
          d="M6.68263 2.08733C6.85421 2.46433 6.68768 2.90905 6.31068 3.08064C4.06136 4.10436 2.5 6.37069 2.5 9C2.5 11.6293 4.06136 13.8957 6.31068 14.9194C6.68768 15.091 6.85421 15.5357 6.68263 15.9127C6.51104 16.2897 6.06632 16.4562 5.68932 16.2846C2.92464 15.0263 1 12.2387 1 9C1 5.76131 2.92464 2.97366 5.68932 1.71538C6.06632 1.5438 6.51104 1.71033 6.68263 2.08733Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M11.3174 2.08733C11.489 1.71033 11.9337 1.5438 12.3107 1.71538C15.0754 2.97366 17 5.76131 17 9C17 12.2387 15.0754 15.0263 12.3107 16.2846C11.9337 16.4562 11.489 16.2897 11.3174 15.9127C11.1458 15.5357 11.3123 15.091 11.6893 14.9194C13.9386 13.8957 15.5 11.6293 15.5 9C15.5 6.37069 13.9386 4.10436 11.6893 3.08064C11.3123 2.90905 11.1458 2.46433 11.3174 2.08733Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5 9C5 6.79079 6.79079 5 9 5C11.2092 5 13 6.79079 13 9C13 11.2092 11.2092 13 9 13C6.79079 13 5 11.2092 5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default FocusMode;
