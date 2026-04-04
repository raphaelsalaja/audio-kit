import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TreePalm({
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
          d="M9 5.489C7.39 4.675 5.404 4.712 3.784 5.768C2.164 6.824 1.327 8.626 1.422 10.427L9 5.489Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.489C10.61 4.675 12.596 4.712 14.216 5.768C15.836 6.824 16.673 8.626 16.578 10.427L9 5.489Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.489C8.822 4.035 7.899 2.713 6.455 2.097C5.011 1.481 3.418 1.731 2.245 2.609L9 5.489Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.489C9.178 4.035 10.101 2.713 11.545 2.097C12.989 1.481 14.582 1.731 15.755 2.609L9 5.489Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 5.489L10 13"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.489C7.39 4.675 5.404 4.712 3.784 5.768C2.164 6.824 1.327 8.626 1.422 10.427L9 5.489Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.489C10.61 4.675 12.596 4.712 14.216 5.768C15.836 6.824 16.673 8.626 16.578 10.427L9 5.489Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.489C8.822 4.035 7.899 2.713 6.455 2.097C5.011 1.481 3.418 1.731 2.245 2.609L9 5.489Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.489C9.178 4.035 10.101 2.713 11.545 2.097C12.989 1.481 14.582 1.731 15.755 2.609L9 5.489Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.329 16.25C14.331 14.321 12.322 13 10 13C7.678 13 5.669 14.321 4.671 16.25H15.329Z"
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

export default TreePalm;
