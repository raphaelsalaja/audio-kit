import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Grid2({
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
          d="M13.0001 8.51655C13.4483 8.51655 13.8966 8.34616 14.2374 8.00486L16.005 6.23725C16.3361 5.90665 16.5177 5.46725 16.5177 4.99995C16.5177 4.53215 16.3351 4.09274 16.005 3.76264L14.2374 1.99454C13.5558 1.31384 12.4444 1.31284 11.7628 1.99454L9.99524 3.76215C9.66514 4.09275 9.48254 4.53215 9.48254 4.99995C9.48254 5.46725 9.66414 5.90665 9.99524 6.23725L11.7628 8.00486C12.1036 8.34616 12.5519 8.51655 13.0001 8.51655Z"
          fill={fill}
        />
        <path
          d="M6.25012 10H3.75012C2.78362 10 2.00012 10.7835 2.00012 11.75V14.25C2.00012 15.2165 2.78362 16 3.75012 16H6.25012C7.21662 16 8.00012 15.2165 8.00012 14.25V11.75C8.00012 10.7835 7.21662 10 6.25012 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M14.2501 10H11.7501C10.7836 10 10.0001 10.7835 10.0001 11.75V14.25C10.0001 15.2165 10.7836 16 11.7501 16H14.2501C15.2166 16 16.0001 15.2165 16.0001 14.25V11.75C16.0001 10.7835 15.2166 10 14.2501 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M6.25012 2H3.75012C2.78362 2 2.00012 2.7835 2.00012 3.75V6.25C2.00012 7.2165 2.78362 8 3.75012 8H6.25012C7.21662 8 8.00012 7.2165 8.00012 6.25V3.75C8.00012 2.7835 7.21662 2 6.25012 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Grid2;
