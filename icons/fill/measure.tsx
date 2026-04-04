import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Measure({
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
          d="M15.25,7h-5.25v-1.25c0-1.568-1.935-2.75-4.5-2.75S1,4.182,1,5.75v6.5c0,1.568,1.935,2.75,4.5,2.75v-2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.25h2v-2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.25h2v-2.25c0-.414,.336-.75,.75-.75s.75,.336,.75,.75v2.25h1.25c.965,0,1.75-.785,1.75-1.75v-4.5c0-.965-.785-1.75-1.75-1.75Zm-9.75,0c-1.804,0-3-.752-3-1.25s1.196-1.25,3-1.25,3,.752,3,1.25-1.196,1.25-3,1.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Measure;
