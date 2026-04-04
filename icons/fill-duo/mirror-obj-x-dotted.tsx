import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjXDotted({
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
          d="M13.25 2C14.7692 2 16 3.23079 16 4.75L16 13.25C16 14.7692 14.7692 16 13.25 16L11.75 16C11.3358 16 11 15.6642 11 15.25L11 2.75C11 2.33579 11.3358 2 11.75 2L13.25 2Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.25 2C6.66421 2 7 2.33579 7 2.75L7 15.25C7 15.6642 6.66421 16 6.25 16L4.75 16C3.23079 16 2 14.7692 2 13.25L2 4.75C2 3.23079 3.23079 2 4.75 2L6.25 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.25 9C8.25 9.414 8.586 9.75 9 9.75C9.414 9.75 9.75 9.414 9.75 9C9.75 8.586 9.414 8.25 9 8.25C8.586 8.25 8.25 8.586 8.25 9Z"
          fill={fill}
        />
        <path
          d="M8.25 15.25C8.25 15.664 8.586 16 9 16C9.414 16 9.75 15.664 9.75 15.25C9.75 14.836 9.414 14.5 9 14.5C8.586 14.5 8.25 14.836 8.25 15.25Z"
          fill={fill}
        />
        <path
          d="M8.25 12.125C8.25 12.539 8.586 12.875 9 12.875C9.414 12.875 9.75 12.539 9.75 12.125C9.75 11.711 9.414 11.375 9 11.375C8.586 11.375 8.25 11.711 8.25 12.125Z"
          fill={fill}
        />
        <path
          d="M8.25 5.875C8.25 6.289 8.586 6.625 9 6.625C9.414 6.625 9.75 6.289 9.75 5.875C9.75 5.461 9.414 5.125 9 5.125C8.586 5.125 8.25 5.461 8.25 5.875Z"
          fill={fill}
        />
        <path
          d="M8.25 2.75C8.25 3.164 8.586 3.5 9 3.5C9.414 3.5 9.75 3.164 9.75 2.75C9.75 2.336 9.414 2 9 2C8.586 2 8.25 2.336 8.25 2.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MirrorObjXDotted;
