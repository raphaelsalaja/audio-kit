import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SoccerPitch({
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
          d="M14.75,12c-.965,0-1.75-.785-1.75-1.75v-2.5c0-.965,.785-1.75,1.75-1.75h2.25v-1.25c0-.965-.785-1.75-1.75-1.75h-5.5v3.628c1.011,.321,1.75,1.257,1.75,2.372s-.739,2.052-1.75,2.372v3.628h5.5c.965,0,1.75-.785,1.75-1.75v-1.25h-2.25Z"
          fill={fill}
        />
        <path
          d="M14.5,7.75v2.5c0,.138,.112,.25,.25,.25h2.25v-3h-2.25c-.138,0-.25,.112-.25,.25Z"
          fill={secondaryfill}
        />
        <path
          d="M8.25,11.372c-1.011-.321-1.75-1.257-1.75-2.372s.739-2.052,1.75-2.372V3H2.75c-.965,0-1.75,.785-1.75,1.75v1.25H3.25c.965,0,1.75,.785,1.75,1.75v2.5c0,.965-.785,1.75-1.75,1.75H1v1.25c0,.965,.785,1.75,1.75,1.75h5.5v-3.628Z"
          fill={fill}
        />
        <path
          d="M3.5,10.25v-2.5c0-.138-.112-.25-.25-.25H1v3H3.25c.138,0,.25-.112,.25-.25Z"
          fill={secondaryfill}
        />
        <circle cx="9" cy="9" fill={secondaryfill} r="1" />
      </g>
    </svg>
  );
}

export default SoccerPitch;
