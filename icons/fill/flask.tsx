import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flask({
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
          d="M15.045,13.722l-3.545-6.903V2.5h.75c.414,0,.75-.336,.75-.75s-.336-.75-.75-.75H5.75c-.414,0-.75,.336-.75,.75s.336,.75,.75,.75h.75V6.819l-3.545,6.903c-.361,.703-.331,1.525,.081,2.2,.412,.675,1.13,1.078,1.92,1.078H13.043c.791,0,1.509-.403,1.92-1.078,.412-.675,.442-1.497,.081-2.2ZM7.917,7.343c.055-.106,.083-.224,.083-.343V2.5h2V7c0,.119,.028,.237,.083,.343l1.621,3.157H6.296l1.621-3.157Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Flask;
