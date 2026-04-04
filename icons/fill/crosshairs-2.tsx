import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Crosshairs2({
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
          d="M14.75,9.75c-.414,0-.75-.336-.75-.75s.336-.75,.75-.75h2.212c-.357-3.813-3.399-6.855-7.212-7.212V3.25c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75V1.038c-3.813,.356-6.855,3.399-7.212,7.212H3.25c.414,0,.75,.336,.75,.75s-.336,.75-.75,.75H1.038c.357,3.813,3.399,6.855,7.212,7.212v-2.212c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.212c3.813-.356,6.855-3.399,7.212-7.212h-2.212Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Crosshairs2;
