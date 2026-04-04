import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Pen({
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
          d="M11.4097 2.84199L3.60069 10.651C2.73769 11.515 2.19969 14.057 2.00769 15.11C1.96369 15.352 2.04169 15.601 2.21569 15.775C2.35769 15.917 2.54869 15.995 2.74569 15.995C2.78969 15.995 2.83469 15.991 2.87969 15.983C3.93269 15.792 6.47469 15.254 7.33869 14.39L15.1477 6.58099C16.1777 5.54998 16.1777 3.87399 15.1477 2.84299C14.1497 1.84499 12.4077 1.84499 11.4097 2.84199Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Pen;
