import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Windsock({
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
          d="M7.50794 2.14317C6.72968 1.9785 6 2.57245 6 3.36599V9.634C6 10.4283 6.73091 11.0192 7.50644 10.8571L16.0056 9.06831L16.0069 9.06804C16.5887 8.9465 17 8.43133 17 7.84399V5.15499C17 4.56299 16.5844 4.05445 16.0086 3.93232L7.50794 2.14317Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 1C4.16421 1 4.5 1.33579 4.5 1.75V16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25V1.75C3 1.33579 3.33579 1 3.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 10.5428V2.45721L10.5 2.77291V10.2271L9 10.5428Z"
          fill={fill}
        />
        <path
          d="M13 9.7009V3.29909L14.5 3.61479V9.38519L13 9.7009Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Windsock;
