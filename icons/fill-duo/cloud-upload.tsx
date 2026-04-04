import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CloudUpload({
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
          d="M14.146 6.32703C13.704 3.86403 11.535 2 9 2C6.105 2 3.75 4.355 3.75 7.25C3.75 7.378 3.755 7.50801 3.767 7.64001C2.163 8.07101 1 9.525 1 11.25C1 13.318 2.682 15 4.75 15H12.5C14.981 15 17 12.981 17 10.5C17 8.646 15.85 6.99703 14.146 6.32703Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M11.78 9.53103C11.634 9.67703 11.442 9.751 11.25 9.751C11.058 9.751 10.866 9.67803 10.72 9.53103L9.74999 8.561V11.75C9.74999 12.164 9.41399 12.5 8.99999 12.5C8.58599 12.5 8.24999 12.164 8.24999 11.75V8.561L7.27999 9.53103C6.98699 9.82403 6.51199 9.82403 6.21899 9.53103C5.92599 9.23803 5.92599 8.76299 6.21899 8.46999L8.46899 6.21999C8.76199 5.92699 9.23699 5.92699 9.52999 6.21999L11.78 8.46999C12.073 8.76299 12.073 9.23803 11.78 9.53103Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CloudUpload;
