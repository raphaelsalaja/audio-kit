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
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.75 10.75H12.25C11.423 10.75 10.75 11.423 10.75 12.25V13.75C10.75 14.577 11.423 15.25 12.25 15.25H12.75V17.25L14.977 15.25H15.75C16.577 15.25 17.25 14.577 17.25 13.75V12.25C17.25 11.423 16.577 10.75 15.75 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 10.75H12.25C11.423 10.75 10.75 11.423 10.75 12.25V13.75C10.75 14.577 11.423 15.25 12.25 15.25H12.75V17.25L14.977 15.25H15.75C16.577 15.25 17.25 14.577 17.25 13.75V12.25C17.25 11.423 16.577 10.75 15.75 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.49109 9.78857C6.16269 9.97827 4.19509 11.429 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.35269 15.8667 6.80868 16.1731 8.50328 16.2278"
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
