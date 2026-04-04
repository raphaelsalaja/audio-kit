import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FlipHorizontal({
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
        <circle cx="9" cy="9" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="2.75" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="5.875" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="12.125" fill={secondaryfill} r=".75" stroke="none" />
        <circle cx="9" cy="15.25" fill={secondaryfill} r=".75" stroke="none" />
        <path
          d="M2.583,5.496l3.5,3.132c.222,.199,.222,.546,0,.745l-3.5,3.132c-.322,.288-.833,.06-.833-.373V5.868c0-.432,.511-.661,.833-.373Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.417,5.496l-3.5,3.132c-.222,.199-.222,.546,0,.745l3.5,3.132c.322,.288,.833,.06,.833-.373V5.868c0-.432-.511-.661-.833-.373Z"
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

export default FlipHorizontal;
