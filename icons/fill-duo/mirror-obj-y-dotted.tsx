import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MirrorObjYDotted({
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
          d="M2 4.75C2 3.23079 3.23079 2 4.75 2H13.25C14.7692 2 16 3.23079 16 4.75V6.25C16 6.66421 15.6642 7 15.25 7H2.75C2.33579 7 2 6.66421 2 6.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M2 11.75C2 11.3358 2.33579 11 2.75 11H15.25C15.6642 11 16 11.3358 16 11.75V13.25C16 14.7692 14.7692 16 13.25 16H4.75C3.23079 16 2 14.7692 2 13.25V11.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M9 9.75C9.414 9.75 9.75 9.414 9.75 9C9.75 8.586 9.414 8.25 9 8.25C8.586 8.25 8.25 8.586 8.25 9C8.25 9.414 8.586 9.75 9 9.75Z"
          fill={fill}
        />
        <path
          d="M15.25 9.75C15.664 9.75 16 9.414 16 9C16 8.586 15.664 8.25 15.25 8.25C14.836 8.25 14.5 8.586 14.5 9C14.5 9.414 14.836 9.75 15.25 9.75Z"
          fill={fill}
        />
        <path
          d="M12.125 9.75C12.539 9.75 12.875 9.414 12.875 9C12.875 8.586 12.539 8.25 12.125 8.25C11.711 8.25 11.375 8.586 11.375 9C11.375 9.414 11.711 9.75 12.125 9.75Z"
          fill={fill}
        />
        <path
          d="M5.875 9.75C6.289 9.75 6.625 9.414 6.625 9C6.625 8.586 6.289 8.25 5.875 8.25C5.461 8.25 5.125 8.586 5.125 9C5.125 9.414 5.461 9.75 5.875 9.75Z"
          fill={fill}
        />
        <path
          d="M2.75 9.75C3.164 9.75 3.5 9.414 3.5 9C3.5 8.586 3.164 8.25 2.75 8.25C2.336 8.25 2 8.586 2 9C2 9.414 2.336 9.75 2.75 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MirrorObjYDotted;
