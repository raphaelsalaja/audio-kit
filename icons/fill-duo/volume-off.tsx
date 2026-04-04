import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeOff({
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
          d="M14.5 4.41963V2.664C14.5 1.67539 13.4072 1.07941 12.5759 1.61119L7.28056 5H3.75C2.50779 5 1.5 6.00778 1.5 7.25V10.75C1.5 11.9922 2.50779 13 3.75 13H5.60184L14.5 4.41963Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.5 7.54529L8.21976 13.6012L12.5759 16.3898C13.4072 16.9216 14.5 16.3256 14.5 15.337V7.54529Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M17.2899 1.7294C17.5774 2.02757 17.5688 2.50236 17.2706 2.78988L3.2706 16.2899C2.97243 16.5774 2.49764 16.5688 2.21012 16.2706C1.9226 15.9724 1.93123 15.4976 2.2294 15.2101L16.2294 1.71012C16.5276 1.4226 17.0024 1.43123 17.2899 1.7294Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default VolumeOff;
