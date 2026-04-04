import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceEvil({
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
          d="M5 2.953C4.56 2.877 3.89699 2.706 3.18799 2.292C2.31499 1.782 1.78101 1.143 1.50101 0.75C1.38501 1.272 1.21301 2.395 1.64701 3.688C1.92601 4.52 2.354 5.116 2.663 5.479L5 2.953Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 2.953C13.44 2.877 14.103 2.706 14.812 2.292C15.685 1.782 16.219 1.143 16.499 0.75C16.615 1.272 16.787 2.395 16.353 3.688C16.074 4.52 15.646 5.116 15.337 5.479L13 2.953Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M13 2.953C13.44 2.877 14.103 2.706 14.812 2.292C15.685 1.782 16.219 1.143 16.5 0.75C16.616 1.272 16.788 2.395 16.354 3.688C16.075 4.52 15.647 5.116 15.338 5.479"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5 2.953C4.56 2.877 3.89699 2.706 3.18799 2.292C2.31499 1.782 1.78101 1.143 1.50101 0.75C1.38501 1.272 1.21301 2.395 1.64701 3.688C1.92601 4.52 2.354 5.116 2.663 5.479"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 16.25C13.004 16.25 16.25 13.0041 16.25 9C16.25 4.9959 13.004 1.75 9 1.75C4.996 1.75 1.75 4.9959 1.75 9C1.75 13.0041 4.996 16.25 9 16.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 11.758C10.778 12.504 9.946 13 9 13C8.054 13 7.222 12.504 6.75 11.758"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 10C6.552 10 7 9.5523 7 9C7 8.4477 6.552 8 6 8C5.448 8 5 8.4477 5 9C5 9.5523 5.448 10 6 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12 10C12.552 10 13 9.5523 13 9C13 8.4477 12.552 8 12 8C11.448 8 11 8.4477 11 9C11 9.5523 11.448 10 12 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M4.5 7.5L7.25 8.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 7.5L10.75 8.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default FaceEvil;
