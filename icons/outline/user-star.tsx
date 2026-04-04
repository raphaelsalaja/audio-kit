import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function UserStar({
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
          d="M13.75 10.8185L14.754 12.8535L17 13.1795L15.375 14.7635L15.759 17.0005L13.75 15.9445L11.741 17.0005L12.125 14.7635L10.5 13.1795L12.746 12.8535L13.75 10.8185Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.7936 10.0298C10.2255 9.8543 9.62639 9.7505 8.99999 9.7505C6.44899 9.7505 4.26099 11.2805 3.29099 13.4705C2.92599 14.2955 3.37799 15.2444 4.23799 15.5154C5.42458 15.8894 6.98919 16.2212 8.82729 16.242"
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

export default UserStar;
