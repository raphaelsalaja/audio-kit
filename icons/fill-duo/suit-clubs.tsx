import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitClubs({
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
          d="M12.999 5.07C12.999 5.047 12.999 5.023 12.999 5C12.999 2.794 11.205 1 8.99899 1C6.79299 1 4.99899 2.794 4.99899 5C4.99899 5.023 4.99899 5.047 4.99899 5.07C3.14999 5.422 1.74799 7.05 1.74799 9C1.74799 11.206 3.54199 13 5.74799 13C7.08499 13 8.27099 12.34 8.99799 11.33C9.72499 12.341 10.911 13 12.248 13C14.454 13 16.248 11.206 16.248 9C16.248 7.05 14.846 5.422 12.997 5.07H12.999Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.97916 12.3183C8.37446 12.0517 8.71982 11.7164 8.99799 11.33C9.27745 11.7186 9.62473 12.0552 10.0223 12.3224C10.6632 14.0783 12.3314 15.1834 13.905 15.516C14.281 15.596 14.536 15.946 14.496 16.328C14.456 16.71 14.134 17 13.75 17H4.24999C3.86599 17 3.54399 16.71 3.50399 16.328C3.46499 15.946 3.71999 15.596 4.09499 15.516C5.66982 15.1831 7.33941 14.0766 7.97916 12.3183Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default SuitClubs;
