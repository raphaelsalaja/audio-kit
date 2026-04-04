import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Atm({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path d="M5.37695 10L13.377 14" stroke={fill} />
        <path
          d="M11.5127 16.0925V22.7588L20.3669 18.5568V5.28744L11.5127 16.0925Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12.1708 22.6646L19.6708 18.9146C20.179 18.6605 20.5 18.1411 20.5 17.5729V5.61803C20.5 5.23926 20.286 4.893 19.9472 4.72361L13.215 1.35749C12.7969 1.14845 12.2898 1.25691 11.9938 1.61868L3.83906 11.5856C3.6198 11.8536 3.5 12.1892 3.5 12.5354V18.382C3.5 18.7607 3.714 19.107 4.05279 19.2764L10.8292 22.6646C11.2515 22.8757 11.7485 22.8757 12.1708 22.6646Z"
          stroke={fill}
        />
        <path d="M3.49988 12L11.4999 16L20.3408 5.1944" stroke={fill} />
        <path
          d="M9.65633 8.29909L13.0137 9.98159C13.2227 10.0863 13.4765 10.0322 13.6246 9.85133L16.6612 6.1426C16.7629 6.01837 16.7228 5.83184 16.5791 5.76036L13.2116 4.08627C13.0027 3.98242 12.7498 4.03683 12.602 4.21738L9.57484 7.91728C9.4734 8.04126 9.51311 8.22732 9.65633 8.29909Z"
          stroke={fill}
        />
        <path d="M11.5 16V23" stroke={fill} />
        <path d="M7.5 17.5L9.5 18.5" stroke={fill} strokeLinecap="round" />
      </g>
    </svg>
  );
}

export default Atm;
