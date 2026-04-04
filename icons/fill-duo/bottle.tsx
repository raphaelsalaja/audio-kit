import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Bottle({
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
          d="M11 6.0938V3.5H7V6.0938C5.2852 6.4708 4 7.9942 4 9.8223V15.75C4 16.7165 4.7835 17.5 5.75 17.5H12.25C13.2165 17.5 14 16.7165 14 15.75V9.8223C14 7.9942 12.7148 6.4707 11 6.0938Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.25 10H4V14.5H9.25C9.6642 14.5 10 14.1642 10 13.75V10.75C10 10.3358 9.6642 10 9.25 10Z"
          fill={fill}
        />
        <path
          d="M9.5 0.5H8.5C7.6716 0.5 7 1.1716 7 2V3.5H11V2C11 1.1716 10.3284 0.5 9.5 0.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Bottle;
