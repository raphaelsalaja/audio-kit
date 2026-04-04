import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link2({
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
          d="M1.25 6.75C1.25 5.64543 2.14543 4.75 3.25 4.75H6C7.10457 4.75 8 5.64543 8 6.75V11.25C8 12.3546 7.10457 13.25 6 13.25H3.25C2.14543 13.25 1.25 12.3546 1.25 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10 6.75C10 5.64543 10.8954 4.75 12 4.75H14.75C15.8546 4.75 16.75 5.64543 16.75 6.75V11.25C16.75 12.3546 15.8546 13.25 14.75 13.25H12C10.8954 13.25 10 12.3546 10 11.25V6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.75 11.25C7.75 12.355 6.855 13.25 5.75 13.25H3.25C2.145 13.25 1.25 12.355 1.25 11.25V6.75C1.25 5.645 2.145 4.75 3.25 4.75H5.75C6.855 4.75 7.75 5.645 7.75 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 6.75C10.25 5.645 11.145 4.75 12.25 4.75H14.75C15.855 4.75 16.75 5.645 16.75 6.75V11.25C16.75 12.355 15.855 13.25 14.75 13.25H12.25C11.145 13.25 10.25 12.355 10.25 11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 9H12.25"
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

export default Link2;
