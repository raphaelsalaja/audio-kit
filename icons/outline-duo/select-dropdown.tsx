import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SelectDropdown({
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
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.25 4.75H3.75C2.64543 4.75 1.75 5.64543 1.75 6.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V6.75C16.25 5.64543 15.3546 4.75 14.25 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 8.5L12 10.25L13.75 8.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.5 9H7.25"
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

export default SelectDropdown;
