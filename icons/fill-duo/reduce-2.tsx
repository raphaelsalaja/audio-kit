import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Reduce2({
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
          d="M2.75 8H15.25C15.6641 8 16 7.6641 16 7.25C16 6.8359 15.6641 6.5 15.25 6.5H2.75C2.3359 6.5 2 6.8359 2 7.25C2 7.6641 2.3359 8 2.75 8Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 10H2.75C2.3359 10 2 10.3359 2 10.75C2 11.1641 2.3359 11.5 2.75 11.5H15.25C15.6641 11.5 16 11.1641 16 10.75C16 10.3359 15.6641 10 15.25 10Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M8.4146 4.71875C8.5567 4.89645 8.77199 5 8.99999 5C9.22799 5 9.44338 4.89645 9.58538 4.71875L11.5854 2.21875C11.7656 1.99315 11.8007 1.68509 11.6757 1.42529C11.5512 1.16499 11.288 1 10.9999 1H6.9999C6.7118 1 6.44859 1.16499 6.32409 1.42529C6.19909 1.68509 6.23429 1.99315 6.41439 2.21875L8.4146 4.71875Z"
          fill={fill}
        />
        <path
          d="M9.58537 13.2813C9.30117 12.9258 8.69868 12.9258 8.41448 13.2813L6.41448 15.7813C6.23428 16.0069 6.19917 16.3149 6.32417 16.5747C6.44867 16.835 6.71189 17 6.99999 17H11C11.2881 17 11.5513 16.835 11.6758 16.5747C11.8008 16.3149 11.7656 16.0069 11.5855 15.7813L9.58537 13.2813Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Reduce2;
