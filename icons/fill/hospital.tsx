import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hospital({
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
          d="M13.75 1.5H4.25C3.2852 1.5 2.5 2.2852 2.5 3.25V15.75C2.5 16.1641 2.8359 16.5 3.25 16.5H7V11.75C7 11.3359 7.3359 11 7.75 11H10.25C10.6641 11 11 11.3359 11 11.75V16.5H14.75C15.1641 16.5 15.5 16.1641 15.5 15.75V3.25C15.5 2.2852 14.7148 1.5 13.75 1.5ZM9 4C9.41421 4 9.75 4.33579 9.75 4.75V6H11C11.4142 6 11.75 6.33579 11.75 6.75C11.75 7.16421 11.4142 7.5 11 7.5H9.75V8.75C9.75 9.16421 9.41421 9.5 9 9.5C8.58579 9.5 8.25 9.16421 8.25 8.75V7.5H7C6.58579 7.5 6.25 7.16421 6.25 6.75C6.25 6.33579 6.58579 6 7 6H8.25V4.75C8.25 4.33579 8.58579 4 9 4Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 15.75C1 15.3358 1.33579 15 1.75 15H16.25C16.6642 15 17 15.3358 17 15.75C17 16.1642 16.6642 16.5 16.25 16.5H1.75C1.33579 16.5 1 16.1642 1 15.75Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Hospital;
