import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Figure2({
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
          d="M6 10.5L12 7.5V13.4815L6 10.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M16 21.5V7.5L22 4.5V18.5L16 21.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M16 15.5L22 12.5" stroke={fill} />
        <path
          d="M22 12V17.882C22 18.2607 21.786 18.607 21.4472 18.7764L16.6708 21.1646C16.2485 21.3757 15.7515 21.3757 15.3292 21.1646L2.55279 14.7764C2.214 14.607 2 14.2607 2 13.882V9.11803C2 8.73926 2.214 8.393 2.55279 8.22361L7.32918 5.83541C7.75147 5.62426 8.24853 5.62426 8.67082 5.83541L12 7.5"
          stroke={fill}
        />
        <path d="M2 8.5L16 15.5V21.5" stroke={fill} />
        <path d="M16 15.5L16 7.5L12 5.5" stroke={fill} />
        <path
          d="M12 13.5L16 15.5L22 12.5V5.11803C22 4.73926 21.786 4.393 21.4472 4.22361L18.6708 2.83541C18.2485 2.62426 17.7515 2.62426 17.3292 2.83541L12.5528 5.22361C12.214 5.393 12 5.73926 12 6.11803V13.5Z"
          stroke={fill}
        />
        <path d="M16 7.5L22 4.5" stroke={fill} />
      </g>
    </svg>
  );
}

export default Figure2;
