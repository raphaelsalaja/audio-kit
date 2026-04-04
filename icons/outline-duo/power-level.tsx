import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PowerLevel({
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
          d="M7.22222 1.96891L7.97416 4.87511C6.3621 5.276 5.11087 6.59947 4.81599 8.25H1.78699C2.09821 5.19136 4.30969 2.70105 7.22222 1.96891Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M7.30899 14.952C7.05899 14.018 7.38499 8.462 7.38499 8.462C7.38499 8.462 10.44 13.114 10.69 14.048C10.94 14.982 10.385 15.941 9.45099 16.191C8.51699 16.441 7.55899 15.886 7.30899 14.952Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.954 4.883L7.215 1.973"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.30899 14.952C7.05899 14.018 7.38499 8.462 7.38499 8.462C7.38499 8.462 10.44 13.114 10.69 14.048C10.94 14.982 10.385 15.941 9.45099 16.191C8.51699 16.441 7.55899 15.886 7.30899 14.952Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99999 4.75C11.087 4.75 12.828 6.263 13.184 8.25H16.213C15.842 4.594 12.754 1.75 8.99999 1.75C5.24599 1.75 2.15899 4.594 1.78699 8.25H4.81599C5.17099 6.263 6.91199 4.75 8.99999 4.75Z"
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

export default PowerLevel;
