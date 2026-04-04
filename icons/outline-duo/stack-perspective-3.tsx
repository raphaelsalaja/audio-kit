import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function StackPerspective3({
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
          d="M9.391 8.25299L13.891 6.52199C14.546 6.26999 15.25 6.75399 15.25 7.45499V14.062C15.25 14.476 14.995 14.847 14.609 14.995L10.109 16.726C9.454 16.978 8.75 16.494 8.75 15.793V9.18599C8.75 8.77199 9.005 8.40099 9.391 8.25299Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.144 2.01599C8.926 1.57399 8.395 1.32899 7.891 1.52299L3.391 3.25299C3.005 3.40099 2.75 3.77299 2.75 4.18599V10.793C2.75 11.172 2.958 11.482 3.25 11.652"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.144 4.51599C11.926 4.07399 11.395 3.82899 10.891 4.02299L6.391 5.75399C6.005 5.90199 5.75 6.27399 5.75 6.68699V13.294C5.75 13.673 5.958 13.983 6.25 14.153"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.391 8.25299L13.891 6.52199C14.546 6.26999 15.25 6.75399 15.25 7.45499V14.062C15.25 14.476 14.995 14.847 14.609 14.995L10.109 16.726C9.454 16.978 8.75 16.494 8.75 15.793V9.18599C8.75 8.77199 9.005 8.40099 9.391 8.25299Z"
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

export default StackPerspective3;
