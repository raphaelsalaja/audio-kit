import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Align3Vertical({
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
          d="M10 7.25C10 6.00726 11.0079 5 12.25 5H13.75C14.9921 5 16 6.00726 16 7.25V10.75C16 11.9927 14.9921 13 13.75 13H12.25C11.0079 13 10 11.9927 10 10.75V7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Align3Vertical;
