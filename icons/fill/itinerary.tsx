import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Itinerary({
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
        <rect
          height="5.5"
          width="5.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="2"
          y="1.5"
        />
        <rect
          height="5.5"
          width="5.5"
          fill={fill}
          rx="1.75"
          ry="1.75"
          x="10.5"
          y="11"
        />
        <path
          d="M12.875,3.5h-3.375c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h3.375c.896,0,1.625,.729,1.625,1.625s-.729,1.625-1.625,1.625H5.125c-1.723,0-3.125,1.402-3.125,3.125s1.402,3.125,3.125,3.125h3.375c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75h-3.375c-.896,0-1.625-.729-1.625-1.625s.729-1.625,1.625-1.625h7.75c1.723,0,3.125-1.402,3.125-3.125s-1.402-3.125-3.125-3.125Z"
          fill={secondaryfill}
        />
      </g>
    </svg>
  );
}

export default Itinerary;
