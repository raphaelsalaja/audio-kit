import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen2({
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
          d="M11.4097 2.84199L3.60066 10.651C2.73766 11.515 2.19966 14.057 2.00766 15.11C1.96366 15.352 2.04166 15.601 2.21566 15.775C2.35766 15.917 2.54866 15.995 2.74566 15.995C2.78966 15.995 2.83466 15.991 2.87966 15.983C3.93266 15.792 6.47466 15.254 7.33866 14.39L15.1477 6.58099C16.1777 5.54999 16.1777 3.87399 15.1477 2.84299C14.1497 1.84499 12.4077 1.84499 11.4097 2.84199Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.3947 7.33398L10.6562 3.59549L9.59552 4.65615L13.334 8.39464L14.3947 7.33398Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pen2;
