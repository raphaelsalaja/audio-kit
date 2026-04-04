import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Judge({
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
          d="M6.5 3C6.5 1.6189 7.6189 0.5 9 0.5C10.3811 0.5 11.5 1.6189 11.5 3C11.5 4.3811 10.3811 5.5 9 5.5C7.6189 5.5 6.5 4.3811 6.5 3Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M2.75 11C2.33579 11 2 11.3358 2 11.75C2 12.1642 2.33579 12.5 2.75 12.5H4V17.25C4 17.6642 4.33579 18 4.75 18H13.25C13.6642 18 14 17.6642 14 17.25V12.5H15.25C15.6642 12.5 16 12.1642 16 11.75C16 11.3358 15.6642 11 15.25 11H2.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 6.5C6.51479 6.5 4.5 8.51479 4.5 11H13.5C13.5 8.51479 11.4852 6.5 9 6.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Judge;
