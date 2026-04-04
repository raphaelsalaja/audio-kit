import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ObjIncreaseSizeY({
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
          d="M13.25 5.75H4.75C3.645 5.75 2.75 6.645 2.75 7.75V10.25C2.75 11.355 3.645 12.25 4.75 12.25H13.25C14.355 12.25 15.25 11.355 15.25 10.25V7.75C15.25 6.645 14.355 5.75 13.25 5.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.06001 3.07501C7.17001 3.33301 7.41502 3.5 7.68402 3.5H10.316C10.585 3.5 10.83 3.33301 10.94 3.07501C11.05 2.81701 11.006 2.51303 10.827 2.30103L9.51201 0.742981C9.38201 0.588981 9.19601 0.5 9.00001 0.5C8.80401 0.5 8.61801 0.589004 8.48901 0.742004L7.17302 2.30103C6.99502 2.51203 6.94901 2.81601 7.06001 3.07501Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M7.06001 14.925C7.17001 14.667 7.41502 14.5 7.68402 14.5H10.316C10.585 14.5 10.83 14.667 10.94 14.925C11.05 15.183 11.006 15.487 10.827 15.699L9.51101 17.258C9.38101 17.412 9.195 17.501 8.999 17.501C8.803 17.501 8.61702 17.412 8.48802 17.259L7.17201 15.7C6.99401 15.489 6.94901 15.184 7.06001 14.925Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ObjIncreaseSizeY;
