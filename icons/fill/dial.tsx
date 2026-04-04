import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Dial({
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
        <circle cx="9" cy=".75" fill={secondaryfill} r=".75" />
        <circle cx="14.834" cy="3.166" fill={secondaryfill} r=".75" />
        <circle cx="17.25" cy="9" fill={secondaryfill} r=".75" />
        <circle cx="14.834" cy="14.834" fill={secondaryfill} r=".75" />
        <circle cx="3.166" cy="14.834" fill={secondaryfill} r=".75" />
        <circle cx=".75" cy="9" fill={secondaryfill} r=".75" />
        <circle cx="3.166" cy="3.166" fill={secondaryfill} r=".75" />
        <path
          d="M8.47,9.53c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l4.203,4.204c.791-1.016,1.266-2.289,1.266-3.674,0-3.309-2.691-6-6-6S3,5.691,3,9s2.691,6,6,6c1.384,0,2.657-.476,3.673-1.266l-4.203-4.204Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Dial;
