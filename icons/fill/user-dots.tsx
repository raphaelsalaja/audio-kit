import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserDots({
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
          d="M13 16C12.449 16 12 15.552 12 15C12 14.448 12.449 14 13 14C13.551 14 14 14.448 14 15C14 15.552 13.551 16 13 16Z"
          fill={secondaryfill}
        />
        <path
          d="M10 16C9.449 16 9 15.552 9 15C9 14.448 9.449 14 10 14C10.551 14 11 14.448 11 15C11 15.552 10.551 16 10 16Z"
          fill={secondaryfill}
        />
        <path
          d="M16 16C15.449 16 15 15.552 15 15C15 14.448 15.449 14 16 14C16.551 14 17 14.448 17 15C17 15.552 16.551 16 16 16Z"
          fill={secondaryfill}
        />
        <path
          d="M8.99999 9C6.14167 9 3.69058 10.7157 2.60517 13.1674C2.05162 14.4186 2.74425 15.8317 4.01259 16.2313C5.18495 16.6008 6.70444 16.9371 8.49007 16.9922C7.88886 16.5357 7.5 15.8134 7.5 15C7.5 13.6186 8.62154 12.5 10 12.5H15.0554C13.8476 10.41 11.5911 9 8.99999 9Z"
          fill={fill}
        />
        <path
          d="M9 7.50049C10.7952 7.50049 12.25 6.04543 12.25 4.25049C12.25 2.45554 10.7952 1.00049 9 1.00049C7.20482 1.00049 5.75 2.45554 5.75 4.25049C5.75 6.04543 7.20482 7.50049 9 7.50049Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default UserDots;
