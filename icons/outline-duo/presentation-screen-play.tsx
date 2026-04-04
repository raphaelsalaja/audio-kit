import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PresentationScreenPlay({
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
          d="M3.75 2.75H14.25C15.3546 2.75 16.25 3.64543 16.25 4.75V11.25C16.25 12.3546 15.3546 13.25 14.25 13.25H3.75C2.64543 13.25 1.75 12.3546 1.75 11.25V4.75C1.75 3.64543 2.64543 2.75 3.75 2.75ZM8.397 5.79699L11.537 7.62899V7.62699C11.821 7.79299 11.821 8.20399 11.537 8.36999L8.397 10.202C8.11 10.37 7.75 10.163 7.75 9.83099V6.16799C7.75 5.83699 8.11 5.62999 8.397 5.79699Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.75 16.25L6.75 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 16.25L11.25 13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.25 2.75H3.75C2.64543 2.75 1.75 3.64543 1.75 4.75V11.25C1.75 12.3546 2.64543 13.25 3.75 13.25H14.25C15.3546 13.25 16.25 12.3546 16.25 11.25V4.75C16.25 3.64543 15.3546 2.75 14.25 2.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.75V1.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.537 7.62899L8.397 5.79699C8.11 5.62999 7.75 5.83699 7.75 6.16799V9.83099C7.75 10.163 8.11 10.37 8.397 10.202L11.537 8.36999C11.821 8.20399 11.821 7.79299 11.537 7.62699V7.62899Z"
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

export default PresentationScreenPlay;
