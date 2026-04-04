import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copy2({
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
          d="M11.2501 2H3.75009C2.23131 2 1.00009 3.23122 1.00009 4.75V10.25C1.00009 11.7688 2.23131 13 3.75009 13H11.2501C12.7689 13 14.0001 11.7688 14.0001 10.25V4.75C14.0001 3.23122 12.7689 2 11.2501 2Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 5H6.75009C5.23131 5 4.00009 6.23122 4.00009 7.75V13.25C4.00009 14.7688 5.23131 16 6.75009 16H14.2501C15.7689 16 17.0001 14.7688 17.0001 13.25V7.75C17.0001 6.23122 15.7689 5 14.2501 5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Copy2;
