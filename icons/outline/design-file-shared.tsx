import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileShared({
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
          d="M10.5 10C11.6046 10 12.5 9.105 12.5 8C12.5 6.895 11.6046 6 10.5 6C9.3954 6 8.5 6.895 8.5 8C8.5 9.105 9.3954 10 10.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.6 10H5.9C5.4029 10 5 10.403 5 10.9V12.6C5 13.097 5.4029 13.5 5.9 13.5H7.6C8.0971 13.5 8.5 13.097 8.5 12.6V10.9C8.5 10.403 8.0971 10 7.6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.402 7.64801C7.526 7.43101 7.525 7.16199 7.399 6.94699L6.069 4.667C5.818 4.237 5.11 4.239 4.861 4.667L3.531 6.94602C3.405 7.16202 3.403 7.43001 3.528 7.64801C3.652 7.86501 3.885 8 4.135 8H6.794C7.044 8 7.278 7.86501 7.402 7.64801Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 13C14.8284 13 15.5 12.3284 15.5 11.5C15.5 10.6716 14.8284 10 14 10C13.1716 10 12.5 10.6716 12.5 11.5C12.5 12.3284 13.1716 13 14 13Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.25 7.77539V6.66409C14.25 6.39899 14.145 6.14509 13.957 5.95709L10.043 2.043C9.856 1.855 9.601 1.75 9.336 1.75H3.75C2.645 1.75 1.75 2.645 1.75 3.75V14.25C1.75 15.355 2.645 16.25 3.75 16.25H8.4282"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.1011 18H11.899C11.4923 18 11.1085 17.8013 10.8717 17.4683C10.6393 17.1407 10.5787 16.7207 10.7096 16.3453C11.1979 14.943 12.5201 14.0001 14.0001 14.0001C15.4801 14.0001 16.8023 14.943 17.2911 16.3458C17.4215 16.7208 17.3609 17.1407 17.1285 17.4684C16.8917 17.8014 16.5078 18 16.1011 18Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default DesignFileShared;
