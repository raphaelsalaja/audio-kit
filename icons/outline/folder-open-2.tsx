import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderOpen2({
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
          d="m1.75,5.25v-2.5c0-.828.672-1.5,1.5-1.5h.952c.606,0,1.179.275,1.559.748l.603.752h1.886c1.105,0,2,.895,2,2v.5"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
        <path
          d="m2.468,5.25h7.063c.909,0,1.609.802,1.486,1.703l-.282,2.068c-.135.991-.982,1.73-1.982,1.73H3.246c-1,0-1.847-.739-1.982-1.73l-.282-2.068c-.123-.901.577-1.703,1.486-1.703Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="1.5"
        />
      </g>
    </svg>
  );
}

export default FolderOpen2;
