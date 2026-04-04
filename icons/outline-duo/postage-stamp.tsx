import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PostageStamp({
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
          d="M15.75 10.342C15.169 10.548 14.75 11.098 14.75 11.75C14.75 12.402 15.169 12.951 15.75 13.158V14.75C15.75 15.302 15.302 15.75 14.75 15.75H13.158C12.952 15.169 12.402 14.75 11.75 14.75C11.098 14.75 10.549 15.169 10.342 15.75H7.658C7.452 15.169 6.902 14.75 6.25 14.75C5.598 14.75 5.049 15.169 4.842 15.75H3.25C2.698 15.75 2.25 15.302 2.25 14.75V13.158C2.831 12.952 3.25 12.402 3.25 11.75C3.25 11.098 2.831 10.549 2.25 10.342V7.658C2.831 7.452 3.25 6.902 3.25 6.25C3.25 5.598 2.831 5.049 2.25 4.842V3.25C2.25 2.698 2.698 2.25 3.25 2.25H4.842C5.048 2.831 5.598 3.25 6.25 3.25C6.902 3.25 7.451 2.831 7.658 2.25H10.342C10.548 2.831 11.098 3.25 11.75 3.25C12.402 3.25 12.951 2.831 13.158 2.25H14.75C15.302 2.25 15.75 2.698 15.75 3.25V4.842C15.169 5.048 14.75 5.598 14.75 6.25C14.75 6.902 15.169 7.451 15.75 7.658V10.342ZM5.75 5.75H12.25V12.25H5.75V5.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.25 5.75H5.75V12.25H12.25V5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.75 11.75C14.75 11.098 15.169 10.548 15.75 10.342V7.658C15.169 7.451 14.75 6.902 14.75 6.25C14.75 5.598 15.169 5.048 15.75 4.842V3.25C15.75 2.698 15.302 2.25 14.75 2.25H13.158C12.951 2.831 12.402 3.25 11.75 3.25C11.098 3.25 10.548 2.831 10.342 2.25H7.658C7.451 2.831 6.902 3.25 6.25 3.25C5.598 3.25 5.048 2.831 4.842 2.25H3.25C2.698 2.25 2.25 2.698 2.25 3.25V4.842C2.831 5.049 3.25 5.598 3.25 6.25C3.25 6.902 2.831 7.452 2.25 7.658V10.342C2.831 10.549 3.25 11.098 3.25 11.75C3.25 12.402 2.831 12.952 2.25 13.158V14.75C2.25 15.302 2.698 15.75 3.25 15.75H4.842C5.049 15.169 5.598 14.75 6.25 14.75C6.902 14.75 7.452 15.169 7.658 15.75H10.342C10.549 15.169 11.098 14.75 11.75 14.75C12.402 14.75 12.952 15.169 13.158 15.75H14.75C15.302 15.75 15.75 15.302 15.75 14.75V13.158C15.169 12.951 14.75 12.402 14.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.74899 11.216C6.98399 9.855 8.76699 9 10.75 9C11.266 9 11.768 9.058 12.25 9.167"
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

export default PostageStamp;
