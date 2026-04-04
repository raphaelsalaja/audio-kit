import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Bottom({
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
          d="M2 4.25C2 3.00726 3.00792 2 4.25 2H5.75C6.99208 2 8 3.00726 8 4.25V13.75C8 14.9927 6.99208 16 5.75 16H4.25C3.00792 16 2 14.9927 2 13.75V4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10 10.25C10 9.00726 11.0079 8 12.25 8H13.75C14.9921 8 16 9.00726 16 10.25V13.75C16 14.9927 14.9921 16 13.75 16H12.25C11.0079 16 10 14.9927 10 13.75V10.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align3Bottom;
