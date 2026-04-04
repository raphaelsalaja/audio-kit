import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderStar({
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
          d="M13.75 6.75H4.25C3.145 6.75 2.25 7.645 2.25 8.75V13.25C2.25 14.355 3.145 15.25 4.25 15.25H8.14587C8.26578 15.25 8.38495 15.2292 8.49474 15.181C8.71169 15.0858 9.05224 14.9127 8.96403 14.7976C8.51771 14.2154 8.37923 13.4441 8.61018 12.7335C8.87493 11.919 9.57919 11.3254 10.4268 11.2023L11.5018 11.0463L11.9822 10.0725C12.3612 9.30433 13.1435 8.81799 14 8.81799C14.4204 8.81799 14.832 8.9375 15.1719 9.17578C15.8813 9.6069 15.75 8.875 15.75 8.75C15.75 7.645 14.855 6.75 13.75 6.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 11.068L15.004 13.103L17.25 13.429L15.625 15.013L16.009 17.25L14 16.194L11.991 17.25L12.375 15.013L10.75 13.429L12.996 13.103L14 11.068Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.201C6.808 2.75 7.381 3.02499 7.761 3.49799L8.364 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.75C15.75 7.646 14.855 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.3663"
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

export default FolderStar;
