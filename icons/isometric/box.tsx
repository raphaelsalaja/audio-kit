import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Box({
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
        <path
          d="M12 11L22 6V18L12 23V11Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 11V23" stroke={fill} />
        <path d="M17.2983 8.32349L7.29834 3.32349" stroke={fill} />
        <path
          d="M22 6L12.6708 10.6646C12.2485 10.8757 11.7515 10.8757 11.3292 10.6646L2 6"
          stroke={fill}
        />
        <path
          d="M8.25 13.125L7 12.5L5.75 11.875"
          stroke={fill}
          strokeLinecap="round"
        />
        <path
          d="M21.4472 5.72361L12.6708 1.33541C12.2485 1.12426 11.7515 1.12426 11.3292 1.33541L2.55279 5.72361C2.214 5.893 2 6.23926 2 6.61803V17.382C2 17.7607 2.214 18.107 2.55279 18.2764L11.3292 22.6646C11.7515 22.8757 12.2485 22.8757 12.6708 22.6646L21.4472 18.2764C21.786 18.107 22 17.7607 22 17.382V6.61803C22 6.23926 21.786 5.893 21.4472 5.72361Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Box;
