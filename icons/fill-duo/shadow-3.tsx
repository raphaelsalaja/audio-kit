import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shadow3({
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
          d="M2 3.75C2 2.78379 2.78379 2 3.75 2H10.75C11.7162 2 12.5 2.78379 12.5 3.75V10.75C12.5 11.7162 11.7162 12.5 10.75 12.5H3.75C2.78379 12.5 2 11.7162 2 10.75V3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.5 12.5V14.25C5.5 15.2162 6.28379 16 7.25 16H14.25C15.2162 16 16 15.2162 16 14.25V7.25C16 6.28379 15.2162 5.5 14.25 5.5H12.5V10.75C12.5 11.7162 11.7162 12.5 10.75 12.5H5.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Shadow3;
