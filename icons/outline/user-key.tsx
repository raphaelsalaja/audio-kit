import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserKey({
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
          d="M9 7.2505C10.5188 7.2505 11.75 6.0195 11.75 4.5005C11.75 2.9815 10.5188 1.7505 9 1.7505C7.4812 1.7505 6.25 2.9815 6.25 4.5005C6.25 6.0195 7.4812 7.2505 9 7.2505Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 16.75C12.3546 16.75 13.25 15.8546 13.25 14.75C13.25 13.6454 12.3546 12.75 11.25 12.75C10.1454 12.75 9.25 13.6454 9.25 14.75C9.25 15.8546 10.1454 16.75 11.25 16.75Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 14.75H17.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.1721 9.874C9.79109 9.8012 9.40229 9.7505 8.99999 9.7505C6.44899 9.7505 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C4.86979 15.7146 5.61059 15.9011 6.43919 16.0374"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 14.75V16.25"
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

export default UserKey;
