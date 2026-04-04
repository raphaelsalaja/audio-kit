import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Satellite({
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
          d="M7.25 13.75C5.593 13.75 4.25 12.407 4.25 10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.25 16.75C3.936 16.75 1.25 14.064 1.25 10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.04307 11.043L6.95707 9.957C6.56607 9.566 6.56607 8.933 6.95707 8.543L13.1461 2.354C13.7681 1.732 14.7671 1.56999 15.4851 2.07699C16.4001 2.72199 16.4861 4.01399 15.7231 4.77699L9.45707 11.043C9.06607 11.434 8.43307 11.434 8.04307 11.043Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.00002 5.006L7.65201 4.29801C8.04301 3.90801 8.04301 3.27401 7.65201 2.88401L6.06102 1.29301C5.67102 0.902006 5.03702 0.902006 4.64702 1.29301L3.99501 2.00001C3.60501 2.39101 3.60501 3.024 3.99501 3.415L5.58602 5.006C5.97702 5.396 6.61002 5.396 7.00002 5.006Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.375 4.575L9.14999 6.35001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.994 12.414L14.585 14.005C14.976 14.395 15.609 14.395 16 14.005L16.707 13.353C17.098 12.963 17.098 12.329 16.707 11.939L15.116 10.348C14.726 9.95701 14.092 9.95701 13.702 10.348L12.994 11C12.604 11.39 12.604 12.023 12.994 12.414Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.65 8.85001L13.425 10.625"
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

export default Satellite;
