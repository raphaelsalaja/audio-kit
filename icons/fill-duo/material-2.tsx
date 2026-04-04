import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Material2({
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
          d="M8.439 2H4.75C3.233 2 2 3.233 2 4.75V8.439L8.439 2Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M2 10.561V13.25C2 13.735 2.137 14.185 2.358 14.581L14.581 2.358C14.185 2.137 13.735 2 13.25 2H10.561L2 10.561Z"
          fill={fill}
        />
        <path
          d="M15.9999 7.439V4.75C15.9999 4.265 15.8629 3.815 15.6419 3.419L3.41895 15.642C3.81495 15.863 4.26495 16 4.74995 16H7.43895L15.9999 7.439Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M9.56104 16H13.25C14.767 16 16 14.767 16 13.25V9.561L9.56104 16Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Material2;
