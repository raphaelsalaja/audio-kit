import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen3({
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
          d="M9.09546 5.15618L13.0557 9.11633C13.5438 9.60444 13.5438 10.3956 13.0557 10.8837L11.4697 12.4697C11.1768 12.7626 11.1768 13.2374 11.4697 13.5303C11.7626 13.8232 12.2375 13.8232 12.5304 13.5303L14.1164 11.9443C15.1903 10.8704 15.1903 9.12956 14.1164 8.05567C12.7963 6.7356 11.4762 5.41559 10.1561 4.09552L9.09546 5.15618Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Pen3;
