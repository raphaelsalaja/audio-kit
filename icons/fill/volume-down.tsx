import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeDown({
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
          d="M13.35 1.567C12.95 1.348 12.462 1.364 12.077 1.611L6.782 5H3.75C2.509 5 1.5 6.009 1.5 7.25V10.75C1.5 11.991 2.509 13 3.75 13H6.781L12.076 16.389C12.281 16.52 12.515 16.587 12.751 16.587C12.957 16.587 13.163 16.536 13.35 16.434C13.751 16.215 14 15.794 14 15.337V2.664C14 2.207 13.751 1.787 13.35 1.567Z"
          fill={fill}
        />
        <path
          d="M15.2195 7.05567C15.5124 6.76278 15.9872 6.76278 16.2801 7.05567C17.354 8.12956 17.354 9.87043 16.2801 10.9443C15.9872 11.2372 15.5124 11.2372 15.2195 10.9443C14.9266 10.6514 14.9266 10.1766 15.2195 9.88367C15.7076 9.39556 15.7076 8.60444 15.2195 8.11633C14.9266 7.82344 14.9266 7.34856 15.2195 7.05567Z"
          fill={secondaryfill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default VolumeDown;
