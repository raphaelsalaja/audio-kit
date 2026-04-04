import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Space3d({
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
          d="M3.02643 12.4871L9.00778 8.98338L14.9861 12.4672C14.8139 12.7675 14.5639 13.0232 14.254 13.203L10.004 15.668C9.38299 16.028 8.61799 16.028 7.99699 15.668L3.74699 13.203C3.44401 13.0272 3.19818 12.7788 3.02643 12.4871Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.017 12.47L9 9L14.983 12.47"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 2.062V9"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.473V6.527C15.25 5.814 14.87 5.155 14.253 4.797L10.003 2.332C9.382 1.972 8.617 1.972 7.996 2.332L3.747 4.797C3.13 5.155 2.75 5.814 2.75 6.527V11.473C2.75 12.186 3.13 12.845 3.747 13.203L7.997 15.668C8.618 16.028 9.383 16.028 10.004 15.668L14.254 13.203C14.871 12.845 15.251 12.186 15.251 11.473H15.25Z"
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

export default Space3d;
