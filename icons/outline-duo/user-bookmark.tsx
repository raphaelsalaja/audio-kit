import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserBookmark({
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
          d="M17.25 17.25L15 15L12.75 17.25V11.75C12.75 11.198 13.198 10.75 13.75 10.75H16.25C16.802 10.75 17.25 11.198 17.25 11.75V17.25Z"
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
          d="M17.25 17.25L15 15L12.75 17.25V11.75C12.75 11.198 13.198 10.75 13.75 10.75H16.25C16.802 10.75 17.25 11.198 17.25 11.75V17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.2301 9.89089C9.83089 9.80889 9.42329 9.75049 8.99999 9.75049C6.44899 9.75049 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.46299 15.9014 7.08389 16.2495 8.99999 16.2495C9.26039 16.2495 9.50229 16.23 9.74999 16.2163"
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

export default UserBookmark;
