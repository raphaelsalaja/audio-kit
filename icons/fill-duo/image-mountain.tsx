import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ImageMountain({
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
          d="M5.5 6C6.60457 6 7.5 5.10457 7.5 4C7.5 2.89543 6.60457 2 5.5 2C4.39543 2 3.5 2.89543 3.5 4C3.5 5.10457 4.39543 6 5.5 6Z"
          fill={fill}
        />
        <path
          d="M12.661 6.401C11.995 5.495 10.506 5.495 9.83998 6.401L7.12498 10.093L6.28498 8.951C5.61898 8.044 4.13098 8.044 3.46498 8.951L1.06698 12.213C0.673982 12.748 0.615982 13.447 0.915982 14.04C1.21598 14.633 1.81398 15 2.47798 15H15.523C16.186 15 16.785 14.632 17.085 14.04C17.385 13.448 17.326 12.748 16.934 12.213L12.661 6.401Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ImageMountain;
