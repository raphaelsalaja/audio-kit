import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Helicopter({
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
          d="M13.186 13.055C13.24 13.002 13.303 12.959 13.354 12.901C13.971 12.202 14.258 11.272 14.143 10.347L13.768 7.347C13.565 5.724 12.178 4.5 10.543 4.5H7.457C5.822 4.5 4.435 5.724 4.232 7.347L3.857 10.347C3.741 11.272 4.029 12.202 4.646 12.901C4.697 12.959 4.76 13.001 4.814 13.055C3.732 13.713 3 14.893 3 16.25C3 16.664 3.336 17 3.75 17C4.164 17 4.5 16.664 4.5 16.25C4.5 15.009 5.509 14 6.75 14H11.25C12.491 14 13.5 15.009 13.5 16.25C13.5 16.664 13.836 17 14.25 17C14.664 17 15 16.664 15 16.25C15 14.893 14.269 13.713 13.186 13.055ZM5.537 9L5.72 7.533C5.829 6.659 6.576 6 7.457 6H8.25V9H5.537ZM9.75 9V6H10.543C11.423 6 12.17 6.659 12.28 7.533L12.463 9H9.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.75 14C5.50721 14 4.5 15.0072 4.5 16.25C4.5 16.6642 4.16421 17 3.75 17C3.33579 17 3 16.6642 3 16.25C3 14.1788 4.67879 12.5 6.75 12.5H11.25C13.3212 12.5 15 14.1788 15 16.25C15 16.6642 14.6642 17 14.25 17C13.8358 17 13.5 16.6642 13.5 16.25C13.5 15.0072 12.4928 14 11.25 14H6.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 0.25C9.41421 0.25 9.75 0.585786 9.75 1V1.5H16.25C16.6642 1.5 17 1.83579 17 2.25C17 2.66421 16.6642 3 16.25 3H9.75V4.5H8.25V3H1.75C1.33579 3 1 2.66421 1 2.25C1 1.83579 1.33579 1.5 1.75 1.5H8.25V1C8.25 0.585786 8.58579 0.25 9 0.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Helicopter;
