import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BabyCarriage({
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
          d="M5.25 16.5C5.94036 16.5 6.5 15.9404 6.5 15.25C6.5 14.5596 5.94036 14 5.25 14C4.55964 14 4 14.5596 4 15.25C4 15.9404 4.55964 16.5 5.25 16.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M13.75 16.5C14.4404 16.5 15 15.9404 15 15.25C15 14.5596 14.4404 14 13.75 14C13.0596 14 12.5 14.5596 12.5 15.25C12.5 15.9404 13.0596 16.5 13.75 16.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M5.25 16.5C5.94 16.5 6.5 15.9404 6.5 15.25C6.5 14.5596 5.94 14 5.25 14C4.56 14 4 14.5596 4 15.25C4 15.9404 4.56 16.5 5.25 16.5Z"
          fill={fill}
        />
        <path
          d="M13.75 16.5C14.44 16.5 15 15.9404 15 15.25C15 14.5596 14.44 14 13.75 14C13.06 14 12.5 14.5596 12.5 15.25C12.5 15.9404 13.06 16.5 13.75 16.5Z"
          fill={fill}
        />
        <path
          d="M3 7H16V9.25C16 11.3202 14.3202 13 12.25 13H6.75C4.67979 13 3 11.3202 3 9.25V7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M1.25 4.75C1.25 4.33579 1.58579 4 2 4H2.25C3.49221 4 4.5 5.00779 4.5 6.25V7H3V6.25C3 5.83621 2.66379 5.5 2.25 5.5H2C1.58579 5.5 1.25 5.16421 1.25 4.75Z"
          fill={fill}
        />
        <path
          d="M9.75 1C9.33579 1 9 1.33579 9 1.75V7H15.9951C15.8639 3.66372 13.1185 1 9.75 1Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
      </g>
    </svg>
  );
}

export default BabyCarriage;
