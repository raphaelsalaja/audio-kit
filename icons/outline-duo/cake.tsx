import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Cake({
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
          d="M4.25 7.75H13.75C14.8546 7.75 15.75 8.64543 15.75 9.75V10.9937C15.7496 10.9937 15.7493 10.9937 15.7489 10.9937C15.2117 10.9937 14.9046 11.2635 14.6039 11.5276C14.3155 11.7809 14.0331 12.0289 13.5596 12.0289C13.078 12.0289 12.7437 11.7724 12.4079 11.5147C12.0691 11.2548 11.7289 10.9937 11.2346 10.9937C10.7241 10.9937 10.3689 11.2721 10.0268 11.5401C9.70917 11.789 9.40291 12.0289 8.99436 12.0289C8.57218 12.0289 8.22142 11.7727 7.86892 11.5152C7.51291 11.2551 7.15513 10.9937 6.72022 10.9937C6.31199 10.9937 6.0359 11.2202 5.74415 11.4596C5.41733 11.7277 5.07086 12.012 4.49698 12.012C3.97542 12.012 3.73561 11.7772 3.4863 11.5331C3.21642 11.2688 2.93541 10.9937 2.27377 10.9937L2.25 11.1009V9.75C2.25 8.64543 3.14543 7.75 4.25 7.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9 4.75C9.838 4.75 10.517 4.069 10.517 3.228C10.517 2.072 9 0.75 9 0.75C9 0.75 7.483 2.072 7.483 3.228C7.483 4.069 8.162 4.75 9 4.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.75V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 4.75C9.838 4.75 10.517 4.069 10.517 3.228C10.517 2.072 9 0.75 9 0.75C9 0.75 7.483 2.072 7.483 3.228C7.483 4.069 8.162 4.75 9 4.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 7.75H4.25C3.14543 7.75 2.25 8.64543 2.25 9.75V13.25C2.25 14.3546 3.14543 15.25 4.25 15.25H13.75C14.8546 15.25 15.75 14.3546 15.75 13.25V9.75C15.75 8.64543 14.8546 7.75 13.75 7.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 11C14.758 11 14.491 12 13.5 12C12.509 12 12.241 11 11.25 11C10.259 11 9.991 12 9 12C8.009 12 7.741 11 6.75 11C5.759 11 5.491 12 4.5 12C3.509 12 3.241 11 2.25 11"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Cake;
