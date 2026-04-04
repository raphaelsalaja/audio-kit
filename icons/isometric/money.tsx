import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Money({
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
          d="M16 14.5V11.5L23 8V11L16 14.5Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M16 11.5L23 8" stroke={fill} />
        <path d="M4 5.5L16 11.5V14.5" stroke={fill} />
        <path d="M9 11V8C12.1242 6.4379 12.8758 6.0621 16 4.5" stroke={fill} />
        <path d="M11 12V10.5V9L18 5.5" stroke={fill} />
        <path
          d="M13 22V19L20 15.5V18.5L13 22Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path d="M13 19L20 15.5" stroke={fill} />
        <path d="M1 13L13 19V22" stroke={fill} />
        <path
          d="M6 18.5V15.5C8.61294 14.1936 9.93023 13.5349 12 12.5"
          stroke={fill}
        />
        <path d="M8 19.5V18V16.5L14 13.5" stroke={fill} />
        <path
          d="M17 14L19.4472 15.2236C19.786 15.393 20 15.7393 20 16.118V17.882C20 18.2607 19.786 18.607 19.4472 18.7764L13.6708 21.6646C13.2485 21.8757 12.7515 21.8757 12.3292 21.6646L1.55279 16.2764C1.214 16.107 1 15.7607 1 15.382V13.618C1 13.2393 1.214 12.893 1.55279 12.7236L7 10"
          stroke={fill}
        />
        <path
          d="M4 7.88197V6.11803C4 5.73926 4.214 5.393 4.55279 5.22361L10.3292 2.33541C10.7515 2.12426 11.2485 2.12426 11.6708 2.33541L22.4472 7.72361C22.786 7.893 23 8.23926 23 8.61803V10.382C23 10.7607 22.786 11.107 22.4472 11.2764L16.6708 14.1646C16.2485 14.3757 15.7515 14.3757 15.3292 14.1646L4.55279 8.77639C4.214 8.607 4 8.26074 4 7.88197Z"
          stroke={fill}
        />
      </g>
    </svg>
  );
}

export default Money;
