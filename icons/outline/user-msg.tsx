import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserMsg({
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
          d="M9 7.2505C10.519 7.2505 11.75 6.0195 11.75 4.5005C11.75 2.9815 10.519 1.7505 9 1.7505C7.481 1.7505 6.25 2.9815 6.25 4.5005C6.25 6.0195 7.481 7.2505 9 7.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 10.7505H12.25C11.423 10.7505 10.75 11.4235 10.75 12.2505V13.7505C10.75 14.5775 11.423 15.2505 12.25 15.2505H12.75V17.2505L14.977 15.2505H15.75C16.577 15.2505 17.25 14.5775 17.25 13.7505V12.2505C17.25 11.4235 16.577 10.7505 15.75 10.7505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.49109 9.7886C6.16269 9.9783 4.19509 11.429 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.35269 15.8667 6.80868 16.1731 8.50328 16.2278"
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

export default UserMsg;
