import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MobileHeart({
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
          d="M8.79801 11.949C8.92501 12.017 9.074 12.017 9.201 11.949C9.874 11.591 11.999 10.294 11.999 8.186C12.002 7.26 11.269 6.506 10.359 6.5C9.81202 6.507 9.303 6.788 8.999 7.252C8.695 6.789 8.18602 6.508 7.63902 6.5C6.72902 6.506 5.996 7.26 5.999 8.186C5.999 10.295 8.12501 11.592 8.79801 11.949Z"
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

export default MobileHeart;
