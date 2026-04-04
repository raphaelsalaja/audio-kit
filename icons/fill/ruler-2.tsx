import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ruler2({
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
          d="m11.462,2.51l-1.972-1.972c-.715-.716-1.881-.716-2.596,0L.538,6.894c-.348.347-.538.809-.538,1.299s.191.952.538,1.297l1.972,1.972c.357.358.828.537,1.298.537s.94-.179,1.298-.537l.648-.648-1.661-1.661c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.661,1.661.94-.939-.911-.911c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l.911.911.94-.939-1.661-1.661c-.293-.293-.293-.768,0-1.061s.768-.293,1.061,0l1.661,1.661.647-.647c.348-.347.538-.809.538-1.299s-.191-.952-.538-1.297Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Ruler2;
