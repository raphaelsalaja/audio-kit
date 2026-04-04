import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sofa({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V12.0334C16 12.4477 15.6642 12.7834 15.25 12.7834H2.75C2.33579 12.7834 2 12.4477 2 12.0334V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.75 6C14.785 6 14 6.785 14 7.75V10.5H4V7.75C4 6.785 3.215 6 2.25 6C1.285 6 0.5 6.785 0.5 7.75V11.25C0.5 12.505 1.349 13.554 2.5 13.883V15.25C2.5 15.664 2.836 16 3.25 16C3.664 16 4 15.664 4 15.25V14H14V15.25C14 15.664 14.336 16 14.75 16C15.164 16 15.5 15.664 15.5 15.25V13.883C16.651 13.554 17.5 12.505 17.5 11.25V7.75C17.5 6.785 16.715 6 15.75 6Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Sofa;
