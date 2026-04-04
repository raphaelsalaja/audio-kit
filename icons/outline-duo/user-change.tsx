import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserChange({
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
          d="M4.5 12C5.4665 12 6.25 11.2165 6.25 10.25C6.25 9.2835 5.4665 8.5 4.5 8.5C3.5335 8.5 2.75 9.2835 2.75 10.25C2.75 11.2165 3.5335 12 4.5 12Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.5 4.755C14.4665 4.755 15.25 3.9715 15.25 3.00501C15.25 2.03851 14.4665 1.255 13.5 1.255C12.5335 1.255 11.75 2.03851 11.75 3.00501C11.75 3.9715 12.5335 4.755 13.5 4.755Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.5 12C5.4665 12 6.25 11.2165 6.25 10.25C6.25 9.2835 5.4665 8.5 4.5 8.5C3.5335 8.5 2.75 9.2835 2.75 10.25C2.75 11.2165 3.5335 12 4.5 12Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M1.14499 16.75C1.57499 15.304 2.91499 14.25 4.49999 14.25C6.08499 14.25 7.42499 15.304 7.85499 16.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 4.755C14.4665 4.755 15.25 3.9715 15.25 3.00501C15.25 2.03851 14.4665 1.255 13.5 1.255C12.5335 1.255 11.75 2.03851 11.75 3.00501C11.75 3.9715 12.5335 4.755 13.5 4.755Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.145 9.505C10.575 8.059 11.915 7.005 13.5 7.005C15.085 7.005 16.425 8.059 16.855 9.505"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 2.75H5.25C3.869 2.75 2.75 3.869 2.75 5.25V6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.75 0.75L7.75 2.75L5.75 4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 15.25H12.75C14.131 15.25 15.25 14.131 15.25 12.75V12"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 17.25L10.25 15.25L12.25 13.25"
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

export default UserChange;
