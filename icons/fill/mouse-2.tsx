import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Mouse2({
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
          d="M9.75,1h-1.5C5.631,1,3.5,3.131,3.5,5.75v6.5c0,2.619,2.131,4.75,4.75,4.75h1.5c2.619,0,4.75-2.131,4.75-4.75V5.75c0-2.619-2.131-4.75-4.75-4.75Zm0,6.75c0,.414-.336,.75-.75,.75s-.75-.336-.75-.75v-2.5c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Mouse2;
