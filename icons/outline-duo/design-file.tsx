import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFile({
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
          d="M4.75 16.25C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.336C10.601 1.75 10.856 1.855 11.043 2.043L14.957 5.957C15.145 6.145 15.25 6.399 15.25 6.664V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.5 10C12.6046 10 13.5 9.10457 13.5 8C13.5 6.89543 12.6046 6 11.5 6C10.3954 6 9.5 6.89543 9.5 8C9.5 9.10457 10.3954 10 11.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.6 10H6.9C6.40294 10 6 10.4029 6 10.9V12.6C6 13.0971 6.40294 13.5 6.9 13.5H8.6C9.09706 13.5 9.5 13.0971 9.5 12.6V10.9C9.5 10.4029 9.09706 10 8.6 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M8.402 7.648C8.526 7.431 8.525 7.162 8.399 6.947L7.069 4.667C6.818 4.237 6.11 4.239 5.861 4.667L4.531 6.946C4.405 7.162 4.403 7.43 4.528 7.648C4.652 7.865 4.885 8 5.135 8H7.794C8.044 8 8.277 7.865 8.401 7.648H8.402Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M4.75 16.25C3.645 16.25 2.75 15.355 2.75 14.25V3.75C2.75 2.645 3.645 1.75 4.75 1.75H10.336C10.601 1.75 10.856 1.855 11.043 2.043L14.957 5.957C15.145 6.145 15.25 6.399 15.25 6.664V14.25C15.25 15.355 14.355 16.25 13.25 16.25H4.75Z"
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

export default DesignFile;
