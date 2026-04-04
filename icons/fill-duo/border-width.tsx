import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BorderWidth({
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
          d="M16.25 14H1.75C1.336 14 1 14.336 1 14.75C1 15.164 1.336 15.5 1.75 15.5H16.25C16.664 15.5 17 15.164 17 14.75C17 14.336 16.664 14 16.25 14Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M15.75 9H2.25C1.55964 9 1 9.55964 1 10.25V11.25C1 11.9404 1.55964 12.5 2.25 12.5H15.75C16.4404 12.5 17 11.9404 17 11.25V10.25C17 9.55964 16.4404 9 15.75 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M15.75 2H2.25C1.55964 2 1 2.55964 1 3.25V6.25C1 6.94036 1.55964 7.5 2.25 7.5H15.75C16.4404 7.5 17 6.94036 17 6.25V3.25C17 2.55964 16.4404 2 15.75 2Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default BorderWidth;
