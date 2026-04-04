import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SquareKanban2({
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
          d="M13.25,2H4.75c-1.517,0-2.75,1.233-2.75,2.75V13.25c0,1.517,1.233,2.75,2.75,2.75H13.25c1.517,0,2.75-1.233,2.75-2.75V4.75c0-1.517-1.233-2.75-2.75-2.75ZM6.5,12.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v6.5Zm3.25-4.5c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2Zm3.25,2.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V5.75c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v4.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SquareKanban2;
