import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Chair4({
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
          d="M14.882 7.61642L15.204 7.01102C15.332 6.64902 15.35 6.25502 15.246 5.88502C14 1.41702 13.686 0.765015 8.99999 0.765015C4.31399 0.765015 3.99998 1.41702 2.75298 5.88502C2.64998 6.25502 2.66801 6.64902 2.79501 7.01102L2.93688 7.38982C2.99998 7.47452 3.28498 7.48521 3.41198 7.40211C4.35598 6.78491 5.57999 6.50002 6.99999 6.50002H11C12.424 6.50002 13.648 6.78851 14.591 7.40691C14.69 7.47221 14.788 7.54222 14.882 7.61642Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M9 11.25V17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15L5.75 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 15L12.25 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 11.25H13C13.552 11.25 14 10.814 14 10.25C14 9.686 13.285 8.75 11 8.75H7C4.715 8.75 4 9.678 4 10.25C4 10.814 4.448 11.25 5 11.25H9Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.2147 6.9556C15.326 6.6084 15.3449 6.23681 15.2461 5.88501C14.0001 1.41701 13.6861 0.765106 9.00009 0.765106C4.31409 0.765106 4.00011 1.41701 2.75311 5.88501C2.65521 6.23681 2.67411 6.60911 2.78461 6.95601"
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

export default Chair4;
