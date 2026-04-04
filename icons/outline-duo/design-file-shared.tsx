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
          d="M1.75 14.25C1.75 15.355 2.645 16.25 3.75 16.25H9.1731C9.198 16.116 9.24739 15.983 9.293 15.8521C9.69559 14.6964 10.4954 13.7573 11.5078 13.1706C11.1871 12.6931 11 12.1184 11 11.5C11 9.84317 12.3432 8.5 14 8.5C14.0842 8.5 14.1676 8.50347 14.25 8.51027V6.664C14.25 6.399 14.145 6.145 13.957 5.957L10.043 2.043C9.856 1.855 9.601 1.75 9.336 1.75H3.75C2.645 1.75 1.75 2.645 1.75 3.75V14.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M10.4779 9.95587C11.5703 9.95587 12.4559 9.07075 12.4559 7.97794C12.4559 6.88513 11.5703 6 10.4779 6C9.38552 6 8.5 6.88513 8.5 7.97794C8.5 9.07075 9.38552 9.95587 10.4779 9.95587Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.6 10H5.9C5.4029 10 5 10.403 5 10.9V12.6C5 13.097 5.4029 13.5 5.9 13.5H7.6C8.0971 13.5 8.5 13.097 8.5 12.6V10.9C8.5 10.403 8.0971 10 7.6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.402 7.64804C7.526 7.43104 7.525 7.16202 7.399 6.94702L6.069 4.66703C5.818 4.23703 5.11 4.23903 4.861 4.66703L3.531 6.94605C3.405 7.16205 3.403 7.43004 3.528 7.64804C3.652 7.86504 3.885 8.00003 4.135 8.00003H6.794C7.044 8.00003 7.278 7.86504 7.402 7.64804Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14 13C14.8284 13 15.5 12.3284 15.5 11.5C15.5 10.6716 14.8284 10 14 10C13.1716 10 12.5 10.6716 12.5 11.5C12.5 12.3284 13.1716 13 14 13Z"
          fill={fill}
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
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default DesignFileShared;
