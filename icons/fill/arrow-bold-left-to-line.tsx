import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldLeftToLine({
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
          d="M15.25,6.5h-3.25v-1.521c0-.472-.261-.898-.681-1.113-.421-.214-.919-.176-1.302,.101L4.461,7.987c-.324,.234-.517,.613-.517,1.013,0,.4,.194,.778,.517,1.012l5.556,4.021c.218,.158,.475,.238,.732,.238,.194,0,.389-.045,.569-.137,.42-.215,.681-.641,.681-1.113v-1.521h3.25c.965,0,1.75-.785,1.75-1.75v-1.5c0-.965-.785-1.75-1.75-1.75Z"
          fill={fill}
        />
        <path
          d="M1.75,3c-.414,0-.75,.336-.75,.75V14.25c0,.414,.336,.75,.75,.75s.75-.336,.75-.75V3.75c0-.414-.336-.75-.75-.75Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default ArrowBoldLeftToLine;
