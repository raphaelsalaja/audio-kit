import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BatteryAlert({
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
          d="M13.75 4.25C14.8546 4.25 15.75 5.14543 15.75 6.25V11.75C15.75 12.0785 14.901 13.5617 14.7168 13.0828C14.6686 12.9575 14.612 12.8333 14.5459 12.7109L14.4287 12.5107L11.4961 7.87988C10.2974 5.98748 7.63545 5.87358 6.25586 7.53418L6.00391 7.87988L3.07129 12.5107C2.95189 12.6993 2.85497 12.8929 2.77892 13.0892C2.55682 13.6625 1.75 12.0624 1.75 11.75V6.25C1.75 5.14543 2.64543 4.25 3.75 4.25H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M17.25 7.75H15.75V10.25H17.25V7.75Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 15.25H11.683C12.4711 15.25 12.9495 14.3808 12.5278 13.7149L9.59478 9.0839C9.20218 8.464 8.29777 8.464 7.90517 9.0839L4.97217 13.7149C4.55047 14.3807 5.02888 15.25 5.81698 15.25H6.24997"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 11.75V13.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 16.5C9.16421 16.5 9.5 16.1642 9.5 15.75C9.5 15.3358 9.16421 15 8.75 15C8.33579 15 8 15.3358 8 15.75C8 16.1642 8.33579 16.5 8.75 16.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M15.4134 12.8308C15.6199 12.5188 15.75 12.1526 15.75 11.75V6.25C15.75 5.146 14.855 4.25 13.75 4.25H3.75C2.645 4.25 1.75 5.146 1.75 6.25V11.75C1.75 12.1526 1.8801 12.5188 2.0866 12.8308"
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

export default BatteryAlert;
