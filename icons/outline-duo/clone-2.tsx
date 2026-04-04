import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clone2({
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
          d="M13.75 5.75H7.75C6.64543 5.75 5.75 6.64543 5.75 7.75V13.75C5.75 14.8546 6.64543 15.75 7.75 15.75H13.75C14.8546 15.75 15.75 14.8546 15.75 13.75V7.75C15.75 6.64543 14.8546 5.75 13.75 5.75Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 5.75H7.75C6.64543 5.75 5.75 6.64543 5.75 7.75V13.75C5.75 14.8546 6.64543 15.75 7.75 15.75H13.75C14.8546 15.75 15.75 14.8546 15.75 13.75V7.75C15.75 6.64543 14.8546 5.75 13.75 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 12.25H4.25C3.1454 12.25 2.25 11.3546 2.25 10.25V4.25C2.25 3.1454 3.1454 2.25 4.25 2.25H10.25C11.3546 2.25 12.25 3.1454 12.25 4.25V5.75"
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

export default Clone2;
