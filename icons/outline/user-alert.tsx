import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserAlert({
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
          d="M9 7.25049C10.519 7.25049 11.75 6.01949 11.75 4.50049C11.75 2.98149 10.519 1.7505 9 1.7505C7.481 1.7505 6.25 2.98149 6.25 4.50049C6.25 6.01949 7.481 7.25049 9 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.06249 9.7551C9.04149 9.7541 9.02119 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5157C4.85388 15.7105 5.59288 15.8822 6.39848 16.0162"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 16.25H16.183C16.9711 16.25 17.4495 15.3808 17.0278 14.7149L14.0948 10.0839C13.7022 9.46398 12.7978 9.46398 12.4052 10.0839L9.47217 14.7149C9.05047 15.3807 9.52888 16.25 10.317 16.25H10.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 12.75V14.75"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.25 17.5C13.6642 17.5 14 17.1642 14 16.75C14 16.3358 13.6642 16 13.25 16C12.8358 16 12.5 16.3358 12.5 16.75C12.5 17.1642 12.8358 17.5 13.25 17.5Z"
          fill={secondaryfill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default UserAlert;
