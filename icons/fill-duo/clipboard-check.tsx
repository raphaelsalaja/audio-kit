import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardCheck({
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
          d="M5.25 2C3.73079 2 2.5 3.23079 2.5 4.75V14.25C2.5 15.7692 3.73079 17 5.25 17H12.75C14.2692 17 15.5 15.7692 15.5 14.25V4.75C15.5 3.23079 14.2692 2 12.75 2H5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M12.2 6.65C12.5314 6.89853 12.5985 7.36863 12.35 7.7L8.60001 12.7C8.46432 12.8809 8.25424 12.991 8.02825 12.9995C7.80226 13.008 7.5845 12.9141 7.43558 12.7439L5.68558 10.7439C5.41282 10.4321 5.4444 9.95833 5.75613 9.68557C6.06786 9.4128 6.54168 9.44439 6.81444 9.75612L7.95516 11.0598L11.15 6.8C11.3985 6.46863 11.8686 6.40147 12.2 6.65Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M5.5 2.25C5.5 1.28379 6.28379 0.5 7.25 0.5H10.75C11.7162 0.5 12.5 1.28379 12.5 2.25C12.5 3.21621 11.7162 4 10.75 4H7.25C6.28379 4 5.5 3.21621 5.5 2.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default ClipboardCheck;
