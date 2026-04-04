import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Slideshow({
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
          d="M5.00012 17C5.55241 17 6.00012 16.5523 6.00012 16C6.00012 15.4477 5.55241 15 5.00012 15C4.44784 15 4.00012 15.4477 4.00012 16C4.00012 16.5523 4.44784 17 5.00012 17Z"
          fill={fill}
        />
        <path
          d="M13.0001 17C13.5524 17 14.0001 16.5523 14.0001 16C14.0001 15.4477 13.5524 15 13.0001 15C12.4478 15 12.0001 15.4477 12.0001 16C12.0001 16.5523 12.4478 17 13.0001 17Z"
          fill={fill}
        />
        <path
          d="M9.00012 17.25C9.69048 17.25 10.2501 16.6904 10.2501 16C10.2501 15.3096 9.69048 14.75 9.00012 14.75C8.30977 14.75 7.75012 15.3096 7.75012 16C7.75012 16.6904 8.30977 17.25 9.00012 17.25Z"
          fill={fill}
        />
        <path
          d="M14.2501 2H3.75012C2.23134 2 1.00012 3.23122 1.00012 4.75V10.75C1.00012 12.2688 2.23134 13.5 3.75012 13.5H14.2501C15.7689 13.5 17.0001 12.2688 17.0001 10.75V4.75C17.0001 3.23122 15.7689 2 14.2501 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Slideshow;
