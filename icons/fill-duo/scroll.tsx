import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Scroll({
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
          d="M6.2082 16.5C6.07484 16.5 5.94467 16.4884 5.81853 16.4661C5.71587 16.4883 5.6093 16.5 5.5 16.5C4.67157 16.5 4 15.8284 4 15V3L3.99995 2.98738C3.99317 2.16477 3.32422 1.5 2.5 1.5H12.75C13.9922 1.5 15 2.50779 15 3.75V15.75C15 16.1642 14.6642 16.5 14.25 16.5H6.2082Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1 3C1 2.17157 1.67157 1.5 2.5 1.5C3.32843 1.5 4 2.17157 4 3V7.5H2.75C1.7835 7.5 1 6.7165 1 5.75V3Z"
          fill={fill}
        />
        <path
          d="M14.75 16.5H5.5C6.32843 16.5 7 15.8284 7 15V13.25C7 12.5596 7.55949 12 8.24985 12H15.75C16.4402 12 17 12.5598 17 13.25V14.25C17 15.4922 15.9922 16.5 14.75 16.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Scroll;
