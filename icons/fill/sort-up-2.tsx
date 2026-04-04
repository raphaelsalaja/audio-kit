import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortUp2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m9,3.5L7,.833c-.476-.636-1.524-.635-2,0l-2,2.667c-.286.381-.331.883-.118,1.309.213.426.641.691,1.118.691h4c.477,0,.905-.265,1.118-.691.213-.426.168-.927-.118-1.309Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default SortUp2;
