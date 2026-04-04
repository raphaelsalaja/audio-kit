import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CupTogo({
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
          d="M15.25 3.5H13.808L13.218 1.535C13.122 1.218 12.83 1 12.499 1H5.49999C5.16899 1 4.87699 1.217 4.78099 1.535L4.19099 3.5H2.74899C2.33499 3.5 1.99899 3.836 1.99899 4.25C1.99899 4.664 2.33499 5 2.74899 5H15.25C15.664 5 16 4.664 16 4.25C16 3.836 15.664 3.5 15.25 3.5Z"
          fill={fill}
        />
        <path
          d="M3.50201 6.80899C3.48589 6.64288 3.61702 6.5 3.78391 6.5H14.2128C14.3805 6.5 14.5131 6.64199 14.498 6.80899L13.82 15.388C13.749 16.292 12.982 17 12.076 17H5.92401C5.01801 17 4.25101 16.292 4.18001 15.388L3.50201 6.80899Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.0087 13H3.99129L3.67517 9H14.3249L14.0087 13Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CupTogo;
