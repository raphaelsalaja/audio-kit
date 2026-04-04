import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MagicWandSparkle({
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
          d="M8.8428 2L11.6329 3.82147L14.7153 2.55713L13.8445 5.77307L16 8.31268L12.6731 8.47852L10.9231 11.314L9.7374 8.20062L6.5 7.41333L9.0945 5.32208L8.8428 2Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.49304 4.74201L3.54704 4.42701L3.23104 3.47999C3.12904 3.17399 2.62204 3.17399 2.52004 3.47999L2.20404 4.42701L1.25804 4.74201C1.10504 4.79301 1.00104 4.93603 1.00104 5.09803C1.00104 5.26003 1.10504 5.40299 1.25804 5.45399L2.20404 5.76899L2.52004 6.71601C2.57104 6.86901 2.71404 6.97199 2.87504 6.97199C3.03604 6.97199 3.18004 6.86801 3.23004 6.71601L3.54604 5.76899L4.49204 5.45399C4.64504 5.40299 4.74904 5.26003 4.74904 5.09803C4.74904 4.93603 4.64604 4.79301 4.49304 4.74201Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.658 12.99L15.395 12.5689L14.974 11.3061C14.837 10.8981 14.162 10.8981 14.025 11.3061L13.604 12.5689L12.341 12.99C12.137 13.058 11.999 13.249 11.999 13.464C11.999 13.679 12.137 13.87 12.341 13.938L13.604 14.359L14.025 15.622C14.093 15.826 14.285 15.964 14.5 15.964C14.715 15.964 14.906 15.826 14.975 15.622L15.396 14.359L16.659 13.938C16.863 13.87 17.001 13.679 17.001 13.464C17.001 13.249 16.862 13.058 16.658 12.99Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.75 2.5C6.1642 2.5 6.5 2.164 6.5 1.75C6.5 1.336 6.1642 1 5.75 1C5.3358 1 5 1.336 5 1.75C5 2.164 5.3358 2.5 5.75 2.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.5 15.5L9.7545 8.24542"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.8428 2L11.6329 3.82147L14.7153 2.55713L13.8445 5.77307L16 8.31268L12.6731 8.47852L10.9231 11.314L9.7374 8.20062L6.5 7.41333L9.0945 5.32208L8.8428 2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default MagicWandSparkle;
