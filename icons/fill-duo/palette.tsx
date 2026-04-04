import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Palette({
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
          d="M2 13.25C2 14.7693 3.23128 16 4.75 16H13.25C14.7687 16 16 14.7693 16 13.25V11.5H2V13.25Z"
          fill={fill}
        />
        <path
          d="M16 6.5H2L2 4.75C2 3.23069 3.23128 2 4.75 2H13.25C14.7687 2 16 3.23069 16 4.75V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.2"
        />
        <path
          d="M16 6.5H2V11.5H16V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default Palette;
