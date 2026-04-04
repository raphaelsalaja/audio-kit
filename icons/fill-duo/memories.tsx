import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Memories({
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
          d="M8.38 5.791C7.997 5.567 7.517 5.564 7.128 5.787C6.74 6.009 6.5 6.425 6.5 6.871V11.13C6.5 11.576 6.74 11.992 7.128 12.214C7.32 12.324 7.535 12.38 7.75 12.38C7.968 12.38 8.187 12.323 8.38 12.211L12.03 10.081C12.419 9.854 12.65 9.451 12.65 9.001C12.65 8.551 12.419 8.148 12.03 7.921L8.38 5.791Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9 2.5C6.28376 2.5 3.95542 4.16633 2.98387 6.53465C2.85735 6.84307 2.54244 7.03096 2.21094 6.99582C1.87943 6.96068 1.61091 6.71095 1.55185 6.38286L1.01186 3.38286C0.938483 2.9752 1.20947 2.58524 1.61714 2.51186C2.0248 2.43848 2.41476 2.70948 2.48814 3.11714L2.66715 4.11165C4.1296 2.21962 6.42165 1 9 1C13.4185 1 17 4.58606 17 9C17 13.4139 13.4185 17 9 17C4.65586 17 1.12095 13.5338 1.00309 9.22209C0.99177 8.80803 1.31826 8.4632 1.73231 8.45188C2.14637 8.44056 2.49121 8.76705 2.50253 9.18111C2.59827 12.6834 5.47113 15.5 9 15.5C12.5895 15.5 15.5 12.5861 15.5 9C15.5 5.41394 12.5895 2.5 9 2.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Memories;
