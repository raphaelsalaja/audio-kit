import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseStar({
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
          d="M15.25 8.34301V6.7461C15.25 6.4341 15.104 6.1389 14.855 5.95L9.605 1.96001C9.247 1.68801 8.752 1.68801 8.395 1.96001L3.145 5.95C2.896 6.139 2.75 6.4341 2.75 6.7461V14.25C2.75 15.354 3.645 16.25 4.75 16.25H9.1188"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HouseStar;
