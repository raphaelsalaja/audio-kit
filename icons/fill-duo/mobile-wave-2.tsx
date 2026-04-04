import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileWave2({
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
          d="M5.75 1C4.23119 1 3 2.23119 3 3.75V14.25C3 15.7688 4.23119 17 5.75 17H12.25C13.7688 17 15 15.7688 15 14.25V3.75C15 2.23119 13.7688 1 12.25 1H5.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.493 13.96L7.645 8.24999L7.183 9.761C6.957 10.502 6.284 11 5.509 11H1.75C1.336 11 1 10.664 1 10.25C1 9.836 1.336 9.5 1.75 9.5H5.51C5.621 9.5 5.717 9.429 5.749 9.32299L6.748 6.05299C7.0063 5.2108 8.23555 5.20155 8.507 6.03999L10.355 11.75L10.817 10.239C11.043 9.498 11.716 8.99999 12.491 8.99999H16.251C16.665 8.99999 17.001 9.336 17.001 9.75C17.001 10.164 16.665 10.5 16.251 10.5H12.491C12.38 10.5 12.284 10.571 12.252 10.677L11.253 13.947C10.9943 14.7905 9.7641 14.7974 9.493 13.96Z"
          fill={fill}
        />
        <path
          d="M11.75 1V1.75C11.75 2.44036 11.1904 3 10.5 3H7.5C6.80964 3 6.25 2.44036 6.25 1.75V1H11.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MobileWave2;
