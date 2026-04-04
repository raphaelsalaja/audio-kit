import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Clapperboard({
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
          d="M14.25,2H3.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H14.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75Zm1.25,2.75v1.25h-2.536l1.25-2.5h.036c.689,0,1.25,.561,1.25,1.25Zm-10.036,1.25l1.25-2.5h2.073l-1.25,2.5h-2.073Zm5-2.5h2.073l-1.25,2.5h-2.073l1.25-2.5Zm-6.714,0h1.286l-1.25,2.5h-1.286v-1.25c0-.689,.561-1.25,1.25-1.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Clapperboard;
