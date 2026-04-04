import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Figure3({
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
          d="M6.5 11L14.5 15L17 10L12 12.5L7 10L6.5 11Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 12.5V9L20 5V8.5L12 12.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M12 22.5L20 18.5V8.5L17 10L16 12L12 19.5V22.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M12 9V12.3305" stroke={fill} />
        <path d="M12 20V22.3192" stroke={fill} />
        <path
          d="M20 5L12.4472 8.77639C12.1657 8.91716 11.8343 8.91716 11.5528 8.77639L4 5"
          stroke={fill}
        />
        <path d="M16 12L17 10L12 20L4 16" stroke={fill} />
        <path
          d="M12.6708 12.1646L19.4472 8.77639C19.786 8.607 20 8.26074 20 7.88197V5.61803C20 5.23926 19.786 4.893 19.4472 4.72361L12.6708 1.33541C12.2485 1.12426 11.7515 1.12426 11.3292 1.33541L4.55279 4.72361C4.214 4.893 4 5.23926 4 5.61803V7.88197C4 8.26074 4.214 8.607 4.55279 8.77639L11.3292 12.1646C11.7515 12.3757 12.2485 12.3757 12.6708 12.1646Z"
          stroke={fill}
        />
        <path
          d="M4 7V5.61803C4 5.23926 4.214 4.893 4.55279 4.72361L11.3292 1.33541C11.7515 1.12426 12.2485 1.12426 12.6708 1.33541L19.4472 4.72361C19.786 4.893 20 5.23926 20 5.61803V17.882C20 18.2607 19.786 18.607 19.4472 18.7764L12.6708 22.1646C12.2485 22.3757 11.7515 22.3757 11.3292 22.1646L4.55279 18.7764C4.214 18.607 4 18.2607 4 17.882V16.2361C4 16.0809 4.03614 15.9278 4.10557 15.7889L7 10"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Figure3;
