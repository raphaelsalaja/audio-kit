import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgFlag({
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
          d="M13.25 10C12.5596 10 12 10.5599 12 11.25V17.25C12 17.6642 12.3358 18 12.75 18C13.1642 18 13.5 17.6642 13.5 17.25V14.5H16.75C17.4404 14.5 18 13.9401 18 13.25V11.25C18 10.5599 17.4404 10 16.75 10H13.25Z"
          fill={fill}
        />
        <path
          d="M1.00002 9C1.00002 4.58179 4.58181 1 9.00002 1C13.2537 1 16.732 4.31993 16.9853 8.50992C16.9077 8.50336 16.8292 8.5 16.75 8.5H13.25C11.7309 8.5 10.5 9.73169 10.5 11.25V16.8596C10.0141 16.9518 9.51271 17 9.00002 17C8.49599 17 8.00127 16.9526 7.52247 16.8619C6.63844 16.6947 5.91986 16.4026 5.39182 16.1345C4.98601 16.3421 4.4872 16.5366 3.96902 16.6876C3.26319 16.8932 2.44913 17.0391 1.70928 16.9989C1.41385 16.9828 1.15547 16.7946 1.04964 16.5183C0.943812 16.242 1.01031 15.9293 1.2194 15.72C1.55932 15.3797 1.85824 14.8052 2.01741 14.1997C2.09518 13.9039 2.13238 13.6268 2.13177 13.3972C2.13116 13.1672 2.09295 13.0343 2.06488 12.977C1.39246 11.8068 1.00002 10.4506 1.00002 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default MsgFlag;
