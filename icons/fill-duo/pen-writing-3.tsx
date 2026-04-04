import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting3({
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
          d="M9.46967 14.1497C10.5216 13.0978 12.2284 13.0978 13.2803 14.1497C13.7464 14.6158 14.5036 14.6158 14.9697 14.1497C15.2626 13.8568 15.7374 13.8568 16.0303 14.1497C16.3232 14.4426 16.3232 14.9174 16.0303 15.2103C14.9784 16.2622 13.2716 16.2622 12.2197 15.2103C11.7536 14.7442 10.9964 14.7442 10.5303 15.2103C10.2374 15.5032 9.76256 15.5032 9.46967 15.2103C9.17678 14.9174 9.17678 14.4426 9.46967 14.1497Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M11.4097 2.84199L3.60066 10.651C2.73766 11.515 2.19966 14.057 2.00766 15.11C1.96366 15.352 2.04166 15.601 2.21566 15.775C2.35766 15.917 2.54866 15.995 2.74566 15.995C2.78966 15.995 2.83466 15.991 2.87966 15.983C3.93266 15.792 6.47466 15.254 7.33866 14.39L15.1477 6.58099C16.1777 5.54999 16.1777 3.87399 15.1477 2.84299C14.1497 1.84499 12.4077 1.84499 11.4097 2.84199Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default PenWriting3;
