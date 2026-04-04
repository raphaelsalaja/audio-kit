import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MaskCircle({
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
          d="M9 1C4.58179 1 1 4.58179 1 9C1 13.4182 4.58179 17 9 17C13.4182 17 17 13.4182 17 9C17 4.58179 13.4182 1 9 1Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5704 1.42189C10.7636 1.14835 9.89915 1 9 1C4.58179 1 1 4.58179 1 9C1 9.90193 1.14927 10.769 1.42444 11.5779C2.23116 11.8514 3.09567 11.9998 3.99481 11.9998C8.41303 11.9998 11.9948 8.41798 11.9948 3.99977C11.9948 3.09784 11.8455 2.23076 11.5704 1.42189Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MaskCircle;
