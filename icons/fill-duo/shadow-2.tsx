import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Shadow2({
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
          d="M1 7C1 3.68679 3.68679 1 7 1C10.3132 1 13 3.68679 13 7C13 10.3132 10.3132 13 7 13C3.68679 13 1 10.3132 1 7Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.30609 12.7575C6.03734 15.2461 8.33857 17.0635 11.0635 17.0635C14.3768 17.0635 17.0635 14.3767 17.0635 11.0635C17.0635 8.33851 15.2461 6.03727 12.7575 5.30604C12.9153 5.84326 13 6.41176 13 7C13 10.3132 10.3132 13 7 13C6.41178 13 5.8433 12.9153 5.30609 12.7575Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Shadow2;
