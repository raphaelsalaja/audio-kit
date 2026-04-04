import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Basement({
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
          d="M13.25 1H4.75C3.233 1 2 2.233 2 3.75V14.25C2 15.767 3.233 17 4.75 17H13.25C14.767 17 16 15.767 16 14.25V3.75C16 2.233 14.767 1 13.25 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M4.75 15.5H13.25C13.939 15.5 14.5 14.939 14.5 14.25V13.5H3.5V14.25C3.5 14.939 4.061 15.5 4.75 15.5Z"
          fill={fill}
        />
        <path d="M11 6.5V8.5H14.5V6.5H11Z" fill={fill} />
        <path d="M14.5 12V10H7.5V12H14.5Z" fill={fill} />
      </g>
    </svg>
  );
}

export default Basement;
