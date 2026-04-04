import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudRefresh({
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
          d="M14.146 6.32703C13.704 3.86403 11.535 2 9 2C6.105 2 3.75 4.355 3.75 7.25C3.75 7.378 3.755 7.50801 3.767 7.64001C2.163 8.07101 1 9.525 1 11.25C1 13.076 2.313 14.597 4.043 14.929C4.031 14.785 4 14.647 4 14.5C4 11.743 6.243 9.5 9 9.5C9.402 9.5 9.797 9.54698 10.181 9.63898C10.586 9.24298 11.14 9 11.75 9C12.991 9 14 10.009 14 11.25V13.75C14 14.133 13.9 14.491 13.731 14.807C15.612 14.267 17 12.552 17 10.5C17 8.646 15.85 6.99703 14.146 6.32703Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.75 10.5C11.336 10.5 11 10.836 11 11.25V11.624C10.428 11.226 9.737 11 9 11C7.07 11 5.5 12.57 5.5 14.5C5.5 16.43 7.07 18 9 18C9.959 18 10.887 17.6 11.546 16.902C11.83 16.601 11.817 16.126 11.515 15.842C11.215 15.558 10.74 15.571 10.455 15.873C10.073 16.278 9.556 16.5 9 16.5C7.897 16.5 7 15.603 7 14.5C7 13.397 7.897 12.5 9 12.5C9.495 12.5 9.941 12.693 10.295 13H9.25C8.836 13 8.5 13.336 8.5 13.75C8.5 14.164 8.836 14.5 9.25 14.5H11.75C12.164 14.5 12.5 14.164 12.5 13.75V11.25C12.5 10.836 12.164 10.5 11.75 10.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudRefresh;
