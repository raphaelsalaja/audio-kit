import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WindowBottomRight({
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
          d="M1.00009 12.75V5.25C1.00009 3.7334 2.23349 2.5 3.75009 2.5H14.2501C15.7667 2.5 17.0001 3.7334 17.0001 5.25V12.75C17.0001 14.2666 15.7667 15.5 14.2501 15.5H3.75009C2.23349 15.5 1.00009 14.2666 1.00009 12.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M14.2501 9.5H11.7501C11.3359 9.5 11.0001 9.83579 11.0001 10.25V12.75C11.0001 13.1642 11.3359 13.5 11.7501 13.5H14.2501C14.6643 13.5 15.0001 13.1642 15.0001 12.75V10.25C15.0001 9.83579 14.6643 9.5 14.2501 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default WindowBottomRight;
