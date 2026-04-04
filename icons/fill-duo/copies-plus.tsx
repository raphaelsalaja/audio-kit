import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CopiesPlus({
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
          d="M13.75 4.5H4.25C3.285 4.5 2.5 5.285 2.5 6.25V9C2.5 9.414 2.836 9.75 3.25 9.75H14.75C15.164 9.75 15.5 9.414 15.5 9V6.25C15.5 5.285 14.715 4.5 13.75 4.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M15.25 14H13.5V12.25C13.5 11.836 13.164 11.5 12.75 11.5C12.336 11.5 12 11.836 12 12.25V14H10.25C9.836 14 9.5 14.336 9.5 14.75C9.5 15.164 9.836 15.5 10.25 15.5H12V17.25C12 17.664 12.336 18 12.75 18C13.164 18 13.5 17.664 13.5 17.25V15.5H15.25C15.664 15.5 16 15.164 16 14.75C16 14.336 15.664 14 15.25 14Z"
          fill={fill}
        />
        <path
          d="M4.25 4.5H13.75C14.24 4.5 14.682 4.70399 15 5.02899V3.25C15 2.285 14.215 1.5 13.25 1.5H4.75C3.785 1.5 3 2.285 3 3.25V5.02899C3.318 4.70399 3.76 4.5 4.25 4.5Z"
          fill={secondaryfill}
          opacity="0.2"
        />
        <path
          d="M8 14.75C8 13.509 9.009 12.5 10.25 12.5H10.5V12.25C10.5 11.009 11.509 10 12.75 10C13.991 10 15 11.009 15 12.25V12.5H15.25C15.514 12.5 15.764 12.554 16 12.638V9.25C16 8.285 15.215 7.5 14.25 7.5H3.75C2.785 7.5 2 8.285 2 9.25V14.25C2 15.215 2.785 16 3.75 16H8.38101C8.14101 15.642 8 15.212 8 14.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CopiesPlus;
