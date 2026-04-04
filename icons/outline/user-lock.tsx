import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserLock({
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
          d="M15.75 12.7505H11.75C11.198 12.7505 10.75 13.1985 10.75 13.7505V15.2505C10.75 15.8025 11.198 16.2505 11.75 16.2505H15.75C16.302 16.2505 16.75 15.8025 16.75 15.2505V13.7505C16.75 13.1985 16.302 12.7505 15.75 12.7505Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.25 12.7505V11.2505C12.25 10.4225 12.922 9.7505 13.75 9.7505C14.578 9.7505 15.25 10.4225 15.25 11.2505V12.7505"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.51129 9.7966C9.34099 9.7807 9.17499 9.7505 8.99999 9.7505C6.44899 9.7505 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.20879 15.8218 6.45119 16.083 7.87119 16.1839"
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

export default UserLock;
