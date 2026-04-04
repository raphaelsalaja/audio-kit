import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleLogout({
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
          d="M11.25 2.75C7.8039 2.75 5 5.5539 5 9C5 12.4461 7.8039 15.25 11.25 15.25C14.6961 15.25 17.5 12.4461 17.5 9C17.5 5.5539 14.6961 2.75 11.25 2.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.25 8.24999H2.56049L3.78019 7.03026C4.07319 6.73726 4.07319 6.26267 3.78019 5.96977C3.48719 5.67687 3.01259 5.67677 2.71969 5.96977L0.219689 8.46977C-0.073311 8.76277 -0.073311 9.23736 0.219689 9.53026L2.71969 12.0303C2.86619 12.1768 3.05759 12.25 3.24999 12.25C3.44239 12.25 3.6338 12.1768 3.7803 12.0303C4.0733 11.7373 4.0733 11.2627 3.7803 10.9698L2.56059 9.75011H11.2501C11.6642 9.75011 12.0001 9.41421 12.0001 9.00011C12.0001 8.58601 11.6641 8.24999 11.25 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleLogout;
