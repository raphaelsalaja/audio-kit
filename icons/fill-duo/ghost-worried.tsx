import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function GhostWorried({
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
          d="M15.25 17.0007C14.0449 17.0007 13.417 16.4245 12.959 16.0041C12.5781 15.655 12.3936 15.5007 12 15.5007C11.584 15.5007 11.3838 15.6775 11.0049 16.0451C10.5889 16.4484 10.0195 17.0007 9 17.0007C7.9805 17.0007 7.41109 16.4485 6.99509 16.0451C6.61619 15.6774 6.416 15.5007 6 15.5007C5.6064 15.5007 5.42189 15.655 5.04099 16.0041C4.58299 16.4245 3.9551 17.0007 2.75 17.0007C2.3359 17.0007 2 16.6648 2 16.2507V8.0007C2 4.1408 5.1406 1.0007 9 1.0007C12.8594 1.0007 16 4.1408 16 8.0007V16.2507C16 16.6648 15.6641 17.0007 15.25 17.0007Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6 10.0007C6.552 10.0007 7 9.5527 7 9.0007C7 8.4487 6.552 8.0007 6 8.0007C5.448 8.0007 5 8.4487 5 9.0007C5 9.5527 5.448 10.0007 6 10.0007Z"
          fill={fill}
        />
        <path
          d="M12 10.0007C12.552 10.0007 13 9.5527 13 9.0007C13 8.4487 12.552 8.0007 12 8.0007C11.448 8.0007 11 8.4487 11 9.0007C11 9.5527 11.448 10.0007 12 10.0007Z"
          fill={fill}
        />
        <path
          d="M10 12.0007H8C7.724 12.0007 7.5 11.7767 7.5 11.5007C7.5 10.6727 8.172 10.0007 9 10.0007C9.828 10.0007 10.5 10.6727 10.5 11.5007C10.5 11.7767 10.276 12.0007 10 12.0007Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default GhostWorried;
