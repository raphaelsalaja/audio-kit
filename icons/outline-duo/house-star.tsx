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
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.39453 1.96007C8.75253 1.68807 9.24847 1.68807 9.60547 1.96007L14.8555 5.95031C15.1042 6.13932 15.25 6.4344 15.25 6.74621L14.9512 9.01953C14.7052 8.90475 14.4371 8.84402 14.1592 8.82433C13.4093 8.79681 12.6906 9.08591 12.2227 9.68859L11.9814 10.0724L11.5 11.047L10.4268 11.2032C9.56662 11.3283 8.90183 11.932 8.61035 12.7335C8.21887 13.939 8.88749 14.9504 9.6556 15.7558C9.77672 15.8828 9.69198 16.0447 9.5793 16.1732C9.43886 16.3333 9.22012 16.3872 9.00722 16.3807L4.75 16.2501C3.64504 16.2501 2.75006 15.3551 2.75 14.2501V6.74621C2.75 6.43339 2.8958 6.13932 3.14453 5.95031L8.39453 1.96007Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
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
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HouseStar;
