import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hammer2({
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
          d="M16.207 8.944L14.686 10.465C14.295 10.856 13.662 10.856 13.272 10.465L5.742 2.934L6.676 2L10.867 2.493C11.09 2.519 11.298 2.62 11.457 2.779L16.207 7.529C16.598 7.92 16.598 8.553 16.207 8.943V8.944Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.529 8.721L4.96599 15.284C4.34499 15.905 3.33699 15.905 2.71599 15.284C2.09499 14.663 2.09499 13.655 2.71599 13.034L9.27899 6.471"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.207 8.944L14.686 10.465C14.295 10.856 13.662 10.856 13.272 10.465L5.742 2.934L6.676 2L10.867 2.493C11.09 2.519 11.298 2.62 11.457 2.779L16.207 7.529C16.598 7.92 16.598 8.553 16.207 8.943V8.944Z"
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

export default Hammer2;
