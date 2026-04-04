import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserCloud({
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
          d="M14.5 11.75C13.2297 11.75 12.1711 12.616 11.8553 13.7864C11.7405 13.7627 11.6217 13.75 11.5 13.75C10.5335 13.75 9.75 14.5335 9.75 15.5C9.75 16.4665 10.5335 17.25 11.5 17.25H14.5C16.0188 17.25 17.25 16.0187 17.25 14.5C17.25 12.9813 16.0188 11.75 14.5 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.25C10.5188 7.25 11.75 6.01878 11.75 4.5C11.75 2.98122 10.5188 1.75 9 1.75C7.48122 1.75 6.25 2.98122 6.25 4.5C6.25 6.01878 7.48122 7.25 9 7.25Z"
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
          d="M10.8782 10.0476C10.2859 9.85739 9.65649 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C4.95779 15.7422 5.83108 15.9434 6.80828 16.0769"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 11.75C13.2297 11.75 12.1711 12.616 11.8553 13.7864C11.7405 13.7627 11.6217 13.75 11.5 13.75C10.5335 13.75 9.75 14.5335 9.75 15.5C9.75 16.4665 10.5335 17.25 11.5 17.25H14.5C16.0188 17.25 17.25 16.0187 17.25 14.5C17.25 12.9813 16.0188 11.75 14.5 11.75Z"
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

export default UserCloud;
