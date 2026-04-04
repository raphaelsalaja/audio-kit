import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sphere2({
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
          d="M9 1C11.2056 1 13 4.5889 13 9C13 13.4111 11.2056 17 9 17C13.4111 17 17 13.4111 17 9C17 4.5889 13.4111 1 9 1Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M13 9C13 4.5889 11.2056 1 9 1C4.5889 1 1 4.5889 1 9C1 13.4111 4.5889 17 9 17C11.2056 17 13 13.4111 13 9Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M17 9C17 11.2056 13.4111 13 9 13C4.5889 13 1 11.2056 1 9C1 13.4111 4.5889 17 9 17C13.4111 17 17 13.4111 17 9Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5735 12.5735C11.9158 15.1936 10.5629 17 9 17C13.4111 17 17 13.4111 17 9C17 10.563 15.1935 11.9158 12.5735 12.5735Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sphere2;
