import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pointer({
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
          d="M2.07949 3.73122C1.70374 2.70213 2.70213 1.70374 3.73122 2.07949L15.1544 6.25356C16.308 6.67566 16.2708 8.31513 15.1057 8.68998L10.2446 10.2455L8.68938 15.1054C8.31557 16.2741 6.67399 16.3072 6.25267 15.1557L2.07949 3.73122Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Pointer;
