import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stamp({
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
          d="M15 15.25C15 15.6642 14.6642 16 14.25 16H3.75C3.33579 16 3 15.6642 3 15.25V14H15V15.25Z"
          fill={fill}
        />
        <path
          d="M7.17652 9H10.8236L11.3334 3.56234C11.4622 2.18764 10.3807 1 9.00002 1C7.61995 1 6.5389 2.18694 6.6675 3.561L7.17652 9Z"
          fill={fill}
        />
        <path
          d="M14.3232 9H3.67682C2.3361 9 1.29289 10.1652 1.44049 11.4978L1.64234 13.3326C1.68443 13.7125 2.00553 14 2.38777 14H9.00001H15.6094C15.9916 14 16.3127 13.7125 16.3548 13.3326L16.5595 11.4978C16.7071 10.1652 15.6641 9 14.3232 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Stamp;
