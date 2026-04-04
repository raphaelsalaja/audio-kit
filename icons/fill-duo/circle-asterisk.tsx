import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleAsterisk({
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
          d="M1 9C1 4.58179 4.58179 1 9 1C13.4182 1 17 4.58179 17 9C17 13.4182 13.4182 17 9 17C4.58179 17 1 13.4182 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M9 4.25C9.41421 4.25 9.75 4.58579 9.75 5V7.70095L12.089 6.35049C12.4477 6.14338 12.9064 6.26628 13.1135 6.62499C13.3206 6.98371 13.1977 7.44241 12.839 7.64952L10.5 9L12.839 10.3505C13.1977 10.5576 13.3206 11.0163 13.1135 11.375C12.9064 11.7337 12.4477 11.8566 12.089 11.6495L9.75 10.2991V13C9.75 13.4142 9.41421 13.75 9 13.75C8.58579 13.75 8.25 13.4142 8.25 13V10.2991L5.91102 11.6495C5.55231 11.8566 5.09361 11.7337 4.8865 11.375C4.67939 11.0163 4.80229 10.5576 5.16101 10.3505L7.50004 9L5.16101 7.64952C4.80229 7.44241 4.67939 6.98371 4.8865 6.62499C5.09361 6.26628 5.55231 6.14338 5.91102 6.35049L8.25 7.70094V5C8.25 4.58579 8.58579 4.25 9 4.25Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CircleAsterisk;
